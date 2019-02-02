import {cssProps, selectors} from '../app.config';

const cssAssertions = {
  pause(doc) {
    const styleEl = doc.querySelector(`#${selectors.styleElem}`);

    let styleString = '',
      selector = '',
      styles = '';

    expect(styleEl).toBeTruthy();

    styleString = styleEl.firstChild.textContent;

    // extract the selector and styles from the <style> element's content
    selector = styleString.split('{')[0].trim();
    styles = styleString.match(/\{([^)]+)\}/)[1].trim();

    // assertions
    expect(selector).toEqual(cssProps.selectors);
    expect(styles).toEqual(cssProps.pause);
  },
  resume(doc) {
    const styleEl = doc.querySelector(`#${selectors.styleElem}`);

    expect(styleEl).toBeFalsy();
  }
};

export {cssAssertions};
