const classes = {
  brochure: {
    sectionIsVisible: 'section--is-visible',
    togglerIsVisible: 'toggler__container--is-visible'
  }
};

const cssProps = {
  pause: [
    '-webkit-animation: none !important;',
    '-moz-animation: none !important;',
    '-ms-animation: none !important;',
    '-o-animation: none !important;',
    'animation: none !important;',
    '-webkit-transition: none !important;',
    '-moz-transition: none !important;',
    '-ms-transition: none !important;',
    '-o-transition: none !important;',
    'transition: none !important;',
    '-webkit-transform: none !important;',
    '-moz-transform: none !important;',
    '-ms-transform: none !important;',
    '-o-transform: none !important;',
    'transform: none !important;'
  ].join(''),
  notification: [
    'background-color: #f9edbe;',
    'border-radius: 3px;',
    'border: solid #f0c36d 2px;',
    'box-shadow: 0 2px 4px rgba(0,0,0,0.2);',
    'color: #222;',
    'font-size: 24px;',
    'font-weight: 700;',
    'left: 50%;',
    'margin-left: -50%;',
    'padding: 5px 10px;',
    'position: fixed;',
    'text-align: center;',
    'top: 10px;',
    'z-index: 99999;',
    'opacity: 0;'
  ].join(''),
  selectors: ['* + *,', ':before,', ':after,', 'body :not(g)'].join(''),
  svg: ['fill: #222;', 'position: relative;', 'top: 3px;'].join('')
};

const data = {
  backgroundImage: 'data-background-image',
  image: 'data-image',
  svg: 'data-dur',
  video: 'data-playing',
  brochure: {
    videoSrc: 'data-video-src'
  }
};

const keyCodes = {
  space: 32
};

const selectors = {
  iframeElem: 'iframe',
  imageElem: [
    'img[src*=".gif"],',
    'img[src*=".webp"],',
    'img[srcset*=".gif"],',
    'img[srcset*=".webp"]'
  ].join(''),
  notificationId: 'toggle-animation-notification',
  spec: {
    cssBackgroundImage: '.animated-background-image',
    originalBackgroundImage: 'img[src$="cat.gif"]',
    originalImage: 'img[src$="cat.gif"]',
    placeholderCanvas: 'img[src$="cat.gif"] ~ div > canvas',
    placeholderDiv: 'img[src$="cat.gif"] ~ div',
    togglerBtn: 'toggler',
    togglerLink: 'toggler-bookmarklet',
    video: '.video-example video'
  },
  styleElem: 'pause-animation',
  svgAnimateElem: ['animate,', 'animateMotion'].join(''),
  svgDurationAttr: 'dur',
  videoElem: 'video',
  brochure: {
    htmlBody: 'html, body',
    navLink: '.header__nav-link',
    demos: '#demos',
    toggler: '#toggler',
    togglerBookmarklet: '#toggler-bookmarklet',
    togglerFixed: '#toggler-fixed',
    togglerContainer: '#toggler-container',
    videoPlayer: '#video-player',
    sourceElem: 'source',
    section: '.section',
    btns: '[role="button"]'
  }
};

const settings = {
  demoSrc: '/base/test/demo/index.html?',
  initSrc: '/base/test/assets/init.js',
  notification: 5000,
  brochure: {
    togglific: 'javascript/togglific.js',
    sectionTransformOffset: 0.9,
    videos: 'video/'
  }
};

const strings = {
  clickIconRequest: 'iconClick',
  gifExtension: '.gif',
  localStorageItem: 'allowAnimation',
  notice: {
    resume: 'Animation Resumed!',
    pause: 'Animation Paused!'
  },
  setIconRequest: 'setIcon',
  spec: {
    cssBackgroundImageFilename: 'batman-starwars.gif'
  },
  webpExtension: '.webp',
  brochure: {
    mediaQuery: '(max-width: 68rem)',
    video: {
      morning: '343647377',
      day: '615244686',
      night: '700244834'
    }
  }
};

const svgIcons = {
  resume: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" style="${
    cssProps.svg
  }"><g transform="scale(0.0234375, 0.0234375)"><path d="M512 938c-48 0-86-38-86-84h170c0 49.675-37.225 84-84 84zM768 470v212l86 86v42h-684v-42l86-86v-212c0-132 70-240 192-270v-30c0-36 28-64 64-64s64 28 64 64v30c122 30 192 140 192 270zM852 448c-6-114-64-212-150-274l60-60c102 78 170 198 176 334h-86zM324 174c-88 62-146 160-152 274h-86c6-136 74-256 176-334z"></path></g></svg>`,
  pause: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" style="${
    cssProps.svg
  }"><g transform="scale(0.0234375, 0.0234375)"><path d="M768 682l86 86v42h-684v-42l86-86v-212c0-132 70-240 192-270v-30c0-36 28-64 64-64s64 28 64 64v30c122 30 192 140 192 270v212zM512 938c-48 0-86-38-86-84h172c0 46-40 84-86 84z"></path></g></svg>`
};

export {
  classes,
  cssProps,
  data,
  keyCodes,
  selectors,
  settings,
  strings,
  svgIcons
};
