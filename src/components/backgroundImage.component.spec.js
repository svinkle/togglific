import {data, selectors, strings} from '../app.config';

const backgroundImageAssertions = {
  pause(doc, win) {
    const styleSheets = doc.styleSheets;
    const backgroundImageContainer = doc.querySelector(
      selectors.spec.cssBackgroundImage
    );
    const imageUrl = win.getComputedStyle(backgroundImageContainer)
      .backgroundImage;

    expect(styleSheets).toBeTruthy();
    expect(backgroundImageContainer).toBeTruthy();
    expect(backgroundImageContainer.style.backgroundImage).toEqual('none');
    expect(
      backgroundImageContainer.getAttribute(data.backgroundImage)
    ).toBeTruthy();
    expect(imageUrl).toEqual('none');
  },
  resume(doc, win) {
    const backgroundImageElements = doc.querySelectorAll(
      selectors.spec.cssBackgroundImage
    );
    let imageUrl = null;

    for (const backgroundImage of Array.from(backgroundImageElements)) {
      imageUrl = win.getComputedStyle(backgroundImage).backgroundImage;

      expect(backgroundImage.getAttribute(data.backgroundImage)).toBeFalsy();
      expect(backgroundImage.style.backgroundImage).toBeTruthy();
      expect(
        imageUrl.indexOf(strings.spec.cssBackgroundImageFilename)
      ).not.toEqual(-1);
    }
  }
};

export {backgroundImageAssertions};
