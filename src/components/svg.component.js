import {data, selectors} from '../app.config';

const svg = {
  resume(document) {
    const svgElements = document.querySelectorAll(selectors.svgAnimateElem);

    for (const svg of Array.from(svgElements)) {
      if (svg.getAttribute(data.svg)) {
        svg.setAttribute(selectors.svgDurationAttr, svg.getAttribute(data.svg));
        svg.removeAttribute(data.svg);
      }
    }
  },
  pause(document) {
    const svgElements = document.querySelectorAll(selectors.svgAnimateElem);

    for (const svg of Array.from(svgElements)) {
      svg.setAttribute(data.svg, svg.getAttribute(selectors.svgDurationAttr));
      svg.removeAttribute(selectors.svgDurationAttr);
    }
  }
};

export {svg};
