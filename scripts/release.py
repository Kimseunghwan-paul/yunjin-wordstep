import argparse, json, os, re, sys
from pathlib import Path
from common import ROOT, identity, validate_source, read_json, run
MARKER=re.compile(r"<!-- wordstep-release:(.*?) -->",re.S)
def gh(*args): return run(["gh",*args]).strip()
def repository():
    repo=os.environ.get("GITHUB_REPOSITORY", "")
    if not re.fullmatch(r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+",repo): raise ValueError("GITHUB_REPOSITORY must be owner/repository")
    return repo

def parse_release(release):
    match=MARKER.search(release.get("body") or "")
    if not match: raise ValueError("Existing release lacks Wordstep metadata: "+release.get("tag_name","unknown"))
    meta=json.loads(match.group(1)); ident=identity()
    if meta.get("applicationId")!=ident["applicationId"] or meta.get("certificateSha256")!=ident["certificateSha256"]:
        raise ValueError("Published release has a different app identity")
    if meta.get("tag")!=release.get("tag_name"): raise ValueError("Release tag mismatch")
    if type(meta.get("versionCode")) is not int: raise ValueError("Invalid versionCode")
    return meta

def preflight(tag):
    repo=repository();ident,ver=validate_source()
    if tag!="v"+ver["versionName"]: raise ValueError("Tag must equal v + version.json versionName")
    batches=json.loads(gh("api",f"repos/{repo}/releases","--paginate","--slurp"))
    for release in [r for batch in batches for r in batch]:
        if release.get("draft") or release.get("prerelease"): continue
        previous=parse_release(release)
        if ver["versionCode"]<=previous["versionCode"]: raise ValueError("New versionCode must exceed EVERY published versionCode")
    return repo,ver

def publish(tag):
    repo,ver=preflight(tag)
    meta=read_json(ROOT/"output/release/release.json")
    ident=identity()
    if meta.get("versionCode")!=ver["versionCode"] or meta.get("tag")!=tag or meta.get("certificateSha256")!=ident["certificateSha256"] or meta.get("applicationId")!=ident["applicationId"]:
        raise ValueError("Built APK metadata does not match source release")
    import hashlib
    apk=ROOT/"output/release/Yunjin-English.apk"
    if hashlib.sha256(apk.read_bytes()).hexdigest()!=meta["sha256"]: raise ValueError("APK modified after verification")
    meta["sourceCommit"]=os.environ.get("GITHUB_SHA") or run(["git","-C",ROOT,"rev-parse","HEAD"]).strip()
    (ROOT/"output/release/release.json").write_text(json.dumps(meta,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    body=meta["notes"]+"\n\n<!-- wordstep-release:"+json.dumps(meta,ensure_ascii=False,separators=(",",":"))+" -->\n"
    notes=ROOT/"build/release-body.md";notes.write_text(body,encoding="utf-8")
    releases=json.loads(gh("api",f"repos/{repo}/releases"))
    existing=next((r for r in releases if r["tag_name"]==tag),None)
    if existing:
        if not existing["draft"]: raise ValueError("Published releases are immutable; increase the version")
        old=parse_release(existing)
        if old.get("sourceCommit")!=meta["sourceCommit"]: raise ValueError("Draft belongs to another commit; inspect it manually")
        gh("release","edit",tag,"--repo",repo,"--notes-file",str(notes))
    else:
        gh("release","create",tag,"--repo",repo,"--verify-tag","--draft","--title",meta["appName"]+" "+ver["versionName"],"--notes-file",str(notes))
    files=[ROOT/"output/release"/name for name in ("Yunjin-English.apk","SHA256SUMS.txt","release.json")]
    gh("release","upload",tag,"--repo",repo,*[str(f) for f in files],"--clobber")
    release=json.loads(gh("api",f"repos/{repo}/releases"))
    draft=next(r for r in release if r["tag_name"]==tag)
    for f in files:
        asset=next((a for a in draft["assets"] if a["name"]==f.name),None)
        if not asset or asset["size"]!=f.stat().st_size: raise ValueError("Release upload incomplete")
        if asset.get("digest") and asset["digest"]!="sha256:"+hashlib.sha256(f.read_bytes()).hexdigest(): raise ValueError("Uploaded asset digest mismatch")
    gh("release","edit",tag,"--repo",repo,"--draft=false","--latest")
    final=json.loads(gh("api",f"repos/{repo}/releases/tags/{tag}"))
    if final["draft"]: raise ValueError("Release still a draft")
    print(final["html_url"])

def latest(output):
    repo=repository(); release=json.loads(gh("api",f"repos/{repo}/releases/latest"))
    if release["draft"] or release["prerelease"]: raise ValueError("Only stable published releases belong on download page")
    meta=parse_release(release)
    asset=next((a for a in release["assets"] if a["name"]==meta["apkFile"]),None)
    if not asset or asset["size"]!=meta["sizeBytes"]: raise ValueError("Published APK is missing or inconsistent")
    meta["publishedAt"]=release["published_at"]
    Path(output).parent.mkdir(parents=True,exist_ok=True)
    Path(output).write_text(json.dumps(meta,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")

if __name__=="__main__":
    parser=argparse.ArgumentParser();parser.add_argument("action",choices=["check","publish","latest"]);parser.add_argument("--tag");parser.add_argument("--output",default="build/latest-release.json");args=parser.parse_args()
    try:
        if args.action=="check": preflight(args.tag);print("Release version preflight passed")
        elif args.action=="publish": publish(args.tag)
        else: latest(args.output)
    except Exception as e: print("RELEASE STOPPED: "+str(e),file=sys.stderr);sys.exit(1)
