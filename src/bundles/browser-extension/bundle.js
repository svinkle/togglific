!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o={pause:["-webkit-animation: none !important;","-moz-animation: none !important;","-ms-animation: none !important;","-o-animation: none !important;","animation: none !important;","-webkit-transition: none !important;","-moz-transition: none !important;","-ms-transition: none !important;","-o-transition: none !important;","transition: none !important;","-webkit-transform: none !important;","-moz-transform: none !important;","-ms-transform: none !important;","-o-transform: none !important;","transform: none !important;"].join(""),notification:["background-color: #f9edbe;","border-radius: 3px;","border: solid #f0c36d 2px;","box-shadow: 0 2px 4px rgba(0,0,0,0.2);","color: #222;","font-size: 24px;","font-weight: 700;","left: 50%;","margin-left: -50%;","padding: 5px 10px;","position: fixed;","text-align: center;","top: 10px;","z-index: 99999;","opacity: 0;"].join(""),selectors:["* + *,",":before,",":after,","body :not(g)"].join(""),svg:["fill: #222;","position: relative;","top: 3px;"].join("")},r="data-background-image",i="data-image",a="data-dur",l="data-playing",c={iframeElem:"iframe",imageElem:['img[src*=".gif"],','img[src*=".webp"],','img[srcset*=".gif"],','img[srcset*=".webp"]'].join(""),notificationId:"toggle-animation-notification",spec:{cssBackgroundImage:".animated-background-image",originalBackgroundImage:'img[src$="cat.gif"]',originalImage:'img[src$="cat.gif"]',placeholderCanvas:'img[src$="cat.gif"] ~ div > canvas',placeholderDiv:'img[src$="cat.gif"] ~ div',togglerBtn:"toggler",togglerLink:"toggler-bookmarklet",video:".video-example video"},styleElem:"pause-animation",svgAnimateElem:["animate,","animateMotion"].join(""),svgDurationAttr:"dur",videoElem:"video",brochure:{htmlBody:"html, body",navLink:".header__nav-link",demos:"#demos",toggler:"#toggler",togglerBookmarklet:"#toggler-bookmarklet",togglerFixed:"#toggler-fixed",togglerContainer:"#toggler-container",videoPlayer:"#video-player",sourceElem:"source",section:".section",btns:'[role="button"]'}},s=5e3,m={clickIconRequest:"iconClick",gifExtension:".gif",localStorageItem:"allowAnimation",notice:{resume:"Animation Resumed!",pause:"Animation Paused!"},setIconRequest:"setIcon",spec:{cssBackgroundImageFilename:"batman-starwars.gif"},webpExtension:".webp",brochure:{mediaQuery:"(max-width: 68rem)",video:{morning:"343647377",day:"615244686",night:"700244834"}}},u={resume:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" style="'.concat(o.svg,'"><g transform="scale(0.0234375, 0.0234375)"><path d="M512 938c-48 0-86-38-86-84h170c0 49.675-37.225 84-84 84zM768 470v212l86 86v42h-684v-42l86-86v-212c0-132 70-240 192-270v-30c0-36 28-64 64-64s64 28 64 64v30c122 30 192 140 192 270zM852 448c-6-114-64-212-150-274l60-60c102 78 170 198 176 334h-86zM324 174c-88 62-146 160-152 274h-86c6-136 74-256 176-334z"></path></g></svg>'),pause:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" style="'.concat(o.svg,'"><g transform="scale(0.0234375, 0.0234375)"><path d="M768 682l86 86v42h-684v-42l86-86v-212c0-132 70-240 192-270v-30c0-36 28-64 64-64s64 28 64 64v30c122 30 192 140 192 270v212zM512 938c-48 0-86-38-86-84h172c0 46-40 84-86 84z"></path></g></svg>')},g=function(e){return e.cssText.substr(0,e.cssText.indexOf("{")).trim()},d=function(e){return e.cssText.indexOf(m.gifExtension)>-1||e.cssText.indexOf(m.weebpExtension)>-1},f=function(e,t,n){try{for(var o=t.querySelectorAll(e),i=Array.from(o),a=0;a<i.length;a++){var l=i[a];l.hasAttribute(r)||(l.setAttribute(r,n.getComputedStyle(l).backgroundImage),l.style.backgroundImage="none")}}catch(e){}},v=function(e){for(var t=e.querySelectorAll("[".concat(r,"]")),n=Array.from(t),o=0;o<n.length;o++){var i=n[o];i.style.backgroundImage=i.getAttribute(r),i.removeAttribute(r)}},p=function(e,t){for(var n=e.styleSheets,o=null,r=Array.from(n),i=0;i<r.length;i++){var a=r[i];try{if(a.cssRules){o=a.cssRules;for(var l=Array.from(o),c=0;c<l.length;c++){var s=l[c];if(d(s))if(1===s.type)f(g(s),e,t);else if(4===s.type)for(var m=Array.from(s.cssRules),u=0;u<m.length;u++){var v=m[u];f(g(v),e,t)}}}}catch(e){}}},y=function(e){null!=e.getElementById(c.styleElem)&&e.body.removeChild(e.getElementById(c.styleElem))},b=function(e){if(null==e.getElementById(c.styleElem)){var t=e.createElement("style");t.id=c.styleElem,t.textContent="".concat(o.selectors,"{").concat(o.pause,"}"),e.body.appendChild(t)}},h=function(e){for(var t=e.querySelectorAll(c.imageElem),n=0,o=Array.from(t),r=0;r<o.length;r++){var a=o[r];null!=e.querySelector("[".concat(i,'="').concat(n,'"]'))&&(e.querySelector("[".concat(i,'="').concat(n,'"]')).remove(),a.style.display="block",a.setAttribute("aria-hidden",!1),n++)}},A=function(e,t){for(var n=e.querySelectorAll(c.imageElem),o=null,r=null,a=0,l=0,s=0,m=Array.from(n),u=0;u<m.length;u++){var g=m[u];null==e.querySelector("[".concat(i,'="').concat(s,'"]'))&&(o=e.createElement("canvas"),r=e.createElement("div"),a=g.width||t.getComputedStyle(g).width,l=g.height||t.getComputedStyle(g).height,g.id&&(r.id=g.id),null!=g.getAttribute("class")&&r.setAttribute("class",g.getAttribute("class")),null!=g.getAttribute("alt")&&r.setAttribute("alt",g.getAttribute("alt")),r.setAttribute(i,s),r.setAttribute("role","img"),o.width=a,o.height=l,o.getContext("2d").drawImage(g,0,0,a,l),g.parentNode.insertBefore(r,g.nextSibling),r.appendChild(o),g.style.display="none",g.setAttribute("aria-hidden",!0),s++)}},x=function(e){for(var t=e.querySelectorAll(c.svgAnimateElem),n=Array.from(t),o=0;o<n.length;o++){var r=n[o];r.getAttribute(a)&&(r.setAttribute(c.svgDurationAttr,r.getAttribute(a)),r.removeAttribute(a))}},w=function(e){for(var t=e.querySelectorAll(c.svgAnimateElem),n=Array.from(t),o=0;o<n.length;o++){var r=n[o];r.setAttribute(a,r.getAttribute(c.svgDurationAttr)),r.removeAttribute(c.svgDurationAttr)}},E=function(e){e.target.setAttribute(l,!0)},k=function(e){for(var t=e.getElementsByTagName(c.videoElem),n=Array.from(t),o=0;o<n.length;o++){var r=n[o];(r.hasAttribute(l)||r.hasAttribute("autoplay"))&&r.play()}},I=function(e){for(var t=e.getElementsByTagName(c.videoElem),n=Array.from(t),o=0;o<n.length;o++){n[o].pause()}};(function(){for(var e=document.getElementsByTagName(c.videoElem),t=Array.from(e),n=0;n<t.length;n++){t[n].addEventListener("playing",E)}})();var S=function(e,t){var n=document.createElement("div"),r=document.getElementById(c.notificationId);null!=r&&r.remove(),n.id=c.notificationId,n.setAttribute("style",o.notification),n.setAttribute("aria-live","polite"),n.setAttribute("aria-atomic",!0),n.setAttribute("role","status"),document.body.appendChild(n),window.setTimeout(function(){n.innerHTML="".concat(t," ").concat(e),n.style.marginLeft="-".concat(n.offsetWidth/2,"px"),n.style.opacity=1},200),window.setTimeout(function(){n.remove()},s)},B=function(e,t){for(var n=document.getElementsByTagName(c.iframeElem),o=Array.from(n),r=0;r<o.length;r++){var i=o[r];try{e("document"===t?i.contentDocument:i.contentWindow)}catch(e){}}};
/**
 * Togglific
 *
 * "Enjoy a distraction-free web experience!"
 *
 * Check out the GitHub repo for more information: https://github.com/svinkle/togglific
 *
 * @author Scott Vinkle <scott.vinkle@shopify.com>
 * @version 0.16.0
 * @license MIT
 */
!function(e,t){var n,o,r,i=null,a=function e(t){t[m.clickIconRequest]&&(null==i||i?S(m.notice.pause,u.pause):S(m.notice.resume,u.resume)),chrome.runtime.onMessage.removeListener(e)},l=function(){i?(v(t),B(v,"document"),y(t),B(y,"document"),h(t),B(h,"document"),x(t),B(x,"document"),k(t),B(k,"document")):(p(t,e),B(p,"document"),b(t),B(b,"document"),A(t,e),B(A,"document"),w(t),B(w,"document"),I(t),B(I,"document"))};null!=localStorage.getItem(m.localStorageItem)&&(chrome.runtime.sendMessage((n={},o=m.setIconRequest,r=localStorage.getItem(m.localStorageItem),o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n)),i="true"===localStorage.getItem(m.localStorageItem),l()),chrome.runtime.onMessage.hasListener(a)||chrome.runtime.onMessage.addListener(a)}(window,document)}]);