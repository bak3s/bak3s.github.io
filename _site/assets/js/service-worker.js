                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/index.html","revision":"4e4ad072122832fd318c5bb2eaa0f5d1"},{"url":"/investing/books/learnings-from-the-barefoot-investor/","revision":"3a53a433c0f983e9bf2e80f8d195eee0"},{"url":"/fire/get-started-with-financial-independence/","revision":"1bb5d81f005c0c441de3533663252d22"}];
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

