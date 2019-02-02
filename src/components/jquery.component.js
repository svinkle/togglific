const jquery = {
  resume(window) {
    if (window.jQuery) {
      if (jQuery.fx) {
        jQuery.fx.off = false;
      }
    }
  },
  pause(window) {
    if (window.jQuery) {
      if (jQuery.fx) {
        jQuery.fx.off = true;
      }
    }
  }
};

export {jquery};
