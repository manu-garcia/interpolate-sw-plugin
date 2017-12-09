/**
 * This is a dummy Service Worker produced by interpolate-sw-plugin Webpack plugin, it is
 * meant to replace your own Service Worker.
 * 
 * Deactivate "deactivateSW" option in your InterPolateSWPlugin Webpack plugin configuration 
 * to stop this plugin replacing your very own Service Worker.
 * 
 * This feature is useful while developing other areas of your application, where having
 * a service worker would not be desired.
 * 
 * // To deactivate your own Service Worker
 * new InterpolateSWPlugin({
 *  ...
 *  // This config will replace your own Service Worker with a dummy one.
 *  deactivateSW: true,
 * }),
 * 
 */

/**
 * Dummy installation of the Service Worker 
 */
self.addEventListener('install', event => {});

/**
 * Dummy activation of the Service Worker 
 */
self.addEventListener('activate', event => {});
