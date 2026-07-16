/**
 * Togglific - Toggle Storage
 *
 * Injected into the active tab by the background service worker to toggle
 * the `allowAnimation` value in localStorage. Extracted from background.js
 * to comply with Manifest V3 (inline code strings are not permitted in
 * chrome.scripting.executeScript).
 */

(function () {
  if (localStorage.getItem('allowAnimation') == null) {
    localStorage.setItem('allowAnimation', false);
  } else {
    const current = localStorage.getItem('allowAnimation');
    localStorage.setItem('allowAnimation', current === 'true' ? false : true);
  }
})();
