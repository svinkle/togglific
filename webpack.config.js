const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

const config = {

  // Stand-alone script files
  standAlone: {
    entry: './src/stand-alone/togglific.js',
    output: {
      path: './src/bundles/stand-alone',
      filename: 'bundle.js'
    }
  },

  // Bookmarklet script files
  bookmarklet: {
    entry: './src/bookmarklet/togglific.js',
    output: {
      path: './src/bundles/bookmarklet',
      filename: 'bundle.js'
    }
  },

  // Bookmarklet demo file -- replaces " with &quot; for href attribute inclusion
  bookmarkletDemo: {
    entry: './src/bookmarklet/togglific.js',
    output: {
      path: './src/bundles/bookmarklet',
      filename: 'bundle-demo.js'
    },
    plugins: [
      new WebpackShellPlugin({
        onBuildExit: ['npm run bookmarklet-demo']
      })
    ]
  },

  // Browser extension files
  browserExtension: {
    entry: './src/browser-extension/togglific.js',
    output: {
      path: './src/bundles/browser-extension',
      filename: 'bundle.js'
    }
  },

  // `npm` package file
  npmPackage: {
    entry: './src/stand-alone/togglific.js',
    output: {
      path: './dist/npm-package',
      filename: 'index.js'
    }
  },

  // Brochure
  brochure: {
    entry: [
      '@babel/polyfill',
      './brochure/javascript/polyfills/matchMedia.js',
      './brochure/javascript/polyfills/classList.js',
      './brochure/javascript/vendor/head.js',
      './brochure/javascript/polyfills/raf.js',
      './brochure/javascript/brochure.js'
    ],
    output: {
      path: './brochure/javascript',
      filename: 'brochure.min.js'
    }
  },

  // Webpack modules config
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = [

  // Stand-alone script
  {
    entry: config.standAlone.entry,
    output: {
      path: path.resolve(__dirname, config.standAlone.output.path),
      filename: config.standAlone.output.filename,
      library: 'Togglific'
    },
    module: config.module
  },

  // Bookmarklet
  {
    entry: config.bookmarklet.entry,
    output: {
      path: path.resolve(__dirname, config.bookmarklet.output.path),
      filename: config.bookmarklet.output.filename
    },
    module: config.module
  },

  // Bookmarklet demo
  {
    entry: config.bookmarkletDemo.entry,
    output: {
      path: path.resolve(__dirname, config.bookmarkletDemo.output.path),
      filename: config.bookmarkletDemo.output.filename
    },
    module: config.module,
    plugins: config.bookmarkletDemo.plugins
  },

  // Browser extension
  {
    entry: config.browserExtension.entry,
    output: {
      path: path.resolve(__dirname, config.browserExtension.output.path),
      filename: config.browserExtension.output.filename
    },
    module: config.module
  },

  // `npm` package`
  {
    entry: config.npmPackage.entry,
    output: {
      path: path.resolve(__dirname, config.npmPackage.output.path),
      filename: config.npmPackage.output.filename,
      libraryTarget: 'commonjs2'
    },
    module: config.module
  },

  // Brochure
  {
    entry: config.brochure.entry,
    output: {
      path: path.resolve(__dirname, config.brochure.output.path),
      filename: config.brochure.output.filename
    },
    module: config.module
  }
];
