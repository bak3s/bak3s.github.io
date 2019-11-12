                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/index.html","revision":"1a1dc90a3a9581d87bb7784401ccee03"},{"url":"/fire/catching-fire-my-journey-to-finanical-independence/","revision":"01c2bfcb191b3f82650cdf469d83539b"},{"url":"/investing/books/learnings-from-the-barefoot-investor/","revision":"5fe96c4a94d4255c71b44d21dbc53f43"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
  prefix: 'catching-fire',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime-cache'
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

