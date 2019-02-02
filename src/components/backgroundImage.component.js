import {data, strings} from '../app.config';

const getSelector = (cssRule) => {
  return cssRule.cssText.substr(0, cssRule.cssText.indexOf('{')).trim();
};

const hasAnimatedImage = (cssRule) => {
  return cssRule.cssText.indexOf(strings.gifExtension) > -1 ||
    cssRule.cssText.indexOf(strings.weebpExtension) > -1
    ? true
    : false;
};

const removeBackGroundImage = (selector, document, window) => {
  try {
    const backgroundImageElements = document.querySelectorAll(selector);

    for (const element of Array.from(backgroundImageElements)) {
      if (!element.hasAttribute(data.backgroundImage)) {
        element.setAttribute(
          data.backgroundImage,
          window.getComputedStyle(element).backgroundImage
        );
        element.style.backgroundImage = 'none';
      }
    }
  } catch (e) {}
};

const backgroundImage = {
  resume(document) {
    const backgroundImageElements = document.querySelectorAll(
      `[${data.backgroundImage}]`
    );

    for (const backgroundImage of Array.from(backgroundImageElements)) {
      backgroundImage.style.backgroundImage = backgroundImage.getAttribute(
        data.backgroundImage
      );
      backgroundImage.removeAttribute(data.backgroundImage);
    }
  },
  pause(document, window) {
    const styleSheets = document.styleSheets;
    let cssRules = null;

    for (const styleSheet of Array.from(styleSheets)) {
      try {
        if (styleSheet.cssRules) {
          cssRules = styleSheet.cssRules;

          for (const cssRule of Array.from(cssRules)) {
            if (hasAnimatedImage(cssRule)) {
              if (cssRule.type === 1) {
                removeBackGroundImage(getSelector(cssRule), document, window);
              } else if (cssRule.type === 4) {
                for (const cssRule of Array.from(cssRule.cssRules)) {
                  removeBackGroundImage(getSelector(cssRule), document, window);
                }
              }
            }
          }
        }
      } catch (e) {

        // Cross-domain error
      }
    }
  }
};

export {backgroundImage};
