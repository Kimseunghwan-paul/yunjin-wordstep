import argparse, hashlib, json, os, re, shutil, sys
from pathlib import Path
from common import ROOT, identity, validate_source, run, certificate, package_info, validate_upgrade

def build(previous_apk=None):
    ident, ver = validate_source()
    windows = os.name == "nt"
    suffix = ".exe" if windows else ""
    java_home = Path(os.environ.get("JAVA_HOME", ROOT / "tools/jdk/jdk-17.0.21+9"))
    java, javac, jar = [java_home / "bin" / (n+suffix) for n in ("java","javac","jar")]
    sdk = os.environ.get("ANDROID_HOME") or os.environ.get("ANDROID_SDK_ROOT")
    bt = Path(sdk)/"build-tools/35.0.0" if sdk else ROOT/"tools/build-tools/android-15"
    android = Path(sdk)/"platforms/android-35/android.jar" if sdk else ROOT/"tools/platform/android-35/android.jar"
    key = Path(os.environ.get("ANDROID_KEYSTORE_PATH", ROOT/"signing/wordstep-release.jks"))
    password = Path(os.environ.get("ANDROID_KEYSTORE_PASSWORD_FILE", ROOT/"signing/password.txt"))
    for path in (java,javac,jar,android,bt/("aapt2"+suffix),key,password):
        if not path.is_file(): raise FileNotFoundError(f"Required file missing: {path}. Never generate a replacement signing key.")
    java_args=[java,"-Duser.language=en","-Duser.country=US"]
    # Reject a wrong signing key BEFORE compiling.
    text=run([java_home/"bin"/("keytool"+suffix),"-J-Duser.language=en","-J-Duser.country=US","-list","-v","-keystore",key,"-storepass:file",password,"-alias",ident["keyAlias"]])
    match=re.search(r"SHA256:\s*([0-9A-Fa-f:]+)",text)
    if not match or match.group(1).replace(":","").lower()!=ident["certificateSha256"]:
        raise ValueError("Signing key is not the key used for the original distributed APK")
    aapt=bt/("aapt2"+suffix)
    signer=java_args+["-jar",bt/"lib/apksigner.jar"]
    previous={"applicationId":ident["applicationId"],"certificateSha256":ident["certificateSha256"],"versionCode":ident["firstDistributedVersionCode"]}
    if previous_apk:
        previous=package_info(run([aapt,"dump","badging",previous_apk]))
        previous["certificateSha256"]=certificate(run(signer+["verify","--verbose","--print-certs",previous_apk]))
    validate_upgrade(previous,{**ver,"applicationId":ident["applicationId"],"certificateSha256":ident["certificateSha256"]},ident)
    build_root=ROOT/"build"; build_root.mkdir(exist_ok=True)
    # Fresh directory avoids stale .class/.dex files in incremental builds.
    import tempfile
    work=Path(tempfile.mkdtemp(prefix="release-",dir=build_root))
    classes=work/"classes"; dex=work/"dex"; classes.mkdir();dex.mkdir()
    run([javac,"-encoding","UTF-8","-source","8","-target","8","-classpath",android,"-d",classes,*sorted((ROOT/"src").rglob("*.java"))])
    run([jar,"--create","--file",work/"classes.jar","-C",classes,"."])
    run(java_args+["-cp",bt/"lib/d8.jar","com.android.tools.r8.D8","--release","--lib",android,"--min-api","26","--output",dex,work/"classes.jar"])
    run([aapt,"compile","--dir",ROOT/"res","-o",work/"resources.zip"])
    run([aapt,"link","-o",work/"unsigned.apk","-I",android,"--manifest",ROOT/"AndroidManifest.xml","--min-sdk-version","26","--target-sdk-version","35","--version-code",ver["versionCode"],"--version-name",ver["versionName"],"-A",ROOT/"assets",work/"resources.zip"])
    run([jar,"uf",work/"unsigned.apk","-C",dex,"classes.dex"])
    run([bt/("zipalign"+suffix),"-f","4",work/"unsigned.apk",work/"aligned.apk"])
    apk=work/"Yunjin-English.apk"
    run(signer+["sign","--ks",key,"--ks-key-alias",ident["keyAlias"],"--ks-pass","file:"+str(password),"--out",apk,work/"aligned.apk"])
    cert=certificate(run(signer+["verify","--verbose","--print-certs",apk]))
    actual=package_info(run([aapt,"dump","badging",apk])); actual["certificateSha256"]=cert
    validate_upgrade(previous,actual,ident)
    if actual["versionName"]!=ver["versionName"] or actual["versionCode"]!=ver["versionCode"]: raise ValueError("APK version mismatch")
    run([bt/("zipalign"+suffix),"-c","4",apk])
    import zipfile
    with zipfile.ZipFile(apk) as z:
        if z.testzip(): raise ValueError("APK ZIP integrity error")
        for f in (ROOT/"assets").iterdir():
            if f.is_file() and z.read("assets/"+f.name)!=f.read_bytes(): raise ValueError("Bundled asset mismatch")
    output=ROOT/"output/release";output.mkdir(parents=True,exist_ok=True)
    shutil.copyfile(apk,output/apk.name)
    shutil.copyfile(apk,ROOT/"output"/("Yunjin-English-v"+ver["versionName"]+".apk"))
    notes=(ROOT/"release-notes"/("v"+ver["versionName"]+".md")).read_text(encoding="utf-8")
    metadata={**actual,"appName":"윤진이의 영어 단어","tag":"v"+ver["versionName"],"minAndroid":"8.0","apkFile":apk.name,"sizeBytes":apk.stat().st_size,"sha256":hashlib.sha256(apk.read_bytes()).hexdigest(),"notes":notes}
    (output/"release.json").write_text(json.dumps(metadata,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    (output/"SHA256SUMS.txt").write_text(metadata["sha256"]+"  "+apk.name+"\n",encoding="utf-8")
    print(f"Verified {metadata['appName']} {ver['versionName']} (code {ver['versionCode']}); same applicationId and original signing certificate.")
    print(output/apk.name)
    return metadata

if __name__=="__main__":
    parser=argparse.ArgumentParser();parser.add_argument("--previous-apk",type=Path);args=parser.parse_args()
    try: build(args.previous_apk)
    except Exception as e: print("BUILD STOPPED: "+str(e),file=sys.stderr);sys.exit(1)
