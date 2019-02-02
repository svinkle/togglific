const jQueryAssertions = {
  pause(win) {
    expect(win.jQuery.fx.off).toEqual(true);
  },
  resume(win) {
    expect(win.jQuery.fx.off).toEqual(false);
  }
};

export {jQueryAssertions};
