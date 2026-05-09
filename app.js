const APP_URL = "https://script.google.com/a/macros/k-josai.com/s/AKfycbw9XmAR5blFNMaDJumlrXpslIJdMNyek8RD_0vdi8ASWSUXsxX9bw9vfhWTaQEMHAltIg/exec";

const IN_APP_BROWSER_PATTERNS = [
  /Line/i,
  /Instagram/i,
  /FBAN|FBAV|FBIOS|FB_IAB|Facebook/i,
  /Twitter|X\/|TwitterAndroid|Twitter for iPhone/i,
  /MicroMessenger/i,
  /GSA/i
];

function isLikelyInAppBrowser(userAgent) {
  return IN_APP_BROWSER_PATTERNS.some((pattern) => pattern.test(userAgent));
}

function showWarningIfNeeded() {
  const warning = document.getElementById("browser-warning");
  if (!warning) return;

  if (isLikelyInAppBrowser(navigator.userAgent || "")) {
    warning.hidden = false;
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
