const APP_URL = "https://script.google.com/a/macros/k-josai.com/s/AKfycbyyvr5WWonLRddKVmNgSRJX4xKk1TL5SRKzC10aL7f85xv1C4v4z7VUTk4uDQvlFll3RQ/exec";

const IN_APP_BROWSER_PATTERNS = [
  /Line/i,
  /Instagram/i,
  /Facebook|FBAN|FBAV|FBIOS|FB_IAB/i,
  /Twitter|X\/|TwitterAndroid|Twitter for iPhone/i,
  /MicroMessenger/i,
  /GSA|GoogleApp/i
];

function isLikelyInAppBrowser(userAgent) {
  return IN_APP_BROWSER_PATTERNS.some((pattern) => pattern.test(userAgent));
}

function showWarningIfNeeded() {
  const guide = document.getElementById("browser-guide");
  if (!guide) return;

  if (isLikelyInAppBrowser(navigator.userAgent || "")) {
    guide.hidden = false;
    document.body.classList.add("in-app-browser");
  }
}

function openRecordInput() {
  window.location.href = APP_URL;
}

document.addEventListener("DOMContentLoaded", () => {
  showWarningIfNeeded();

  const openButton = document.getElementById("open-app");
  if (openButton) {
    openButton.addEventListener("click", openRecordInput);
  }
});
