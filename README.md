<p align="center">
  <img src="https://img.shields.io/github/issues/do-web/css-cleanup-webpack-plugin.svg" alt="Build Status">
    <img src="https://img.shields.io/github/license/do-web/css-cleanup-webpack-plugin.svg" alt="license">
    <img src="https://img.shields.io/npm/dw/css-cleanup-webpack-plugin.svg" alt="Downloads in week">
    <img src="https://img.shields.io/npm/v/css-cleanup-webpack-plugin.svg" alt="npm version">
</p>


# css-cleanup-webpack-plugin

Remove unused css and duplicated css rules. 
It detects all unused css rules by looking into all assets on the webpack output dir. 

## Requirements

This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.

## Getting Started

To begin, you'll need to install `css-cleanup-webpack-plugin`:

```console
$ npm install css-cleanup-webpack-plugin rm-unused-css --save-dev
```

Then add the plugin to your `webpack` config. For example:

**webpack.config.js**

```js
const CssCleanupPlugin = require('css-cleanup-webpack-plugin');

module.exports = {
  plugins: [
    new CssCleanupPlugin()
  ]
}
```

And run `webpack` via your preferred method.

## Donate

[![Donate with Bitcoin](https://en.cryptobadges.io/badge/big/1AvuyxxtGufTwpyRCKw74FQXVtPirEnwP6)](https://en.cryptobadges.io/donate/1AvuyxxtGufTwpyRCKw74FQXVtPirEnwP6)
