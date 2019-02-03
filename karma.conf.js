// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-webpack'
    ],
    files: [
      {
        pattern: './test/demo/javascript/togglific.js',
        watched: false,
        served: true,
        included: false,
        nocache: false
      },
      {
        pattern: './src/bundles/bookmarklet/bundle.js',
        watched: false,
        served: true,
        included: false,
        nocache: false
      },
      {
        pattern: './test/demo/**/*.*',
        watched: false,
        served: true,
        included: false,
        nocache: false
      },
      {
        pattern: './src/components/*.component.spec.js',
        watched: true,
        served: true,
        included: true,
        nocache: false
      },
      {
        pattern: './test/assets/init.js',
        watched: false,
        served: true,
        included: false,
        nocache: false
      },
      {
        pattern: './test/index.js',
        watched: true,
        served: true,
        included: true,
        nocache: false
      }
    ],
    exclude: [],
    preprocessors: {
      './src/components/*.component.spec.js': ['webpack'],
      './test/index.js': ['webpack']
    },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    failOnEmptyTestSuite: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [

          // See https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
          '--headless',
          '--disable-gpu',

          // Without a remote debugging port, Google Chrome exits immediately.
          '--remote-debugging-port=9222'
        ]
      }
    }
  });
};
