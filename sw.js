// This is a basic service worker file required to make the site installable.
// It doesn't add offline capabilities yet but satisfies the PWA criteria.

self.addEventListener('install', (event) => {
  console.log('Service worker installing...');
  // You can add caching logic here in the future
});

self.addEventListener('fetch', (event) => {
  // This service worker doesn't intercept fetch requests yet.
  // It just lets the browser handle them as it normally would.
});
