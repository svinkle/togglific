import {data, selectors} from '../app.config';

const imageAssertions = {
  pause(doc) {
    const originalImage = doc.querySelector(selectors.spec.originalImage),
      placeholderDiv = doc.querySelector(selectors.spec.placeholderDiv),
      placeholderCanvas = doc.querySelector(selectors.spec.placeholderCanvas);

    // original image is hidden with display:none and aria-hidden=true added
    expect(originalImage).toBeTruthy();
    expect(originalImage.style.display).toEqual('none');
    expect(originalImage.getAttribute('aria-hidden')).toEqual('true');

    // placeholder is div with canvas inside, inserted as a sibling after the original image
    expect(placeholderDiv).toBeTruthy();
    expect(placeholderCanvas).toBeTruthy();

    // placeholder div has all original image's classes and alt attributes and id. as well as role=img
    expect(placeholderDiv.id).toEqual(originalImage.id);
    expect(placeholderDiv.getAttribute('class')).toEqual(
      originalImage.getAttribute('class')
    );
    expect(placeholderDiv.getAttribute('role')).toEqual('img');
    expect(placeholderDiv.getAttribute(data.image)).toEqual('0');

    // placeholder canvas has width/height to match image's
    expect(placeholderCanvas.getAttribute('width')).toEqual(
      originalImage.getAttribute('width')
    );
    expect(placeholderCanvas.getAttribute('height')).toEqual(
      originalImage.getAttribute('height')
    );
  },
  resume(doc) {
    const originalImage = doc.querySelector(selectors.spec.originalImage),
      placeholderDiv = doc.querySelector(selectors.spec.placeholderDiv),
      placeholderCanvas = doc.querySelector(selectors.spec.placeholderCanvas);

    // Original image is visible again with no display:none or aria-hidden=true added
    expect(originalImage).toBeTruthy();
    expect(originalImage.style.display).toEqual('block');
    expect(originalImage.getAttribute('aria-hidden')).toEqual('false');

    // Placeholder is div and canvas do not exist
    expect(placeholderDiv).toBeFalsy();
    expect(placeholderCanvas).toBeFalsy();
  }
};

export {imageAssertions};
