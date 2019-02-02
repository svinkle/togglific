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
import {jquery} from '../components/jquery.component';
import {js} from '../components/js.component';
import {svg} from '../components/svg.component';
import {video} from '../components/video.component';
import {showNotification, updateFrames} from '../components/utility.component';

let allowAnimation = null;

const init = () => {
  if (localStorage.getItem(strings.localStorageItem) == null) {
    allowAnimation = false;
  } else {
    allowAnimation =
      localStorage.getItem(strings.localStorageItem) === 'true' ? false : true;
  }

  localStorage.setItem(strings.localStorageItem, allowAnimation);

  toggleAnimation();
};

const toggleAnimation = () => {
  if (allowAnimation) {
    backgroundImage.resume(document);
    updateFrames(backgroundImage.resume, 'document');

    css.resume(document);
    updateFrames(css.resume, 'document');

    js.resume(window);
    updateFrames(js.resume, 'window');

    svg.resume(document);
    updateFrames(svg.resume, 'document');

    jquery.resume(window);
    updateFrames(jquery.resume, 'window');

    image.resume(document);
    updateFrames(image.resume, 'document');

    video.resume(document);
    updateFrames(video.resume, 'document');

    showNotification(strings.notice.resume, svgIcons.resume);
  } else {
    backgroundImage.pause(document, window);
    updateFrames(backgroundImage.pause, 'document');

    css.pause(document);
    updateFrames(css.pause, 'document');

    js.pause(window);
    updateFrames(js.pause, 'window');

    svg.pause(document);
    updateFrames(svg.pause, 'document');

    jquery.pause(window);
    updateFrames(jquery.pause, 'window');

    image.pause(document, window);
    updateFrames(image.pause, 'document');

    video.pause(document);
    updateFrames(video.pause, 'document');

    showNotification(strings.notice.pause, svgIcons.pause);
  }
};

init();

window.addEventListener('unload', () => {
  localStorage.removeItem(strings.localStorageItem);
});
