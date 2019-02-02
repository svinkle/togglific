import {
  classes,
  data,
  keyCodes,
  selectors,
  settings,
  strings
} from '../../src/app.config';

(() => {
  const togglers = document.querySelectorAll(
    `${selectors.brochure.toggler}, ${selectors.brochure.togglerBookmarklet}, ${
      selectors.brochure.togglerFixed
    }`
  );

  // Set the `href` attribute of each toggler control to the source of the
  // bookmarklet script
  const setBookmarkletHref = function() {
    if (this.readyState === 4) {
      if (this.status === 200 || this.status == 0) {
        for (const toggler of Array.from(togglers)) {
          toggler.setAttribute('href', this.responseText);
        }
      }
    }
  };

  // Set the video based on the time of day (not at all necessary, but fun. ;)
  const setVideo = () => {
    return new Promise((resolve, reject) => {
      let videoSrc = null;

      const videoElem = document.querySelector(selectors.brochure.videoPlayer),
        originalVideoSource = videoElem.querySelector(
          selectors.brochure.sourceElem
        ),
        videoSource = document.createElement(selectors.brochure.sourceElem),
        splitMorning = 5,
        splitAfternoon = 12,
        splitEvening = 17,
        currentHour = new Date().getHours();

      if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
        videoSrc = strings.brochure.video.day;
      } else if (currentHour >= splitEvening || currentHour <= splitMorning) {
        videoSrc = strings.brochure.video.night;
      } else {
        videoSrc = strings.brochure.video.morning;
      }

      videoSource.setAttribute('type', 'video/mp4');
      videoSource.src = `${settings.brochure.videos}${videoSrc}.mp4`;

      originalVideoSource.parentElement.removeChild(originalVideoSource);
      videoElem.pause();

      videoElem.appendChild(videoSource);
      videoElem.load();
      videoElem.play();

      resolve();
      reject();
    });
  };

  // Prevent videos from being downloaded on small screens
  // (assumed to be mobile device)
  const stopVideoDownload = () => {
    const videoElem = document.querySelector(selectors.brochure.videoPlayer),
      videoSource = videoElem.querySelector(selectors.brochure.sourceElem);

    videoSource.setAttribute(data.brochure.videoSrc, videoSource.src);

    if (window.matchMedia(strings.brochure.mediaQuery).matches) {
      videoSource.src = '';
    } else {
      videoSource.src = videoSource.getAttribute(data.brochure.videoSrc);
    }
  };

  // Check if the provided element is visible in the viewport
  // https://stackoverflow.com/a/16270434
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();

    return (
      rect.bottom > 0 * settings.brochure.sectionTransformOffset &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top <
        (window.innerHeight || document.documentElement.clientHeight) *
          settings.brochure.sectionTransformOffset
    );
  };

  // Ease-in section content
  const easeInSections = () => {
    const sections = document.querySelectorAll(selectors.brochure.section);

    for (const section of Array.from(sections)) {
      if (
        isElementInViewport(section) &&
        section.className.indexOf(classes.brochure.sectionIsVisible) === -1
      ) {
        section.classList.add(classes.brochure.sectionIsVisible);
      }
    }
  };

  // Show/hide the fixed position toggler
  const showToggler = () => {
    const togglerContainer = document.querySelector(
        selectors.brochure.togglerContainer
      ),
      toggler = document.querySelector(selectors.brochure.togglerFixed),
      demos = document.querySelector(selectors.brochure.demos);

    if (isElementInViewport(demos)) {
      togglerContainer.classList.add(classes.brochure.togglerIsVisible);
      togglerContainer.setAttribute('aria-hidden', false);
      toggler.removeAttribute('tabindex');
    } else {
      togglerContainer.classList.remove(classes.brochure.togglerIsVisible);
      togglerContainer.setAttribute('aria-hidden', true);
      toggler.setAttribute('tabindex', -1);
    }
  };

  // Update pressed state of toggler controls
  const updateTogglerState = () => {
    for (const toggler of Array.from(togglers)) {
      toggler.setAttribute(
        'aria-pressed',
        localStorage.getItem(strings.localStorageItem) == null ||
          localStorage.getItem(strings.localStorageItem) === 'true'
          ? true
          : false
      );
    }
  };

  // Support `space` keypress on `role="button"` elements
  const spaceKeySupport = () => {
    const btns = document.querySelectorAll(selectors.brochure.btns);

    for (const btn of Array.from(btns)) {
      btn.addEventListener(
        'keydown',
        (e) => {
          if (e.keyCode === keyCodes.space) {
            e.preventDefault();
            btn.click();
          }
        },
        false
      );
    }
  };

  // Get the bookmarklet script and set the `href` attribute of each toggler
  // control to the file source
  const client = new XMLHttpRequest();
  client.onload = setBookmarkletHref;
  client.open('GET', settings.brochure.togglific);
  client.send();

  // Setup the video but only for large screens
  setVideo().then(stopVideoDownload);
  window.matchMedia(strings.brochure.mediaQuery).addListener(() => {
    setVideo().then(stopVideoDownload);
  });

  // Ease-in section content
  easeInSections();
  window.addEventListener('scroll', easeInSections, false);
  window.addEventListener('resize', easeInSections, false);

  // Hide/show floating toggler control
  showToggler();
  window.addEventListener('scroll', showToggler, false);
  window.addEventListener('resize', showToggler, false);

  // Update toggler control state
  for (const toggler of Array.from(togglers)) {
    toggler.addEventListener('click', updateTogglerState, false);
  }

  // Add `space` key for `role="button"` elements
  spaceKeySupport();
})();

// Use jQuery to scroll down to sections -- also serves as a jQuery animation
// demo
$(document).ready(function() {
  const $headerLinks = $(selectors.brochure.navLink),
    $htmlBody = $(selectors.brochure.htmlBody);

  let hash = null;

  $headerLinks.on('click', function(event) {
    hash = $(this)[0].hash;

    if (hash !== '') {
      event.preventDefault();

      $htmlBody.animate(
        {
          scrollTop: $(hash).offset().top
        },
        500,
        function() {
          window.location.hash = hash;
          $(hash).focus();
        }
      );
    }
  });
});
