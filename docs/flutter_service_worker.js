'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "eb66c9805ce60f5af3c1b7f75bce516d",
"favicon%20copy.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "85e67d915cfe6bc085ecf91b369194c0",
"/": "85e67d915cfe6bc085ecf91b369194c0",
"main.dart.js": "cce138e5264f62195b1ba2fd99e1e765",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "2b18cc232d0a5a3a714b391922e7aca9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4e8a1c8488b07565b81c12f206d6d377",
"assets/AssetManifest.json": "8cc9876758a9a343eb3c5f6a61128016",
"assets/NOTICES": "0e444fc41ca853da1d8bfbea9dfe1aa1",
"assets/FontManifest.json": "7a0a665d3cbba7bea9d0134822518119",
"assets/AssetManifest.bin.json": "44f17e931e9c037c3addeb4152709325",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a942841f29395921a0b7e6a3ff244d17",
"assets/fonts/MaterialIcons-Regular.otf": "7649a0fd5eff341f39037ffb31bb6add",
"assets/assets/superiority/customer_centric_service.png": "06e4ac75bd6dcaee5c4c186e4d74aac3",
"assets/assets/superiority/exceptional_team_experience.png": "717cc923ae19995a4c3214a26c658126",
"assets/assets/superiority/continuous_innovation_1.png": "dee790daef6c8f68653c19b798ea0d85",
"assets/assets/superiority/continuous_innovation_2.png": "ec999f411b2941dca7590fd854b9e8d9",
"assets/assets/superiority/creative_tech_fusion.png": "cfc08b599df35ce60cb47795da76a631",
"assets/assets/superiority/continuous_innovation_3.png": "37459de7c44cb3c2c6cddb1264e9f8d4",
"assets/assets/profile/xt.png": "7701610406ffe20827e1a06b6740c670",
"assets/assets/profile/panda.png": "dab9cfc9d795f1637b8b11588e34ef8d",
"assets/assets/profile/cathy.png": "5381d91519eda5833273f75e9698f171",
"assets/assets/profile/edison.png": "6d5b526dff486e19e6ed57edb0cc24e9",
"assets/assets/trademarks/dc_intersect.png": "7f76aaafaccef481a6ef94f739b067e7",
"assets/assets/trademarks/dc_half_vert.png": "6d53b9e1ef116db75496438ff5ef75ff",
"assets/assets/trademarks/dc_half_mobile.png": "35cb14a48165616b129afabedb205c16",
"assets/assets/trademarks/dc_circle.png": "5ef53045819f58df0abfc774c5ef8c22",
"assets/assets/trademarks/dc_rect.png": "1a977af1aa6b134ea145b4e4d1cd2412",
"assets/assets/trademarks/dc_rect_vert.png": "8d790c78fa72b1a2b2769366ee6c3f2e",
"assets/assets/trademarks/dc_intersect_vert.png": "4efb577e860bf467488663edd39207a8",
"assets/assets/trademarks/favicon.png": "2b18cc232d0a5a3a714b391922e7aca9",
"assets/assets/trademarks/dc_logo.svg": "6ad8c1c53274d345abdb3f31bd2890f6",
"assets/assets/trademarks/dc_rect_mobile.png": "b4e4f748e4171b12ab6f308eb6492879",
"assets/assets/trademarks/dc_logo.png": "2b18cc232d0a5a3a714b391922e7aca9",
"assets/assets/trademarks/dc_half.png": "d8e9c29da1eaf3ca9fc8a266cca0e8c0",
"assets/assets/portfolio/my-transit/my-transit-9.png": "d0cc65566abe38f4263537acd5da5d80",
"assets/assets/portfolio/my-transit/my-transit-8.png": "881f3f132f433ba77e6e143ec9633c5e",
"assets/assets/portfolio/my-transit/profile.png": "40b95372afdfa11c617155e977f65002",
"assets/assets/portfolio/my-transit/my-transit-5.png": "9208f95b30bb51c64f45f1a728b68f8d",
"assets/assets/portfolio/my-transit/my-transit-4.png": "2ad98e016534073eb1cc2ea91d505726",
"assets/assets/portfolio/my-transit/my-transit-6.png": "2433c5fdd161c3436c13febb7f82d052",
"assets/assets/portfolio/my-transit/my-transit-7.png": "a8c322537138efaed5eb0744f40df6e8",
"assets/assets/portfolio/my-transit/my-transit-3.png": "4aef327217f9e2a12455e528ebddf6a9",
"assets/assets/portfolio/my-transit/my-transit-2.png": "89ff2eb05b063ad82bd0e2bed9240dc5",
"assets/assets/socials/email.png": "d30b659e81539aef656445c0d7ee70d9",
"assets/assets/socials/fb.png": "4d1159e046d1fc2ef43517e83aaa1a34",
"assets/assets/socials/github.png": "d5190c54307c15f0447544a14803c031",
"assets/assets/socials/behance.png": "2cd459262d695d1fc86bb1eb3748c797",
"assets/assets/socials/insta.png": "121f4bd1e086d1dd6976a71e02720587",
"assets/assets/socials/linked.png": "453b1c2ab9da460d024c6f2bdafdf3ee",
"assets/assets/socials/whatsapp.png": "d4dd9e335fffab9c4b839444bb749b17",
"assets/assets/socials/in_touch.png": "fef432a04f34dc5ec3abf88f876109d6",
"assets/assets/fonts/PublicSans-Black.ttf": "a04f9ce199c6333d049611e778b72510",
"assets/assets/fonts/PublicSans-Italic.ttf": "58428200e727a760edc8f22b90d5074d",
"assets/assets/fonts/PublicSans-ExtraBoldItalic.ttf": "7c84bbc688e4f51f032d3d3e6f3e35f4",
"assets/assets/fonts/PublicSans-MediumItalic.ttf": "fead8f38004d46d03b2a5d21cb84095a",
"assets/assets/fonts/PublicSans-Regular.ttf": "9c75b9011cf22587c803668ff3121063",
"assets/assets/fonts/PublicSans-ExtraBold.ttf": "80394553658c439d786b69831d18a97d",
"assets/assets/fonts/PublicSans-Bold.ttf": "e9cdfc136f74d9e0887b384de2ce731e",
"assets/assets/fonts/PublicSans-SemiBold.ttf": "1ffe3d7415297c90eb23078280014ed6",
"assets/assets/fonts/PublicSans-BlackItalic.ttf": "137e060a6f80594b60082dc010ee3efd",
"assets/assets/fonts/PublicSans-Thin.ttf": "2f448be216e61853d1b592bda1ccc1ca",
"assets/assets/fonts/PublicSans-SemiBoldItalic.ttf": "fb0429b20d1eb47c16054e0b81769c4e",
"assets/assets/fonts/PublicSans-ExtraLightItalic.ttf": "a0a7605ca69cc6d16532140b8fe3772b",
"assets/assets/fonts/PublicSans-Medium.ttf": "d82e7bfdd8972c0ac10760699123ab2e",
"assets/assets/fonts/PublicSans-BoldItalic.ttf": "87bcbfa707578f4106f08b87e7f201fd",
"assets/assets/fonts/PublicSans-ThinItalic.ttf": "57b2543d4f622cfb461414eaa7d10692",
"assets/assets/fonts/PublicSans-ExtraLight.ttf": "1a2a86e82fa816aad56caef27da36753",
"assets/assets/fonts/PublicSans-Light.ttf": "9be6bd6f1023a845a708816ef6510e48",
"assets/assets/fonts/PublicSans-LightItalic.ttf": "0c467883ec3b40082796f2d8ddf6ad56",
"assets/assets/process/process_connect.png": "9d37d40cc8d5e560e9e4b5f722086b45",
"assets/assets/process/process_deposit.png": "8c1c42a906e3ed247c64db9455b228f9",
"assets/assets/process/process_operating.png": "a6b3ca17c736c911b1a804c277d9df55",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
