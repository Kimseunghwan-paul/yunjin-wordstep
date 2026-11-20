param(
 [Parameter(Mandatory=$true)][ValidatePattern('^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$')][string]$Repository,
 [switch]$CreatePublicRepository
)
$ErrorActionPreference='Stop'
function Check-Exit { if($LASTEXITCODE -ne 0){throw 'GitHub setup stopped. Review the preceding error.'} }
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) { throw 'Install GitHub CLI and run gh auth login first.' }
gh auth status
Check-Exit
if($CreatePublicRepository){ gh repo create $Repository --public --description '윤진이의 영어 단어 Android APK 및 다운로드 페이지'; Check-Exit }
$repo=gh repo view $Repository --json nameWithOwner,isPrivate | ConvertFrom-Json
Check-Exit
if($repo.isPrivate){throw 'Anonymous APK downloads require a public distribution repository. Visibility will not be changed automatically.'}
# Existing private signing material is sent only to encrypted GitHub Environment secrets, never into Git.
Push-Location $PSScriptRoot
try {
 python -c "import sys;sys.path.insert(0,'scripts');from common import validate_source;validate_source()"
 Check-Exit
 if(!(Test-Path -LiteralPath 'signing/wordstep-release.jks') -or !(Test-Path -LiteralPath 'signing/password.txt')) { throw 'Original signing material is missing. Do not generate a new key.' }
 gh api --method PUT "repos/$Repository/environments/android-release" --silent
 Check-Exit
 [Convert]::ToBase64String([IO.File]::ReadAllBytes((Join-Path $PSScriptRoot 'signing/wordstep-release.jks'))) | gh secret set ANDROID_KEYSTORE_BASE64 --repo $Repository --env android-release
 Check-Exit
 [IO.File]::ReadAllText((Join-Path $PSScriptRoot 'signing/password.txt')).TrimEnd() | gh secret set ANDROID_KEYSTORE_PASSWORD --repo $Repository --env android-release
 Check-Exit
 if(!(Test-Path -LiteralPath '.git')) { git init -b main;Check-Exit }
 $origin=git remote get-url origin 2>$null
 if($LASTEXITCODE -ne 0){git remote add origin "https://github.com/$Repository.git";Check-Exit}
 elseif($origin -ne "https://github.com/$Repository.git" -and $origin -ne "git@github.com:$Repository.git"){throw 'Existing origin is a different repository; stopping.'}
 # Prefer this repository's approved GitHub CLI login over unrelated global credential helpers.
 $ghPath=(Get-Command gh).Source.Replace('\','/')
 $helper='!"'+$ghPath+'" auth git-credential'
 git config --local --replace-all credential.https://github.com.helper ''
 Check-Exit
 git config --local --add credential.https://github.com.helper $helper
 Check-Exit
 gh api "repos/$Repository/pages" --silent 2>$null
 if($LASTEXITCODE -eq 0){ gh api --method PUT "repos/$Repository/pages" -f build_type=workflow --silent }
 else { gh api --method POST "repos/$Repository/pages" -f build_type=workflow --silent }
 if($LASTEXITCODE -ne 0){Write-Warning 'Pages configuration is pending. Push the initial main branch, then rerun this setup.'}
 # Pages environments commonly allow only main initially. Add release-tag deployments without deleting existing rules.
 $pagesEnvironment=gh api "repos/$Repository/environments/github-pages" 2>$null | ConvertFrom-Json
 if($LASTEXITCODE -eq 0 -and $pagesEnvironment.deployment_branch_policy.custom_branch_policies){
  $policies=gh api "repos/$Repository/environments/github-pages/deployment-branch-policies" | ConvertFrom-Json
  Check-Exit
  if(-not ($policies.branch_policies | Where-Object {$_.name -eq 'v*' -and $_.type -eq 'tag'})){
   gh api --method POST "repos/$Repository/environments/github-pages/deployment-branch-policies" -f 'name=v*' -f type=tag --silent
   Check-Exit
  }
 }
 Write-Output "Configured $Repository. Signing secrets are stored in the android-release environment."
 Write-Output 'Review staged source before the first push. Never add signing/, tools/, build/ or output/.'
}finally{Pop-Location}
