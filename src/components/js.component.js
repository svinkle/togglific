let requestAnimationFrameFn = null;

const js = {
  resume(window) {
    if (typeof requestAnimationFrameFn === 'function') {
      window.requestAnimationFrame = requestAnimationFrameFn;
    }
  },
  pause(window) {
    requestAnimationFrameFn = window.requestAnimationFrame;

    window.requestAnimationFrame = (fn) => {
      return;
    };
  }
};

export {js};
