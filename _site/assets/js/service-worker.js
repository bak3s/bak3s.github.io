                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/index.html","revision":"e5c062b7d6611cfd869e4ef0e1d23e06"},{"url":"/investing/books/learnings-from-the-barefoot-investor/","revision":"3a53a433c0f983e9bf2e80f8d195eee0"},{"url":"/investing/trading/australian-trading-platforms/","revision":"4373db8e62b5faa4a51b21de2dd8e85f"},{"url":"/investing/micro-investment/australian-micro-investment-apps/","revision":"8937f5750ef68096bd5a0bfea61f465b"},{"url":"/fire/get-started-with-financial-independence/","revision":"179ccb9ffad0a6dae5640c0b81fec5b0"}];
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

