const strings = {
  contentScript: 'togglific.js',
  setIconRequest: 'setIcon',
  clickIconRequest: 'iconClick',
  localStorageItem: 'allowAnimation',
  animateIcon: 'icons/resume32.png',
  freezeIcon: 'icons/pause32.png'
};

chrome.runtime.onMessage.addListener((request, sender) => {
  if (request[strings.setIconRequest]) {
    if (request[strings.setIconRequest] === 'true') {
      chrome.browserAction.setIcon({
        tabId: sender.tab.id,
        path: strings.animateIcon
      });
    } else {
      chrome.browserAction.setIcon({
        tabId: sender.tab.id,
        path: strings.freezeIcon
      });
    }
  }
});

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, {[strings.clickIconRequest]: true});

  chrome.tabs.executeScript(tab.id, {
    code: `
      if (localStorage.getItem('${strings.localStorageItem}') == null) {
          localStorage.setItem('${strings.localStorageItem}', false);
      } else {
        localStorage.setItem('${
  strings.localStorageItem
}', localStorage.getItem('${
  strings.localStorageItem
}') === 'true' ? false : true);
      }
    `
  });
  chrome.tabs.executeScript(tab.id, {file: strings.contentScript});
});
