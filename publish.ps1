param()
$ErrorActionPreference='Stop'
function Check-Exit {if($LASTEXITCODE -ne 0){throw 'Publish stopped.'}}
Push-Location $PSScriptRoot
try {
 if(-not (Get-Command gh -ErrorAction SilentlyContinue)){throw 'GitHub CLI is required.'}
 gh auth status
 Check-Exit
 $dirty=git status --porcelain
 Check-Exit
 if($dirty){throw 'Commit reviewed source changes before publishing.'}
 $v=Get-Content -Raw version.json | ConvertFrom-Json
 $tag='v'+$v.versionName
 $repo=gh repo view --json nameWithOwner --jq .nameWithOwner
 Check-Exit
 $env:GITHUB_REPOSITORY=$repo
 python scripts/release.py check --tag $tag
 Check-Exit
 git show-ref --verify --quiet "refs/tags/$tag"
 if($LASTEXITCODE -eq 0){throw 'Tag already exists. Never move a published tag; choose a new version.'}
 git push -u origin HEAD
 Check-Exit
 git tag -a $tag -m "Release $tag"
 Check-Exit
 git push origin "refs/tags/$tag"
 Check-Exit
 Write-Output "Release pipeline started for $tag. Check GitHub Actions for the APK and Pages deployment."
} finally {Pop-Location}
