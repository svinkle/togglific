/* todo work with CSS on message - odd because of delay opacity animation ? */
import {selectors, settings, cssProps} from '../app.config';

const showNotification = (notice, icon) => {
  const notificationElem = document.createElement('div'),
    currentNotification = document.getElementById(selectors.notificationId);

  if (currentNotification != null) {
    currentNotification.remove();
  }

  notificationElem.id = selectors.notificationId;
  notificationElem.setAttribute('style', cssProps.notification);
  notificationElem.setAttribute('aria-live', 'polite');
  notificationElem.setAttribute('aria-atomic', true);
  notificationElem.setAttribute('role', 'status');

  document.body.appendChild(notificationElem);

  /* slight timeout for NVDA to announce live region */
  window.setTimeout(() => {
    notificationElem.innerHTML = `${icon} ${notice}`;
    notificationElem.style.marginLeft = `-${notificationElem.offsetWidth /
      2}px`;
    notificationElem.style.opacity = 1;
  }, 200);

  window.setTimeout(() => {
    notificationElem.remove();
  }, settings.notification);
};

const updateFrames = (fn, type) => {
  const frames = document.getElementsByTagName(selectors.iframeElem);

  for (const el of Array.from(frames)) {
    try {
      fn(type === 'document' ? el.contentDocument : el.contentWindow);
    } catch (e) {

      // Cross-domain error
    }
  }
};

export {showNotification, updateFrames};
