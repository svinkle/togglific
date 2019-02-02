import {cssProps, selectors} from '../app.config';

const css = {
  resume(document) {
    if (document.getElementById(selectors.styleElem) != null) {
      document.body.removeChild(document.getElementById(selectors.styleElem));
    }
  },
  pause(document) {
    if (document.getElementById(selectors.styleElem) != null) {
      return;
    }

    const styleElem = document.createElement('style');

    styleElem.id = selectors.styleElem;
    styleElem.textContent = `${cssProps.selectors}{${cssProps.pause}}`;

    document.body.appendChild(styleElem);
  }
};

export {css};
