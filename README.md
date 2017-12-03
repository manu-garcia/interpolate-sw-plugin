# interpolate-sw-plugin

[![NPM version](https://img.shields.io/npm/v/interpolate-sw-plugin.svg?style=flat)](https://npmjs.com/package/interpolate-sw-plugin) [![NPM downloads](https://img.shields.io/npm/dm/interpolate-sw-plugin.svg?style=flat)](https://npmjs.com/package/interpolate-sw-plugin) [![Build Status](https://travis-ci.org/manu-garcia/interpolate-sw-plugin.svg?branch=master)](https://travis-ci.org/manu-garcia/interpolate-sw-plugin)

InterpolateSWPlugin is a webpack plugin that will replace, in your own implementation of a service worker, an auto generated cache version string and a list of webpack compiled assets for pre-cache purposes.

Notes:
 
  - When developing with webpack dev server, the file will be watched for changes.
  - When building assets, the file will be interpolated and copied to the destination folder configured in your webpack config.

## Install

```bash
yarn add interpolate-sw-plugin --dev
```

## Usage

"%SW_CACHE_VERSION%": An automatically generated version string for your cache. Use "%SW_CACHE_VERSION%" variable in your service worker. Please note the double quotes around "%SW_CACHE_VERSION%":

```js    
  caches.open('cache-name-v' + '"%SW_CACHE_VERSION%"') ...
```
"%SW_ASSET_FILES%": A coma-separated list of assets generated by webpack for pre-cache purposes. Use "%SW_ASSET_FILES%" variable in your service worker. Please note the double quotes around "%SW_ASSET_FILES%":

```js
  cache.addAll(["%SW_ASSET_FILES%"]);
```

Call the plugin from your webpack configuration:

```js
module.exports = {  
  plugins: [
    new InterpolateSWPlugin({
      // Your source sw template full path. Not opinionated service worker implementation having variables to be replaced.
      from: path.resolve(__dirname, './public/sw.js'),
      // Destination file inside your build directory, after replacing variables.
      to: 'sw.js',
      // Activate or deactivate replacement of the version variable %SW_CACHE_VERSION%
      replaceCacheVersion: true | false,
      // Activate or deactivate replacement of the files variable %SW_ASSET_FILES%
      replaceAssetFiles: true | false,
    }),
  ]
}
```
