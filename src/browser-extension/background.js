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
      chrome.action.setIcon({
        tabId: sender.tab.id,
        path: strings.animateIcon
      });
    } else {
      chrome.action.setIcon({
        tabId: sender.tab.id,
        path: strings.freezeIcon
      });
    }
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, {[strings.clickIconRequest]: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['toggle-storage.js']
  });

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: [strings.contentScript]
  });
});
