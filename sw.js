// Lets the installed receiver open with no connection. Every request goes to
// the network first, so a newly published index.html shows up straight away;
// the cache only answers when the network can't.
const CACHE = "qrpack-receiver";
const PRECACHE = [
  "./",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png",
  "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js", // the decoder iPhones use
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok || response.type === "opaque") {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(async () =>
        (await caches.match(request, { ignoreSearch: true })) ||
        (request.mode === "navigate" ? caches.match("./") : Response.error())
      )
  );
});
