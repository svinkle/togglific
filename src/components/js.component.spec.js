const jsAssertions = {
  pause(win, requestAnimationFn) {
    expect(win.requestAnimationFrame).not.toEqual(requestAnimationFn);
    expect(win.requestAnimationFrame.isOriginal).toBeFalsy();
  },
  resume(win) {

    // Check the function in place has the isOriginal flag we set
    expect(win.requestAnimationFrame.isOriginal).toEqual(true);
  }
};

export {jsAssertions};
