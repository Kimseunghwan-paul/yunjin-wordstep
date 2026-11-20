param([string]$PreviousApk)
$ErrorActionPreference='Stop'
Push-Location $PSScriptRoot
try {
 $buildArgs=@('scripts/build.py')
 if ($PreviousApk) { $buildArgs+=@('--previous-apk',$PreviousApk) }
 python @buildArgs
 if ($LASTEXITCODE -ne 0) { throw 'APK build failed; no release should be published.' }
} finally { Pop-Location }
