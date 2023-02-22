const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
'/index.html',
'/asset-manifest.json',
'/static/js/main.chunk.js',
'/static/js/0.chunk.js',
'/static/js/bundle.js',
'/static/css/main.chunk.css',
'/static/media/my-image.jpg',
'/static/media/my-video.mp4',
];

this.addEventListener('install', event => {
event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
        return cache.addAll(urlsToCache);
    })
);
});

this.addEventListener('fetch', event => {
event.respondWith(
    caches.match(event.request)
    .then(response => {
        if (response) {
        return response;
        }
        return fetch(event.request);
    })
);
});
