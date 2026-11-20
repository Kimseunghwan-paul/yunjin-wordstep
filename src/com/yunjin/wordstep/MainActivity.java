package com.yunjin.wordstep;

import android.app.Activity;
import android.os.Bundle;
import android.os.Build;
import android.graphics.Color;
import android.net.Uri;
import android.speech.tts.TextToSpeech;
import android.view.View;
import android.view.WindowInsets;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.Toast;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;

public final class MainActivity extends Activity {
    private static final String HOST = "appassets.androidplatform.net";
    private static final Set<String> FILES = new HashSet<>(Arrays.asList("index.html", "style.css", "app.js", "curriculum.js"));
    private WebView web;
    private TextToSpeech speech;
    private boolean speechReady;

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        final FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(Color.rgb(245,247,251));
        root.setOnApplyWindowInsetsListener((v, insets) -> {
            if (Build.VERSION.SDK_INT >= 30) {
                android.graphics.Insets bars = insets.getInsets(WindowInsets.Type.systemBars() | WindowInsets.Type.ime());
                v.setPadding(bars.left, bars.top, bars.right, bars.bottom);
            } else {
                v.setPadding(insets.getSystemWindowInsetLeft(), insets.getSystemWindowInsetTop(), insets.getSystemWindowInsetRight(), insets.getSystemWindowInsetBottom());
            }
            return insets;
        });
        web = new WebView(this);
        web.setBackgroundColor(Color.rgb(245,247,251));
        root.addView(web, new FrameLayout.LayoutParams(-1,-1));
        setContentView(root);
        root.requestApplyInsets();
        WebSettings settings = web.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setSupportMultipleWindows(false);
        settings.setJavaScriptCanOpenWindowsAutomatically(false);
        settings.setBuiltInZoomControls(false);
        WebView.setWebContentsDebuggingEnabled(false);
        web.addJavascriptInterface(new SpeechBridge(), "AndroidSpeech");
        web.setWebViewClient(new WebViewClient() {
            @Override public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                String file = uri.getPath();
                if (file == null || file.equals("/")) file = "index.html";
                else if (file.startsWith("/")) file = file.substring(1);
                if ("https".equals(uri.getScheme()) && HOST.equals(uri.getHost()) && FILES.contains(file)) {
                    try {
                        InputStream stream = getAssets().open(file);
                        String mime = file.endsWith(".js") ? "application/javascript" : file.endsWith(".css") ? "text/css" : "text/html";
                        return new WebResourceResponse(mime, "UTF-8", stream);
                    } catch (Exception ignored) { }
                }
                return new WebResourceResponse("text/plain", "UTF-8", 404, "Not Found", null, new ByteArrayInputStream(new byte[0]));
            }
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                return !"https".equals(uri.getScheme()) || !HOST.equals(uri.getHost());
            }
        });
        speech = new TextToSpeech(this, status -> {
            if (status == TextToSpeech.SUCCESS) {
                int language = speech.setLanguage(Locale.US);
                speechReady = language != TextToSpeech.LANG_MISSING_DATA && language != TextToSpeech.LANG_NOT_SUPPORTED;
                speech.setSpeechRate(0.85f);
                if (speech.getVoices() != null) {
                    for (android.speech.tts.Voice voice : speech.getVoices()) {
                        if (Locale.US.equals(voice.getLocale()) && !voice.isNetworkConnectionRequired()) {
                            speech.setVoice(voice);
                            break;
                        }
                    }
                }
            }
        });
        web.loadUrl("https://" + HOST + "/index.html");
    }
    private final class SpeechBridge {
        @JavascriptInterface public void speak(final String text) {
            if (text == null || text.length() > 200) return;
            runOnUiThread(() -> {
                if (!speechReady) {
                    Toast.makeText(MainActivity.this, "영어 음성 준비 중이거나 음성 데이터가 없어요. 휴대폰의 텍스트 음성 변환 설정을 확인해 주세요.", Toast.LENGTH_LONG).show();
                    return;
                }
                speech.speak(text, TextToSpeech.QUEUE_FLUSH, null, "wordstep-word");
            });
        }
    }
    @Override protected void onPause() {
        if (speech != null) speech.stop();
        if (web != null) web.onPause();
        super.onPause();
    }
    @Override protected void onResume() {
        super.onResume();
        if (web != null) web.onResume();
    }
    @Override public void onBackPressed() {
        if (web != null && web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }
    @Override protected void onDestroy() {
        if (speech != null) { speech.stop(); speech.shutdown(); }
        if (web != null) { web.removeJavascriptInterface("AndroidSpeech"); web.destroy(); }
        super.onDestroy();
    }
}
