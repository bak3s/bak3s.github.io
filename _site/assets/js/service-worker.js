                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/index.html","revision":"18426aaa1839b0ceca854cb0cafc2727"},{"url":"/fire/catching-fire-my-journey-to-finanical-independence/","revision":"eb11a3962ab16ce2b15b8d2225402b61"},{"url":"/fire/what-is-the-fire-movement/","revision":"573d8d657c4000a48f66090c2efccc80"},{"url":"/property/the-true-cost-of-fees/","revision":"5d8d539bf955bf43b4d3a7fb9aff7554"},{"url":"/investing/books/learnings-from-the-barefoot-investor/","revision":"458dbd670236851dac0ec594e650ba0e"}];
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

