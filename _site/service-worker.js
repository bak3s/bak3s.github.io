importScripts("/assets/js/workbox-v5.0.0.alpha1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v5.0.0.alpha1"});

self.__precacheManifest = [{"url":"/index.html","revision":"6096567bc3a050f904a918b34e27c87c"},{"url":"/fire/what-is-the-fire-movement/","revision":"c7ec835631443435d44e31358dfd06ee"},{"url":"/fire/catching-fire/","revision":"ed8d8417fdf5173adabcdfa2061c7381"}];

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'dans-gems', // use your app's name
    suffix: 'v1.0',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.NetworkFirst()
);

// use `networkFirst` strategy for css and js
workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.NetworkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    new workbox.strategies.CacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
	new workbox.strategies.StaleWhileRevalidate()
);
