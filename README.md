# css-cleanup-webpack-plugin

Remove unused css and duplicated css rules. 
It detects all unused css rules by looking into all assets on the webpack output dir. 

## Requirements

This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.

## Getting Started

To begin, you'll need to install `css-cleanup-webpack-plugin`:

```console
$ npm install css-cleanup-webpack-plugin --save-dev
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
