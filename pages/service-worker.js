
export default () =>{

    const cacheName = "Community Management System";
    const staticAssets = ["./", "./_app.js"];
    let self;
    if (self) {
        self.addEventListener("install", event => {
            self.skipWaiting();
            event.waitUntil(
                caches.open(cacheName).then(function(cache) {
                    return cache.addAll(staticAssets);
                })
                );
            });
            
            self.addEventListener("activate", function(e) {
                e.waitUntil(
                    caches.keys().then(function(keyList) {
                        return Promise.all(
                            keyList.map(function(key) {
                                if (key !== cacheName) {
                                    return caches.delete(key);
                                }
          })
          );
        })
        );
        return self.clients.claim();
    });
    
    async function cacheFirst(req) {
        const cacheResponse = await caches.match(req);
        return cacheResponse || fetch(req);
    }
    
    async function networkFirst(req) {
        const cache = await caches.open(cacheName);
        try {
            const res = await fetch(req);
            cache.put(req, res.clone());
            return res;
        } catch (error) {
            return await cache.match(req);
        }
    }
    
    self.addEventListener("fetch", function(event) {
        event.respondWith(
            caches
            .match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
            .catch(function(error) {
                console.log(error);
            })
            .then(function(response) {
                return caches.open(cacheName).then(function(cache) {
                    if (event.request.url.indexOf("test") < 0) {
                        cache.put(event.request.url, response.clone());
                    }
                    return response;
                });
            })
            );
        });
    }
    
}