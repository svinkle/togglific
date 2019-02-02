import {data, selectors} from '../app.config';

const svgAssertions = {
  pause(doc) {
    const svgElements = doc.querySelectorAll(selectors.svgAnimateElem);

    for (const svg of Array.from(svgElements)) {
      expect(svg.getAttribute(selectors.svgDurationAttr)).toBeFalsy();
      expect(svg.getAttribute(data.svg)).toBeTruthy();
    }
  },
  resume(doc) {
    const svgElements = doc.querySelectorAll(selectors.svgAnimateElem);

    for (const svg of Array.from(svgElements)) {
      expect(svg.getAttribute(selectors.svgDurationAttr)).toBeTruthy();
      expect(svg.getAttribute(data.svg)).toBeFalsy();
    }
  }
};

export {svgAssertions};
