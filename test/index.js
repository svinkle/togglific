import {selectors, settings, strings} from '../src/app.config';
import {backgroundImageAssertions} from '../src/components/backgroundImage.component.spec';
import {cssAssertions} from '../src/components/css.component.spec';
import {imageAssertions} from '../src/components/image.component.spec';
import {jQueryAssertions} from '../src/components/jquery.component.spec';
import {jsAssertions} from '../src/components/js.component.spec';
import {svgAssertions} from '../src/components/svg.component.spec';
import {videoAssertions} from '../src/components/video.component.spec';

const run = (togglerId) => {
  describe('Togglific', () => {
    let demo = null,
      demoIframe = null,
      originalRequestAnimationFrameFn = null,
      originalIFrameRequestAnimationFrameFn = null;

    beforeEach((done) => {

      // Set default animation setting to ON
      localStorage.setItem(strings.localStorageItem, true);

      // Create the test rig
      createExamples((iframe, innerIFrame) => {
        demo = iframe;
        demoIframe = innerIFrame;

        // Save the original requestAnimationFrame functions to compare against later
        // only used in the JS tests
        originalRequestAnimationFrameFn =
          demo.contentWindow.requestAnimationFrame;
        originalIFrameRequestAnimationFrameFn =
          demoIframe.contentWindow.requestAnimationFrame;

        // Annotate with a custom prop to determine if it is being used later
        originalRequestAnimationFrameFn.isOriginal = true;
        originalIFrameRequestAnimationFrameFn.isOriginal = true;

        // Start the test
        done();
      });
    });

    afterEach(() => {
      document.body.removeChild(demo);

      demo = null;
      demoIframe = null;
      originalRequestAnimationFrameFn = null;
      originalIFrameRequestAnimationFrameFn = null;
    });

    describe('Pause', () => {
      let doc = null,
        win = null,
        iframeDoc = null,
        iframeWin = null;

      beforeEach(() => {
        doc = demo.contentDocument;
        win = demo.contentWindow;
        iframeDoc = demoIframe.contentDocument;
        iframeWin = demoIframe.contentWindow;

        doc.querySelector(`#${togglerId}`).click();
      });

      afterEach(() => {
        doc = null;
        win = null;
        iframeDoc = null;
        iframeWin = null;
      });

      describe('localStorageItem', () => {
        it('should be set to `false`', (done) => {
          expect(localStorage.getItem(strings.localStorageItem)).toEqual(
            'false'
          );
          done();
        });
      });

      describe('Background Images', () => {
        it('should temporarily remove CSS background animated images', (done) => {
          backgroundImageAssertions.pause(doc, win);
          done();
        });

        // WIP
        // it('should temporarily remove CSS background animated images within `<iframe>`s', (done) => {
        //     backgroundImageAssertions.pause(iframeDoc, iframeWin);
        //     done();
        // });
      });

      describe('CSS', () => {
        it('should pause CSS animations', (done) => {
          expect(localStorage.getItem(strings.localStorageItem)).toEqual(
            'false'
          );
          cssAssertions.pause(doc);
          done();
        });

        it('should pause CSS animations within `<iframe>`s', (done) => {
          cssAssertions.pause(iframeDoc);
          done();
        });
      });

      describe('JavaScript', () => {
        it('should override `requestAnimationFrame()` to pause JavaScript animations', (done) => {
          jsAssertions.pause(win, originalRequestAnimationFrameFn);
          done();
        });

        it('should override `requestAnimationFrame()` to pause JavaScript animations within `<iframe>`s', (done) => {
          jsAssertions.pause(iframeWin, originalRequestAnimationFrameFn);
          done();
        });
      });

      describe('jQuery', () => {
        it('should set `fx.off` to `true` pause jQuery animations', (done) => {
          jQueryAssertions.pause(win);
          done();
        });

        // WIP
        // it('should set `fx.off` to `true` pause jQuery animations within `<iframe>`s', (done) => {
        //     jQueryAssertions.pause(iframeWin);
        //     done();
        // });
      });

      describe('SVG', () => {
        it('should remove `dur` attribute to pause SVG animations', (done) => {
          svgAssertions.pause(doc);
          done();
        });

        it('should remove `dur` attribute to pause SVG animations within `<iframe>`s', (done) => {
          svgAssertions.pause(iframeDoc);
          done();
        });
      });

      describe('Images', () => {
        it('should create a still-frame of the image (`.gif` or `.webp`) to pause animating Images', (done) => {
          imageAssertions.pause(doc);
          done();
        });

        it('should create a still-frame of the image (`.gif` or `.webp`) to pause animating Images within `<iframe>`s', (done) => {
          imageAssertions.pause(iframeDoc);
          done();
        });
      });

      describe('Video', () => {
        it('should pause `<video>` to pause any playing videos', (done) => {
          videoAssertions.pause(doc);
          done();
        });

        it('should pause `<video>` to pause any playing videos within `<iframe>`s', (done) => {
          videoAssertions.pause(iframeDoc);
          done();
        });
      });
    });

    describe('Resume', () => {
      let doc = null,
        win = null,
        iframeDoc = null,
        iframeWin = null;

      beforeEach(() => {
        doc = demo.contentDocument;
        win = demo.contentWindow;
        iframeDoc = demoIframe.contentDocument;
        iframeWin = demoIframe.contentWindow;

        doc.querySelector(`#${togglerId}`).click();
        doc.querySelector(`#${togglerId}`).click();
      });

      afterEach(() => {
        doc = null;
        win = null;
        iframeDoc = null;
        iframeWin = null;

        localStorage.removeItem(strings.localStorageItem);
      });

      describe('localStorageItem', () => {
        it('should be set to `true`', (done) => {
          expect(localStorage.getItem(strings.localStorageItem)).toEqual(
            'true'
          );
          done();
        });
      });

      describe('Background Images', () => {
        it('should add back in CSS background animated images', (done) => {
          backgroundImageAssertions.resume(doc, win);
          done();
        });

        // WIP
        // it('should add back in CSS background animated images within `<iframe>`s', (done) => {
        //     backgroundImageAssertions.resume(iframeDoc, iframeWin);
        //     done();
        // });
      });

      describe('CSS', () => {
        it('should resume CSS animations', (done) => {
          cssAssertions.resume(doc);
          done();
        });

        it('should resume CSS animations within `<iframe>`s', (done) => {
          cssAssertions.resume(iframeDoc);
          done();
        });
      });

      // WIP
      // describe('JavaScript', () => {
      //     it('should replace temp `requestAnimationFrame()` to resume JavaScript animations', (done) => {
      //         jsAssertions.resume(win, originalRequestAnimationFrameFn);
      //         done();
      //     });
      //
      //     it('should replace temp `requestAnimationFrame()` to resume JavaScript animations within `<iframe>`s', (done) => {
      //         jsAssertions.resume(iframeWin, originalRequestAnimationFrameFn);
      //         done();
      //     });
      // });

      describe('jQuery', () => {
        it('should set `fx.off` to `false` resume jQuery animations', (done) => {
          jQueryAssertions.resume(win);
          done();
        });

        it('should set `fx.off` to `false` resume jQuery animations within `<iframe>`s', (done) => {
          jQueryAssertions.resume(iframeWin);
          done();
        });
      });

      describe('SVG', () => {
        it('should reapply `dur` attribute to resume SVG animations', (done) => {
          svgAssertions.resume(doc);
          done();
        });

        it('should reapply `dur` attribute to resume SVG animations within `<iframe>`s', (done) => {
          svgAssertions.resume(iframeDoc);
          done();
        });
      });

      describe('Images', () => {
        it('should replace the still-frame of the image (`.gif` or `.webp`) to resume animating Images', (done) => {
          imageAssertions.resume(doc);
          done();
        });

        it('should replace the still-frame of the image (`.gif` or `.webp`) to resume animating Images within `<iframe>`s', (done) => {
          imageAssertions.resume(iframeDoc);
          done();
        });
      });

      describe('Video', () => {
        it('should play `<video>` to resume any playing videos', (done) => {
          videoAssertions.resume(doc);
          done();
        });

        it('should play `<video>` to resume any playing videos within `<iframe>`s', (done) => {
          videoAssertions.resume(iframeDoc);
          done();
        });
      });
    });
  });
};

run(selectors.spec.togglerBtn);
run(selectors.spec.togglerLink);

/**
 * Creates and loads the demo.html file in an hidden iframe, within the specified `doc`. The onload
 * method will be called after the iframe loads and an arbitrary timeout has occurred.
 *
 * @param  {Function} onload Callback when the iframe has loaded
 * @return {IFrame} The iframe that was created.
 */
const createExample = (doc, onload) => {
  const iframe = doc.createElement('iframe');

  iframe.onload = () => {
    onload(iframe);
  };

  iframe.style.display = 'none';
  iframe.setAttribute('src', settings.demoSrc + new Date().getTime());
  doc.body.appendChild(iframe);

  return iframe;
};

/**
 * Creates an instance of `example.html` in an iframe of the main document, and then
 * creates another within that iframe so we have a nested set of examples for testing.
 *
 * @param  {Function} onload Callback when the iframe has loaded. The iframe and inner iframe are passed to it as parameters.
 */
const createExamples = (onload) => {
  let togglific = null;

  // Create first examples iframe in the main document.
  createExample(document, (iframe) => {

    // Create the second inside the first
    createExample(iframe.contentDocument, (innerIFrame) => {

      // Initialise Togglific on the main iframe
      togglific = iframe.contentDocument.createElement('script');
      togglific.src = settings.initSrc;

      // Wait until it has loaded before we continue with the tests
      togglific.onload = () => {

        // Both iframes are loaded so we execute the callback
        onload(iframe, innerIFrame);
      };

      // Append the init script to the main iframe
      iframe.contentDocument.body.appendChild(togglific);
    });
  });
};
