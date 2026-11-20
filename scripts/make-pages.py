import argparse, json, re, shutil
from pathlib import Path
from urllib.parse import quote
from common import ROOT, read_json, identity

def generate(metadata, destination, repository=None):
    meta=read_json(metadata);ident=identity()
    if meta["applicationId"]!=ident["applicationId"] or meta["certificateSha256"]!=ident["certificateSha256"]: raise ValueError("Download metadata identity mismatch")
    if not re.fullmatch(r"v[0-9]+\.[0-9]+\.[0-9]+",meta["tag"]): raise ValueError("Invalid tag")
    if meta["apkFile"]!="Yunjin-English.apk": raise ValueError("Unexpected APK filename")
    dest=Path(destination);dest.mkdir(parents=True,exist_ok=True)
    for file in (ROOT/"site").iterdir():
        if file.is_file(): shutil.copyfile(file,dest/file.name)
    meta["preview"]=not bool(repository)
    if repository:
        if not re.fullmatch(r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+",repository): raise ValueError("Invalid repository")
        meta["downloadUrl"]=f"https://github.com/{repository}/releases/download/{quote(meta['tag'])}/{meta['apkFile']}"
        meta["releaseUrl"]=f"https://github.com/{repository}/releases/tag/{quote(meta['tag'])}"
        meta["historyUrl"]=f"https://github.com/{repository}/releases"
    else:
        apk=Path(metadata).parent/meta["apkFile"]
        if not apk.is_file(): raise ValueError("Local preview requires the built APK")
        shutil.copyfile(apk,dest/meta["apkFile"])
        meta["downloadUrl"]=meta["apkFile"];meta["releaseUrl"]="";meta["historyUrl"]=""
    (dest/"release.json").write_text(json.dumps(meta,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    (dest/".nojekyll").touch()
    print(dest)

if __name__=="__main__":
    p=argparse.ArgumentParser();p.add_argument("--metadata",required=True);p.add_argument("--destination",default="build/pages");p.add_argument("--repository");a=p.parse_args();generate(a.metadata,a.destination,a.repository)
