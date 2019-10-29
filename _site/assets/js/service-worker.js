                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/index.html","revision":"0085d0b0eae628a5fb4ffb13b7b58735"},{"url":"/fire/what-is-the-fire-movement/","revision":"c7ec835631443435d44e31358dfd06ee"},{"url":"/fire/catching-fire/","revision":"56455018f16cdfd196a0f89767ca5d1f"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
  prefix: "catching-fire",
  suffix: "v1",
  precache: "precache",
  runtime: "runtime-cache"
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(/\.html$/, workbox.strategies.networkFirst());

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
  /assets\/(img|icons)/,
  workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
  /^https?:\/\/cdn.staticfile.org/,
  workbox.strategies.staleWhileRevalidate()
);

