import {data, selectors} from '../app.config';

const videoAssertions = {
  pause(doc) {
    const videoEl = doc.querySelector(selectors.spec.video);

    // video exists and is paused
    expect(videoEl).toBeTruthy();
    expect(videoEl.paused).toEqual(true);
  },
  resume(doc) {
    const videoEl = doc.querySelector(selectors.spec.video);

    // video exists and is not paused
    expect(videoEl).toBeTruthy();

    if (videoEl.hasAttribute(data.video) || videoEl.hasAttribute('autoplay')) {
      expect(videoEl.paused).toEqual(false);
    } else {
      expect(videoEl.paused).toEqual(true);
    }
  }
};

export {videoAssertions};
