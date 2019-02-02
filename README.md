
[![Build Status](https://travis-ci.org/svinkle/togglific.svg?branch=master)](https://travis-ci.org/svinkle/togglific)
[![npm version](https://badge.fury.io/js/togglific.svg)](https://badge.fury.io/js/togglific)

# 🔔 Togglific

> Enjoy a distraction-free web experience!

Toggle web animations on or off; for people with [vestibular disorders](https://a11yproject.com/posts/understanding-vestibular-disorders/), who are prone to motion sickness, or who find animations distracting!

## Features

The following animated elements will _paused_ on button click:

- CSS Animations (`animation` and `transform` properties)
- JavaScript Animations (`requestAnimationFrame()` method)
- SVG animations
- jQuery animations
- Animated `.gif` and `.webp` images
- HTML `<video>` elements
- Targets same-domain `<iframe>` elements for all of the above

## Demo

Check out the [demo section](https://togglific.io#demos) to see Togglific in action!

---

## Products

Togglific generates three separate products:

1. **Stand-alone script**: For development teams to implement into their own projects and setup custom controls. This covers all animations.

   See the [script options](#script-options) for more details on how to customize for your own needs!

2. **Bookmarklet**: For anyone wishing to quickly pause animations on the current page their viewing.

   The bookmarklet also covers all animations and has the greatest browser support.

   **Note:** State does not persist; the user needs to click the bookmarklet control on each page load to pause animations.

3. **Browser extension**: Available for [Chrome](https://chrome.google.com/webstore/detail/nonnndpheabjkjjnjondfcfgcmhfbckb/publish-accepted?authuser=0&hl=en-US) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/togglific/).

   With this, `localStorage` is used to persist the selection. The user only has to click the button once to always disable animations for the current domain.

   **Note:** At this time, the extension does not toggle JavaScript based animations due to technical limitations.

Let's look at each in more detail:

### Stand-alone script

#### Usage

1. Include the lib at the bottom of your page:

```html
<script src="dist/stand-alone/togglific.js"></script>
```

2. Create a `new` instance and supply the `id` of your toggle button:

```html
<script>
  new Togglific.Togglific([options], 'toggler');
</script>
```

See [script options](#script-options) for more info on the `[options]` parameter.

3. Add the toggle button to your HTML:

```html
<button id="toggler">Toggle Animations!</button>
```

#### npm Package

You can also grab the stand-alone script and include it into your project via `npm`!

##### Installation

```sh
npm install togglific
```

##### Usage

1. In your JavaScript file…

```javascript
const toggler = require('togglific');
// …
new toggler.Togglific([options], 'toggler');
```

2. Then add a `<button>` element as a toggle.

```html
<button id="toggler">Toggle Animations!</button>
```

#### Bookmarklet

Simply drag the [Bookmarklet!](https://togglific.io#bookmarklet) link to your bookmarks bar in your browser and you're all set!

### Browser extensions

Install the browser extension from one the following browser vendor plugin repositories!

#### Chrome

Install the browser extension from the [Chrome Web Store](https://chrome.google.com/webstore/detail/nonnndpheabjkjjnjondfcfgcmhfbckb/publish-accepted?authuser=0&hl=en-US)!

#### Firefox

Install the browser extension from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/togglific/)!

#### Edge

~~Install the browser extension from the [Microsoft Store](https://www.microsoft.com/en-us/store/collections/edgeextensions/pc)!~~

Coming soon!

---

## Script Options

The stand-alone script accepts options when using the script on your page or website.

Options are sent in the format of an object literal to the `Togglific` instance as the first parameter.

There are a few things you can set for options, including:

### Custom CSS

If you want to customize, you can pass specific CSS to the `object`. By default, this CSS would be applied to all elements:

```javascript
new Togglific.Togglific(
  {
    css: {
      height: 'auto',
      padding: '10px'
    }
  },
  'toggler'
);
```

### Specify your own selectors

If you want only specific elements to be effected, you can add CSS selectors as a string:

```javascript
new Togglific.Togglific(
  {
    selectors: 'section, .content'
  },
  'toggler'
);
```

Combine both options, _Custom CSS_ and _Specify your own Selectors_ to have specific elements only be effected with the desired CSS.

### Exclude modules

By default, all components are included for toggling animations. If you'd prefer to **remove** a specific component to always allow animations, you can set it to be _excluded_.

For example, to exempt CSS and jQuery:

```javascript
new Togglific.Togglific(
  {
    modules: {
      css: false,
      jquery: false
    }
  },
  'toggler'
);
```

### Default options

To leave everything _as-is_ and accept all components, set the instance `[options]` parameter to `null`.

```javascript
new Togglific.Togglific(null, 'toggler');
```

---

## Contributing

Contributions are always welcome! Please read the [Contributing](CONTRIBUTING.md) document if you'd like to help out with the project.

## License

This project and its source code is licensed under the [MIT](LICENSE.txt) license.
