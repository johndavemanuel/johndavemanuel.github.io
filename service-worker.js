var staticCacheName = 'cacheCoreV9';
var filesToCache = [
  '/',
	'index.html',
	'register-service-worker.js',
	'dist/css/main.min.css',
	'dist/css/theme-light.css',
	'dist/css/theme-dark.css',
	'dist/js/main.min.js',
	'dist/images/profile/avatar.png'
];

// Start the service worker and cache all of the app's shell content
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

// Check if server worker is activated
self.addEventListener('activate', function (e) {
  console.log('Service worker has been activate.');
  // Delete old static cache
  e.waitUntil(
    caches.keys().then(cacheNames => {
      console.log(cacheNames);
      return Promise.all(cacheNames
        .filter(cacheName => cacheName !== staticCacheName)
        .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});