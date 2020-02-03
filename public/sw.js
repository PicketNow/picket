const cacheName = 'cache-v1'
const resourcesToPrecache = [
  '/',
  '/index.html',
  '/style.css',
  '/Bullhorn192.png',
  '/Bullhorn512.png',
  '/favicon.ico',
  '/bundle.js',
  '/manifest.json'
]

self.addEventListener('install', event => {
  console.log('Service worker install event!')
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(resourcesToPrecache)
    })
  )
  // self.skipWaiting();
})

self.addEventListener('activate', event => {
  console.log('Activate event!')
  // event.waitUntil(
  //   caches.keys().then((keyList) => {
  //     return Promise.all(keyList.map((key) => {
  //       if (key !== cacheName) {
  //         console.log('Removing old cache', key);
  //         return caches.delete(key);
  //       }
  //     }));
  //   })
  // );
  // self.clients.claim();
})

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url)
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request)
    })
  )

  //FROM CODELAB
  // event.respondWith(
  //   fetch(event.request)
  //     .catch(() => {
  //       return caches.open(cacheName)
  //         .then((cache) => {
  //           return cache.match('offline.html');
  //         });
  //     })
  // );
})
