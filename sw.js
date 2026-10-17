/* 天天双拼 V13.3 音效版 | 官方站点托管 + Safari 主屏幕 App + 断网可用 */
const CACHE_PREFIX = 'tiantian-shuangpin-';
const CACHE_NAME = 'tiantian-shuangpin-v13-3-sound-20261017-v1';
const CORE = [
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];
const BASE = new URL('./', self.registration.scope).href;
const INDEX = new URL('./index.html', self.registration.scope).href;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CORE);
    const page = await cache.match(INDEX);
    if (page) await cache.put(BASE, page.clone());
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME)
      .map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.href.startsWith(BASE)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (req.mode === 'navigate') {
      try {
        const response = await fetch(req);
        if (response.ok) {
          // Preserve a new version from the server for later offline use.
          try {
            await cache.put(req, response.clone());
            if (url.pathname.endsWith('/') || url.pathname.endsWith('/index.html')) {
              await cache.put(INDEX, response.clone());
              await cache.put(BASE, response.clone());
            }
          } catch (_) { /* private browsing / storage quota: online still works */ }
        }
        return response;
      } catch (_) {
        return await cache.match(req, {ignoreSearch:true})
          || await cache.match(INDEX)
          || await cache.match(BASE)
          || new Response('当前离线缓存不可用，请联网重新打开天天双拼。',
              {status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
      }
    }
    const hit = await cache.match(req, {ignoreSearch:true});
    if (hit) return hit;
    try { return await fetch(req); }
    catch (_) { return new Response('离线文件未缓存', {status:503}); }
  })());
});
