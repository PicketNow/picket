const cacheName = 'cache-v1'
const resourcesToPrecache = [
  '/offline.html',
  '/manifest.json',
  '/Bullhorn192.png'
]

self.addEventListener('install', event => {
  console.log('Service worker install event!')
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(resourcesToPrecache)
    })
  )
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  console.log('Activate event!')
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== cacheName) {
            console.log('Removing old cache', key)
            return caches.delete(key)
          }
        })
      )
    })
  )
  self.clients.claim()
})

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url)
  // event.respondWith(
  //   caches.match(event.request).then(cachedResponse => {
  //     return cachedResponse || fetch(event.request)
  //   })
  // )

  if (event.request.mode !== 'navigate') {
    // Not a page navigation, bail.
    return
  }
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.open(cacheName).then(cache => {
        return cache.match('offline.html')
      })
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
