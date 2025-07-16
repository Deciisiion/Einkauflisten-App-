const CACHE_NAME = "einkauf-v1";
const URLS_TO_CACHE = [
  "index.html",
  "manifest.json",
  "sw.js",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://code.getmdl.io/1.3.0/material.indigo-pink.min.css",
  "https://code.getmdl.io/1.3.0/material.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

console.log("Service Worker wurde installiert");
console.log("Dateien im Cache:", URLS_TO_CACHE);


