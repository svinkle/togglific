# Contributing

Contributions are always welcome! Please read below on how to setup your local environment for development and testing.

## Before sending a PR…

Before you start any work or send a Pull Request, please [open an issue](https://github.com/svinkle/togglific/issues) to discuss the solution/addition/fix with the project maintainers. This way everyone's on the same page when it comes to PR review time; there should be no surprises.

By the time the work is done and the PR is sent, the discussion will be focused on the code, not the idea behind the code.

## Tech stack overview

- Source code is written in ES6 syntax.
- ES6 is converted to ES5 for greater browser support via [Babel](https://babeljs.io/).
- Source code is in `src/app`.
- Each product shares code from the `src/app/components` directory.
- Products are bundled together via [webpack](https://webpack.github.io/).
- Bundles are built and set in place in their respective `dist/` directories via `npm` scripts.
- Browser extension `zip` file is generated automatically.
- Tests are run via [Karma](https://karma-runner.github.io) and [Jasmine](https://jasmine.github.io/), packed via [webpack](https://webpack.github.io/), compiled via [Babel](https://babeljs.io/), and run in [Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome).

## Local setup

1. Clone the repo: `git clone git@github.com:svinkle/togglific .git`
2. `cd togglific/`
3. Run `npm install` to get all the dependancies
4. Run `npm start` and start coding!

## Useful commands

- `npm start`: Use when developing. This runs `webpack -d` in debug mode which outputs more information within each bundle. This also watches for changes in any of the files. When changes are found, the bundle is rebuilt.

- `npm run build`: Builds each of the products and places their respective scripts and related files within the `dist/` directory, ready for deployment. Bundle scripts are minimized via `webpack -p` flag.

- `npm test`: Runs the test suite.

## Tests

Run `npm test` to test from the command line.

Tests should be run before committing code, but will also be automatically run on `git push` via [Travis](https://travis-ci.org).

## Browser extension testing

Browser extensions can be loaded from the local file system. This is useful for testing changes before deploying to browser vendor add-on repositories.

### Chrome

1. Go to `chrome://extensions/`
2. ✅ Developer mode
3. Click "Load unpacked extension…"
4. Navigate to the `dist/browser-extension` directory and click "Select"
5. Test!

### Firefox

1. Go to `about:debugging`
2. ✅ Enable add-on debugging
3. Click "Load Temporary Add-on"
4. Navigate to the `dist/browser-extension/manifest.json` file and click "Open"
5. Test!

### Edge

1. Go to `about:flags`
2. ✅ Enable extension developer features
3. Click "More (…)"
4. Click "Extensions"
5. Click "Load extension"
6. Navigate to the `dist/browser-extension/` directory and click "Select Folder"
7. Test!
