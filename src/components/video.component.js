import {data, selectors} from '../app.config';

const playing = (e) => {
  e.target.setAttribute(data.video, true);
};

const video = {
  resume(document) {
    const videoElements = document.getElementsByTagName(selectors.videoElem);

    for (const video of Array.from(videoElements)) {
      if (video.hasAttribute(data.video) || video.hasAttribute('autoplay')) {
        video.play();
      }
    }
  },
  pause(document) {
    const videoElements = document.getElementsByTagName(selectors.videoElem);

    for (const video of Array.from(videoElements)) {
      video.pause();
    }
  },
  init() {
    const videoElements = document.getElementsByTagName(selectors.videoElem);

    for (const video of Array.from(videoElements)) {
      video.addEventListener('playing', playing);
    }
  }
};

video.init();

export {video};
