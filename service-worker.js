/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "58bbe036e8ade66c15d931f8289b093a"
  },
  {
    "url": "assets/css/0.styles.4ef17357.css",
    "revision": "51aa1df1ba8b894f23c51018f435cb12"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a7fac986.js",
    "revision": "7d72ba66dbf699f42e30f4eecba8e72f"
  },
  {
    "url": "assets/js/2.5ff31e10.js",
    "revision": "3bcf52c0929fd17311253e6e8d0f5601"
  },
  {
    "url": "assets/js/app.f9c5be0f.js",
    "revision": "25d41e53c55616ef8d0bca6628efce3f"
  },
  {
    "url": "index.html",
    "revision": "d74d816050be47e5a5d294ce3d636b85"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
