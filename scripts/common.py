from pathlib import Path
import json, re, subprocess, xml.etree.ElementTree as ET
ROOT = Path(__file__).resolve().parents[1]
def read_json(path):
    return json.loads(Path(path).read_text(encoding="utf-8-sig"))
def identity(): return read_json(ROOT / "distribution/identity.json")
def version():
    v = read_json(ROOT / "version.json")
    if not re.fullmatch(r"[0-9]+\.[0-9]+\.[0-9]+", v.get("versionName", "")):
        raise ValueError("versionName must use major.minor.patch")
    if type(v.get("versionCode")) is not int or not 1 < v["versionCode"] < 2100000000:
        raise ValueError("versionCode must be an integer greater than the original code 1")
    return v

def validate_source():
    ident, ver = identity(), version()
    manifest = ET.parse(ROOT / "AndroidManifest.xml").getroot()
    if manifest.attrib.get("package") != ident["applicationId"]:
        raise ValueError("applicationId changed: existing installations would become a different app")
    source = (ROOT / "src/com/yunjin/wordstep/MainActivity.java").read_text(encoding="utf-8")
    host = re.search(r'HOST\s*=\s*"([^"]+)"', source)
    if not host or host.group(1) != ident["webViewHost"]:
        raise ValueError("WebView origin changed: saved learning data would no longer be visible")
    js = (ROOT / "assets/app.js").read_text(encoding="utf-8")
    keys = re.findall(r"localStorage\.(?:getItem|setItem)\(['\"]([^'\"]+)", js)
    if not keys or any(key != ident["storageKey"] for key in keys):
        raise ValueError("Storage key changed; add an explicit data migration before publishing")
    if not (ROOT / "release-notes" / ("v"+ver["versionName"]+".md")).is_file():
        raise ValueError("Release notes for this version are missing")
    return ident, ver

def run(args, **kwargs):
    result = subprocess.run([str(a) for a in args], check=True, text=True,
                            encoding="utf-8", errors="replace", capture_output=True, **kwargs)
    return result.stdout + result.stderr

def certificate(text):
    m = re.search(r"certificate SHA-256 digest:\s*([a-fA-F0-9]+)", text)
    if not m: raise ValueError("Cannot read APK signing certificate")
    return m.group(1).lower()

def package_info(text):
    m = re.search(r"package: name='([^']+)' versionCode='(\d+)' versionName='([^']+)'", text)
    if not m: raise ValueError("Cannot read APK applicationId/version")
    return {"applicationId":m.group(1),"versionCode":int(m.group(2)),"versionName":m.group(3)}

def validate_upgrade(previous, new, ident):
    if previous["applicationId"] != new["applicationId"] or new["applicationId"] != ident["applicationId"]:
        raise ValueError("applicationId mismatch")
    if previous["certificateSha256"] != new["certificateSha256"] or new["certificateSha256"] != ident["certificateSha256"]:
        raise ValueError("Signing certificate mismatch")
    if new["versionCode"] <= previous["versionCode"]:
        raise ValueError("versionCode must increase for every published update")
