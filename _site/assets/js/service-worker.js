                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/index.html","revision":"a22edd2e57f4106009e442af6c38a28b"},{"url":"/fire/what-is-the-fire-movement/","revision":"c7ec835631443435d44e31358dfd06ee"},{"url":"/fire/catching-fire/","revision":"73012668c887bc5f2b6ed203781c417c"}];
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

