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

import {strings, cssProps, svgIcons} from '../app.config';
import {backgroundImage} from '../components/backgroundImage.component';
import {css} from '../components/css.component';
import {image} from '../components/image.component';
import {jquery} from '../components/jquery.component';
import {js} from '../components/js.component';
import {svg} from '../components/svg.component';
import {video} from '../components/video.component';
import {showNotification, updateFrames} from '../components/utility.component';

class Togglific {
  constructor(options, togglerBtn) {
    this.allowAnimation = null;
    this.togglerBtn = document.getElementById(togglerBtn);

    if (!this.togglerBtn) {
      return;
    }

    this.togglerBtn.type = 'button';

    this.moduleOptions = {
      backgroundImage: true,
      css: true,
      image: true,
      jquery: true,
      js: true,
      svg: true,
      video: true
    };

    if (localStorage.getItem(strings.localStorageItem) == null) {
      this.allowAnimation = true;
      localStorage.setItem(strings.localStorageItem, true);
      this.togglerBtn.setAttribute('aria-pressed', false);
    } else {
      this.allowAnimation =
        localStorage.getItem(strings.localStorageItem) === 'true'
          ? true
          : false;
      this.togglerBtn.setAttribute(
        'aria-pressed',
        this.allowAnimation ? false : true
      );
    }

    if (options) {
      if (options.selectors) {
        cssProps.selectors = options.selectors;
      }

      if (options.css) {
        Object.keys(options.css).forEach((prop) => {
          cssProps.pause += `${prop}:${options.css[prop]} !important;`;
        });
      }

      if (options.modules) {
        if (options.modules.backgroundImage !== undefined) {
          this.moduleOptions.backgroundImage = options.modules.backgroundImage;
        }
        if (options.modules.css !== undefined) {
          this.moduleOptions.css = options.modules.css;
        }
        if (options.modules.image !== undefined) {
          this.moduleOptions.image = options.modules.image;
        }
        if (options.modules.jquery !== undefined) {
          this.moduleOptions.jquery = options.modules.jquery;
        }
        if (options.modules.js !== undefined) {
          this.moduleOptions.js = options.modules.js;
        }
        if (options.modules.svg !== undefined) {
          this.moduleOptions.svg = options.modules.svg;
        }
        if (options.modules.video !== undefined) {
          this.moduleOptions.video = options.modules.video;
        }
      }
    }

    this.togglerBtn.addEventListener(
      'click',
      this.togglerBtnClick.bind(this),
      false
    );

    this.toggleAnimation();
  }

  togglerBtnClick() {
    this.allowAnimation = this.allowAnimation ? false : true;
    localStorage.setItem(strings.localStorageItem, this.allowAnimation);
    this.togglerBtn.setAttribute(
      'aria-pressed',
      this.allowAnimation ? false : true
    );

    this.toggleAnimation();

    if (this.allowAnimation) {
      showNotification(strings.notice.resume, svgIcons.resume);
    } else {
      showNotification(strings.notice.pause, svgIcons.pause);
    }
  }

  toggleAnimation() {
    if (this.allowAnimation) {
      if (this.moduleOptions.backgroundImage) {
        backgroundImage.resume(document);
        updateFrames(backgroundImage.resume, 'document');
      }
      if (this.moduleOptions.css) {
        css.resume(document);
        updateFrames(css.resume, 'document');
      }
      if (this.moduleOptions.image) {
        image.resume(document);
        updateFrames(image.resume, 'document');
      }
      if (this.moduleOptions.jquery) {
        jquery.resume(window);
        updateFrames(jquery.resume, 'window');
      }
      if (this.moduleOptions.js) {
        js.resume(window);
        updateFrames(js.resume, 'window');
      }
      if (this.moduleOptions.svg) {
        svg.resume(document);
        updateFrames(svg.resume, 'document');
      }
      if (this.moduleOptions.video) {
        video.resume(document);
        updateFrames(video.resume, 'document');
      }
    } else {
      if (this.moduleOptions.backgroundImage) {
        backgroundImage.pause(document, window);
        updateFrames(backgroundImage.pause, 'document');
      }
      if (this.moduleOptions.css) {
        css.pause(document);
        updateFrames(css.pause, 'document');
      }
      if (this.moduleOptions.image) {
        image.pause(document, window);
        updateFrames(image.pause, 'document');
      }
      if (this.moduleOptions.jquery) {
        jquery.pause(window);
        updateFrames(jquery.pause, 'window');
      }
      if (this.moduleOptions.js) {
        js.pause(window);
        updateFrames(js.pause, 'window');
      }
      if (this.moduleOptions.svg) {
        svg.pause(document);
        updateFrames(svg.pause, 'document');
      }
      if (this.moduleOptions.video) {
        video.pause(document);
        updateFrames(video.pause, 'document');
      }
    }
  }
}

export {Togglific};
