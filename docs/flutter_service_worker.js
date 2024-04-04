'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "25946756efd2df7214fdc2999dfc9a7d",
"favicon%20copy.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "4140e3a490835642fa5af6ddedb40ed6",
"/": "4140e3a490835642fa5af6ddedb40ed6",
"main.dart.js": "b2581f8b239b269a6b45544bf506ba66",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "2b18cc232d0a5a3a714b391922e7aca9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "29381e953a8d05229b2cde8e58c86bbe",
"assets/AssetManifest.json": "e74a1ba8bdbcba211b797f7fba734616",
"assets/NOTICES": "9d44a42909f09f0274cfcbdcbb746f71",
"assets/FontManifest.json": "7a0a665d3cbba7bea9d0134822518119",
"assets/AssetManifest.bin.json": "90d67aebee8649ece2c85d2d97c92a71",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "df0af23f22bcc447c69f94d5a7deb6e3",
"assets/fonts/MaterialIcons-Regular.otf": "d09763fd7526afa651decf1bf9f76958",
"assets/assets/superiority/customer_centric_service.png": "06e4ac75bd6dcaee5c4c186e4d74aac3",
"assets/assets/superiority/exceptional_team_experience.png": "717cc923ae19995a4c3214a26c658126",
"assets/assets/superiority/continuous_innovation_1.png": "dee790daef6c8f68653c19b798ea0d85",
"assets/assets/superiority/continuous_innovation_2.png": "ec999f411b2941dca7590fd854b9e8d9",
"assets/assets/superiority/creative_tech_fusion.png": "cfc08b599df35ce60cb47795da76a631",
"assets/assets/superiority/continuous_innovation_3.png": "37459de7c44cb3c2c6cddb1264e9f8d4",
"assets/assets/profile/xt.png": "3530f04d75c27ef5b29ddff3eb7bf05a",
"assets/assets/profile/panda.png": "ec0b127e8b89afb2133f1d6b15d21a0a",
"assets/assets/profile/cathy.png": "54fd5620697f37234c6ea26cf1b36431",
"assets/assets/profile/edison.png": "00964745756632f42fdb315d0626f677",
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
"assets/assets/portfolio_social_media/gravity_fitness/cover.png": "d57370ed5156e6cd0df1da972f162d5a",
"assets/assets/portfolio_social_media/gravity_fitness/4.png": "d74b95c80c992aa510bd5b118914769e",
"assets/assets/portfolio_social_media/gravity_fitness/2.png": "7cb95cd885eeea1dc81bd1e8af93e851",
"assets/assets/portfolio_social_media/gravity_fitness/3.png": "09cdaee175178225718463976ac6b75b",
"assets/assets/portfolio_social_media/gravity_fitness/1.png": "f93b7d5ffc9ecca88d8289b0da885a75",
"assets/assets/portfolio_social_media/lihuayue/cover.png": "fe6a25861535d5a9dbfc171e66adc9dd",
"assets/assets/portfolio_social_media/lihuayue/2.png": "611e956c5d906216733aed382e14f6d2",
"assets/assets/portfolio_social_media/lihuayue/1.png": "c827a28123aae7f9d7c5e1335cd78b65",
"assets/assets/portfolio_social_media/coliseum_fitness/cover.png": "fa80b4f2465734f0f0c4e2208465dd6e",
"assets/assets/portfolio_social_media/coliseum_fitness/2.png": "539dc3b2d076ed3f64da9c0aad5cda51",
"assets/assets/portfolio_social_media/coliseum_fitness/3.png": "23479dd454aa66d2fd16816cb65026cb",
"assets/assets/portfolio_social_media/coliseum_fitness/1.png": "2705a10533fd096c2d8cd2b39251764e",
"assets/assets/portfolio_social_media/mr_q/cover.png": "969ec9bbb57c2faf462d75a3decfff04",
"assets/assets/portfolio_social_media/mr_q/4.png": "3a5e0d4fcaf2b1fe59f534c66ee8db86",
"assets/assets/portfolio_social_media/mr_q/5.png": "ee001ff75b683b7331e3287f38f2c7e1",
"assets/assets/portfolio_social_media/mr_q/6.png": "453936402b068beed79f5a472f181ec6",
"assets/assets/portfolio_social_media/mr_q/2.png": "d665d610484e21a4f70fa31e57fddfef",
"assets/assets/portfolio_social_media/mr_q/3.png": "7ee0843cde98a76d1aa2efea89498c2d",
"assets/assets/portfolio_social_media/mr_q/1.png": "9f16b41292e705d46ac709c4c4b83415",
"assets/assets/portfolio/weon-project/8.png": "4e913648883b30069f93a85ef5fb79e6",
"assets/assets/portfolio/weon-project/9.png": "1c613ddaf880e2b480139ab958899425",
"assets/assets/portfolio/weon-project/4.png": "b8875ccf110f730a03a97a1f1d7ef53d",
"assets/assets/portfolio/weon-project/5.png": "4ea8f50784cabb6f2e98da6827cb8252",
"assets/assets/portfolio/weon-project/7.png": "7beeb05ddc6066a6be077335829ab5dd",
"assets/assets/portfolio/weon-project/6.png": "9bc6407752379bfbd95049a9182a91b1",
"assets/assets/portfolio/weon-project/2.png": "b830007d47f10d450d07cd29292e363d",
"assets/assets/portfolio/weon-project/3.png": "067ee5a0a0015a0fa8fb0bc2fe3f4fc0",
"assets/assets/portfolio/weon-project/1.png": "d357ee42fb09f886bb106fded24d03ca",
"assets/assets/portfolio/weon-project/profile-pic.png": "9cfcac9960a9d898974068df67779748",
"assets/assets/portfolio/my-transit/my-transit-9.png": "d0cc65566abe38f4263537acd5da5d80",
"assets/assets/portfolio/my-transit/my-transit-8.png": "881f3f132f433ba77e6e143ec9633c5e",
"assets/assets/portfolio/my-transit/my-transit-cover.png": "93daaa442de75e01baeab813cb3ce527",
"assets/assets/portfolio/my-transit/profile.png": "40b95372afdfa11c617155e977f65002",
"assets/assets/portfolio/my-transit/my-transit-5.png": "9208f95b30bb51c64f45f1a728b68f8d",
"assets/assets/portfolio/my-transit/profile.svg": "f90246898dacf3730d092cec23c9933e",
"assets/assets/portfolio/my-transit/my-transit-4.png": "2ad98e016534073eb1cc2ea91d505726",
"assets/assets/portfolio/my-transit/my-transit-6.png": "2433c5fdd161c3436c13febb7f82d052",
"assets/assets/portfolio/my-transit/my-transit-7.png": "a8c322537138efaed5eb0744f40df6e8",
"assets/assets/portfolio/my-transit/my-transit-3.png": "4aef327217f9e2a12455e528ebddf6a9",
"assets/assets/portfolio/my-transit/my-transit-2.png": "89ff2eb05b063ad82bd0e2bed9240dc5",
"assets/assets/portfolio/fisherman/8.png": "16323688ff01bdd1b31c5e863908b0fc",
"assets/assets/portfolio/fisherman/9.png": "5400dbb52a1b04987617ae0a7d69d7cd",
"assets/assets/portfolio/fisherman/14.png": "a6b06481b5294a950a70bc1c218ee4a9",
"assets/assets/portfolio/fisherman/12.png": "043e9043683de36777d91c7653b48a6d",
"assets/assets/portfolio/fisherman/13.png": "552e41ee5b4433c51fe691961f9eaf8c",
"assets/assets/portfolio/fisherman/11.png": "ed6dda530b7035b9e8449544f4bf1bc8",
"assets/assets/portfolio/fisherman/10.png": "d89087a1dcb7cea6942e6e8bab9b6851",
"assets/assets/portfolio/fisherman/4.png": "50929f5c948cc0d4653e51c769c8fc73",
"assets/assets/portfolio/fisherman/5.png": "fcbc0b251f73f89342f341e1802fb77e",
"assets/assets/portfolio/fisherman/7.png": "ee7913901b5f660d76f42a930a1897d1",
"assets/assets/portfolio/fisherman/6.png": "c71a8e16c4128788cac46b1cd970f85a",
"assets/assets/portfolio/fisherman/2.png": "238909721d9badcf3d454901dfd0b41c",
"assets/assets/portfolio/fisherman/3.png": "d223e7f1874bdbfcfc8d8c478349f085",
"assets/assets/portfolio/fisherman/1.png": "ff4ba64b2457d9b891650ad70edab215",
"assets/assets/portfolio/fisherman/profile-pic.png": "58c3af3a40e97a914a173a2355e74023",
"assets/assets/portfolio/meyzer_project/8.png": "355ee00577f03e835773cab5eea955ed",
"assets/assets/portfolio/meyzer_project/9.png": "589f6c3528d2d40b59947796baa93728",
"assets/assets/portfolio/meyzer_project/14.png": "b4edcc85440de393943ce169a4b3cefc",
"assets/assets/portfolio/meyzer_project/12.png": "d989687c74f027ad33bfdaf792251e75",
"assets/assets/portfolio/meyzer_project/13.png": "d33111908e1cbd42aa4d7c45b669bd81",
"assets/assets/portfolio/meyzer_project/11.png": "ce9671d1940af3385615daf39077473f",
"assets/assets/portfolio/meyzer_project/10.png": "f587c5e4dc93aa815b32c3598d6253a6",
"assets/assets/portfolio/meyzer_project/4.png": "6d551354de90831f7f1776c947329beb",
"assets/assets/portfolio/meyzer_project/5.png": "f29066a09726e59bee964a3a39e5e6b2",
"assets/assets/portfolio/meyzer_project/7.png": "b148c761ca07a8bacb08741235dc3b66",
"assets/assets/portfolio/meyzer_project/6.png": "fd11cbef92d90137c3d06ba15339024b",
"assets/assets/portfolio/meyzer_project/2.png": "f2111765a8c523665d503340bef990e3",
"assets/assets/portfolio/meyzer_project/3.png": "1451f03153a50cdd502d552519997674",
"assets/assets/portfolio/meyzer_project/1.png": "06f22921d94d980719db712fa5eea195",
"assets/assets/portfolio/meyzer_project/profile-pic.png": "927347e28f4ce83abb02e6f7f3576ad3",
"assets/assets/portfolio/metime/cover.png": "c94f71759055f82394cc5c3a6ec35b93",
"assets/assets/portfolio/metime/4.png": "658cb0143ae7e9eb94911db5a309ca0b",
"assets/assets/portfolio/metime/5.png": "c7db39986e421a4af8c3b10625f2e50e",
"assets/assets/portfolio/metime/7.png": "c94f71759055f82394cc5c3a6ec35b93",
"assets/assets/portfolio/metime/6.png": "af42ec30769f1e2092564e633c766ebf",
"assets/assets/portfolio/metime/2.png": "003d2e8ec4ec0e1d8e78e27eea3b078c",
"assets/assets/portfolio/metime/3.png": "504b400f2a1f74aa786fea0d0a1fffce",
"assets/assets/portfolio/metime/1.png": "70bb53990e160e7e280c5e8db159757a",
"assets/assets/portfolio/MTX/8.png": "caf3e9258691cb06756bdd1ce8b755d8",
"assets/assets/portfolio/MTX/9.png": "3f55f58a15dc606de9ed65a535da9d36",
"assets/assets/portfolio/MTX/12.png": "e577527562ed028a88a686b4bc390089",
"assets/assets/portfolio/MTX/11.png": "6667ebe69c63051a35af486c734871e4",
"assets/assets/portfolio/MTX/10.png": "4a01afecdfd57d7b2536bb627593965e",
"assets/assets/portfolio/MTX/4.png": "0f58c40cebfcbbf8d66fca5b967ea2ec",
"assets/assets/portfolio/MTX/5.png": "786458dde2a548157d547d6e61919ec7",
"assets/assets/portfolio/MTX/7.png": "7aedee001eb2edaef45710506c5bc284",
"assets/assets/portfolio/MTX/6.png": "648ccb3a110445f25f15d564e6d7a633",
"assets/assets/portfolio/MTX/2.png": "a1e803da1a41c67a0f5d966303ffaeb6",
"assets/assets/portfolio/MTX/3.png": "4875fd56253c3640aaea7c6823d1fcb7",
"assets/assets/portfolio/MTX/1.png": "89a0c82d09f0fee1663134ebaea0fe87",
"assets/assets/portfolio/MTX/profile-pic.png": "b05a79cae0ae4b1f0053977abda63d92",
"assets/assets/portfolio/xinli/8.png": "0519ed85b2a6a1bab8b86a67dfaf6a79",
"assets/assets/portfolio/xinli/9.png": "626c057768a45ce1af1d67d9683899be",
"assets/assets/portfolio/xinli/14.png": "43174c6862c3495d86e77c469ccd8ccc",
"assets/assets/portfolio/xinli/15.png": "6c08c70102c98df76c0b050f2209f3c4",
"assets/assets/portfolio/xinli/17.png": "1a70fedc398ea94a6d5658834d6c9dc1",
"assets/assets/portfolio/xinli/16.png": "8cc66b9299e3d429d143fbe512be4a7a",
"assets/assets/portfolio/xinli/12.png": "a13115a912fcd72f2dae61c2db1e7bcc",
"assets/assets/portfolio/xinli/13.png": "ad600eab5928be2bf0ba036ddd369f6d",
"assets/assets/portfolio/xinli/11.png": "a2105b4a4289eb6dc7b6d5c81f6eb53c",
"assets/assets/portfolio/xinli/10.png": "787c2b6c7b7fbbfe5ae7acbbcdb3e3aa",
"assets/assets/portfolio/xinli/4.png": "c652ba8e2322ab67b4dcc79965ec3071",
"assets/assets/portfolio/xinli/5.png": "d7780f3b98e417e29819bc9aa916ba84",
"assets/assets/portfolio/xinli/7.png": "d49ce0007b4acfe2c6f6f0fad633261c",
"assets/assets/portfolio/xinli/6.png": "706bf2d569012af1aab9a65da8c8d343",
"assets/assets/portfolio/xinli/2.png": "7651d81c2f8374ebe17a38af67e7bbc5",
"assets/assets/portfolio/xinli/3.png": "189b6dce0b6e912c77471136234ce9e3",
"assets/assets/portfolio/xinli/1.png": "7501d13cdb320458925e7ec714717c92",
"assets/assets/portfolio/xinli/profile-pic.png": "4586fee41cc3f9a33d6a22f67c5678df",
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
