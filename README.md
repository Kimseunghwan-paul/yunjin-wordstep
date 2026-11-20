# 윤진이의 영어 단어 — Android 배포

이 저장소는 APK 소스, GitHub Releases 배포와 GitHub Pages 다운로드 페이지를 함께 관리합니다. Play 스토어 등록 없이 APK를 배포합니다. APK의 자동 설치/앱 내 업데이트 기능은 포함하지 않습니다.

## 현재 앱의 고정 정보

- applicationId: `com.yunjin.wordstep`
- 서명 별칭: `wordstep`
- 기존 서명 인증서 SHA-256: `8d9a4fc699f1d02b1a957af53a174e559e3275c8bb4f8b5ec8e4ad7323ceec84`
- WebView origin: `https://appassets.androidplatform.net`
- localStorage 키: `wordstep-v1`
- 최초 배포 APK: v1.0 / versionCode 1
- 이번 준비 버전: v1.0.1 / versionCode 2

`distribution/identity.json`은 기존 설치의 기준입니다. 앱 ID, 키, origin, 저장 키를 바꾸면 기존 기록을 그대로 이어받을 수 없으므로 빌드가 중단됩니다. 키가 없다고 새 키를 만들지 않습니다. 앱 삭제나 데이터 삭제 없이 **동일 서명·동일 패키지·더 높은 versionCode의 APK로 덮어 설치**해야 기록이 유지됩니다. 웹사이트 기록은 Android 앱과 별개입니다. 실제 기기에서 덮어 설치 테스트는 별도로 해야 합니다.

## 최초 GitHub 연결

지인들이 로그인 없이 APK를 받을 수 있도록 **공개 배포 저장소**를 사용합니다. 공개 저장소의 APK와 소스는 누구나 볼 수 있습니다. 기존 비공개 저장소를 자동으로 공개 전환하지 않습니다.

1. GitHub CLI(`gh`)에서 `gh auth login`으로 로그인합니다. 로그인 토큰을 채팅이나 소스에 넣지 않습니다. 워크플로 파일 푸시 권한이 필요하면 `gh auth refresh -s workflow`를 실행합니다.
2. 기존 공개 저장소는 `./configure-github.ps1 -Repository 계정/저장소`로 연결합니다. 새 공개 저장소를 만들 때만 `-CreatePublicRepository`를 추가합니다.
3. 이 명령은 `android-release` Environment를 만들고 기존 키와 비밀번호를 encrypted secrets에 등록합니다. 키는 소스/릴리스에 포함되지 않습니다. Pages source는 GitHub Actions로 설정합니다.
4. 검토한 소스만 커밋합니다. `.gitignore`가 `signing/`, `tools/`, `build/`, `output/`을 제외하는지 확인합니다. signing 폴더를 `git add -f`로 추가하지 마세요.
5. 기본 브랜치를 GitHub에 올린 뒤 `./publish.ps1`을 실행합니다. version.json에 맞는 태그가 올라가면 자동 빌드·릴리스·Pages 배포가 시작됩니다.
6. GitHub Actions에서 `Publish signed Android APK`의 성공 및 Pages URL을 확인합니다. 새 저장소에서 Pages 설정이 빈 브랜치 때문에 실패하면 첫 소스 푸시 후 configure-github.ps1을 재실행합니다.

GitHub Environment secrets:
- `ANDROID_KEYSTORE_BASE64`: 기존 `signing/wordstep-release.jks`의 Base64
- `ANDROID_KEYSTORE_PASSWORD`: 기존 비밀번호

`configure-github.ps1`은 위 값을 stdin으로 전달하며 로그/명령행 인자에 출력하지 않습니다. Environment 보호 규칙(승인자/배포 브랜치)은 저장소 관리자가 추가할 수 있습니다. 태그 배포를 허용해야 합니다. 서명 키와 비밀번호 원본은 GitHub 외에도 개인 보안 저장소에 백업하세요. 분실 시 기존 앱을 같은 키로 업데이트할 수 없습니다.

## 이후 업데이트

1. Android용 웹 UI는 `assets/`, 네이티브 코드는 `src/`에서 수정합니다. 원래 웹사이트와 별도 소스이며 자동 동기화하지 않습니다. assets/app.js의 AndroidSpeech 연결을 보존합니다.
2. `version.json`의 versionName과 versionCode를 모두 올립니다. 예: `1.0.2` / `3`. 모든 공개 릴리스보다 versionCode가 커야 합니다.
3. `release-notes/v1.0.2.md`에 변경 내용을 작성합니다.
4. `python -m unittest discover -s tests -p 'test_*.py'`와 로컬 빌드를 실행합니다.
5. 변경을 커밋하고 `./publish.ps1`을 실행합니다. 기존 태그를 이동하거나 게시된 APK를 교체하지 않습니다.

릴리스에는 `Yunjin-English.apk`, `SHA256SUMS.txt`, `release.json`이 포함됩니다. 업로드 검증 후 초안 상태를 해제합니다. 실패한 초안은 같은 커밋으로 재실행할 때만 갱신할 수 있습니다. 공개된 릴리스는 수정하지 않습니다. 릴리스 본문의 숨겨진 `wordstep-release` 메타데이터는 자동 버전 검증과 Pages 생성에 필요하므로 삭제하지 마세요.

다운로드 페이지는 실제 최신 릴리스의 버전, 업데이트 내용과 정확히 그 버전의 APK 링크를 표시합니다. GitHub API 호출을 휴대폰마다 하지 않아 API 호출 제한의 영향을 받지 않습니다. 릴리스 게시 후 Pages 워크플로를 직접 호출합니다(GITHUB_TOKEN으로 게시한 release 이벤트가 다른 workflow를 자동 실행하지 않는 문제 방지). 페이지 디자인만 바꿨다면 기본 브랜치에 커밋 후 `Deploy mobile download page`를 수동 실행합니다.

## 로컬 빌드

Python 3.10+, Java 17, Android platform 35, build-tools 35.0.0이 필요합니다. Windows의 기존 `tools/` 설치를 자동 인식합니다. 다른 환경에서는 JAVA_HOME과 ANDROID_HOME을 지정합니다.

```powershell
./build.ps1 -PreviousApk output/Yunjin-English-v1.0.apk
```

빌드 결과는 `output/release/` 및 버전명이 있는 APK에 저장됩니다. 이전 APK와 패키지·서명·증가한 버전 코드를 비교합니다. 새 키 생성은 지원하지 않습니다. 기본 키 경로를 바꾸려면 ANDROID_KEYSTORE_PATH와 ANDROID_KEYSTORE_PASSWORD_FILE을 지정합니다. CI는 임시 디렉터리에서 키를 복원하고 마지막에 삭제합니다.

## 다운로드 페이지 미리보기

```powershell
python scripts/make-pages.py --metadata output/release/release.json --destination build/pages
python -m http.server 8766 --directory build/pages --bind 127.0.0.1
```

미리보기에는 GitHub 게시 전임을 표시하고 로컬에서 검증한 APK만 다운로드합니다. 실제 사이트 URL은 GitHub Pages 배포 결과로 확인합니다. 배포 전 가짜 계정/저장소 URL을 만들지 않습니다.

## 데이터 보존 확인

기존 앱에서 1주차 단어에 별표를 남기고 학습을 진행합니다. 앱을 삭제하지 않고 새 APK를 설치한 뒤, 같은 별표와 기록이 남아 있는지 확인합니다. 저장 구조를 바꿀 때는 기존 키를 유지하고 별도 마이그레이션을 추가해야 합니다. 기기 간 데이터 동기화/앱 삭제 후 복원은 현재 제공하지 않습니다.
