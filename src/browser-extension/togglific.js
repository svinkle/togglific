/**
 * Togglific
 *
 * "Enjoy a distraction-free web experience!"
 *
 * Check out the GitHub repo for more information: https://github.com/svinkle/togglific
 *
 * @author Scott Vinkle <scott.vinkle@shopify.com>
 * @version 0.16.0
 * @license MIT
 */

import {strings, svgIcons} from '../app.config';
import {backgroundImage} from '../components/backgroundImage.component';
import {css} from '../components/css.component';
import {image} from '../components/image.component';
import {svg} from '../components/svg.component';
import {video} from '../components/video.component';
import {showNotification, updateFrames} from '../components/utility.component';

((window, document) => {
  let allowAnimation = null;

  const init = () => {
    if (localStorage.getItem(strings.localStorageItem) != null) {
      chrome.runtime.sendMessage({
        [strings.setIconRequest]: localStorage.getItem(strings.localStorageItem)
      });
      allowAnimation =
        localStorage.getItem(strings.localStorageItem) === 'true'
          ? true
          : false;
      toggleAnimation();
    }

    if (!chrome.runtime.onMessage.hasListener(clickListener)) {
      chrome.runtime.onMessage.addListener(clickListener);
    }
  };

  const clickListener = (request) => {
    if (request[strings.clickIconRequest]) {
      if (allowAnimation == null || allowAnimation) {
        showNotification(strings.notice.pause, svgIcons.pause);
      } else {
        showNotification(strings.notice.resume, svgIcons.resume);
      }
    }

    chrome.runtime.onMessage.removeListener(clickListener);
  };

  const toggleAnimation = () => {
    if (allowAnimation) {
      backgroundImage.resume(document);
      updateFrames(backgroundImage.resume, 'document');

      css.resume(document);
      updateFrames(css.resume, 'document');

      image.resume(document);
      updateFrames(image.resume, 'document');

      svg.resume(document);
      updateFrames(svg.resume, 'document');

      video.resume(document);
      updateFrames(video.resume, 'document');
    } else {
      backgroundImage.pause(document, window);
      updateFrames(backgroundImage.pause, 'document');

      css.pause(document);
      updateFrames(css.pause, 'document');

      image.pause(document, window);
      updateFrames(image.pause, 'document');

      svg.pause(document);
      updateFrames(svg.pause, 'document');

      video.pause(document);
      updateFrames(video.pause, 'document');
    }
  };

  init();
})(window, document);
