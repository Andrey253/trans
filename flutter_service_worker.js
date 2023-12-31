'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5c8c2d8d0d48847d5c4f9ff574d099d6",
".git/config": "eefa3fc9345434565f7727101b2fc82c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9264f477b2401e220bd9966fc90805e1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "096ea94c7689b327d5533c64021e5314",
".git/logs/refs/heads/main": "cd2afe71d49be474c8020270b0c006d8",
".git/logs/refs/remotes/origin/main": "3c1dcdf65dbc64b75b0e45ebb973846a",
".git/objects/00/f0e7709c04bf7983b1aa1c1aa8d1794a3520e9": "3d4fb3c9c4e3e4fccb4576296c36dddc",
".git/objects/01/72e0d2cc68670f128b51a366c0c819e38f82a3": "8de227b32c919f5e8c758caf898a3545",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/03/136bbde7874f173207832887c6624344603770": "e7cfa01e7b7124f02f0d45556a41a8f7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/84ffc358409525253ac1c92677d9a4eaf001d8": "0941c4fb0e9af6060a1aa381f41d6a42",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/15/73aa3f2ce883bd25552758395a69ff470560ad": "cc488c340050cc7830c751a911204992",
".git/objects/1b/40a19855ce4ef58ab4d322ac1548432f10519c": "377a15c2c119a5344ba48eb828e8be65",
".git/objects/1c/773b46d61a8623e7c77f11f5c261fa7668ff2e": "dbfeb7ccf5a74aab7530fb90e41f596f",
".git/objects/25/d50ca155fd22783f476df3bf059c1404a5268e": "cffcfa845ec02d09f8322a59721117d4",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/252bfca6155275029379d1f53258295bbd77f8": "9f7804306f6c59b9c3afad24a02af1d9",
".git/objects/38/333fdd3a28571572f19b31bd63e99a9b4539e7": "303cf29c94dae0969dda1f076e15917d",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3e/d91be5cbf98b772776ce674391b0b830d7e27a": "a8a8545ce98e07563b9f0b43d7814973",
".git/objects/41/bf672870a20ae516c36fbe70fceddda8c79f31": "bc9394629e66f3af9e7b58b7bcf2e9e5",
".git/objects/42/238d8c4b87608a3cbde56184f550330482394e": "61f9db71742cd7c62e61f31c9de73ec3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/786d682d5b61eabb68eec7922d08e6e106ac7e": "2641210b5d4fb7d0a5ec31772248d9d2",
".git/objects/4b/036fa0a76a7e9f3801d9a1c669124616b41998": "fe033273d62895b6df102c147709d6c9",
".git/objects/4c/6006a1371d0fbff97b8169ea2eb379eda57089": "e18acab037920a24d75075d933ef4d7e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/380b5c5947a8edbdfb36e447f9d84d3aba05cd": "e0655f9b46c2cd1cd5f7378e05aadfe6",
".git/objects/5b/279040fcc90f1cb62cc7fed62e86b26bbcb578": "88c421ef852fd3c90ecd603e0f0a74e9",
".git/objects/64/41b37ebde0d9c41f88ef3eab2ee24f4cc7c04e": "df8bf1c7ead1982ec78d2a611921aece",
".git/objects/64/b14fb6f864addf054a531fb872cc96b5f37459": "b17a639808756a58bcafafc127d078f8",
".git/objects/72/37355fb23cf68117c2a2a27c64251d0ff5ca76": "b41a506cce4c697f1d6c65c83c87140a",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/7d/1913831b7d642e066df215733f2b0578f9e6fa": "7d984ac43307b9a14d61d5e3c01e04bb",
".git/objects/7e/31d9124863bae6dde012f9b4e9507e5eca838e": "c18ef8c8da49e98423feeb779379e2d6",
".git/objects/80/24d3ec3b66e4e48eabdfe17288c5dcbe45c183": "2d4e49be3d3319022eb2b13656931e7b",
".git/objects/81/38d486082e8dc01d4800f9519a2992fdfa3ebc": "527939201daca980cbc3247c66b65480",
".git/objects/81/609fa1c95f2ecdb2cab333baabd8c703979aa4": "43ef07afd6827033d4af5a270ec4ac7e",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/868d1ec047528c8b719f74721681b9ec7e0b19": "3000afa58167d5e30ce00057e3efa15d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6f2a67a6e51efd194b4d8aa42c2df594173585": "3a96c6efb8e583b6bd0927e3de2ae371",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8e/5b4c729fa4ba0dd3e293c2392a853f37a936ee": "90853a981f4f6a774f57184285bfca4c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/2ec268e8ae915879fb8ec97f1bac4747660bb5": "985f036fefd447cd7406b76c96b7cf9c",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b6/b2b1c9ac5b10f8d40e205f0ca03b6e6c6543d0": "56cd3e1c18d3879a529e725110fb5d79",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/227a70383ca3a007455dcbc020b0861834deab": "7b6442cb8b69bdc25dbbd98179ccf7fa",
".git/objects/c7/2acc3ce4105378437c02152609a9a8aab9ef22": "9f98551561eeeba0a3f0a21c2595c540",
".git/objects/cd/0c576d59784f3c112d7aaf4340ac1c85f3473e": "c5eb258691ab3cca85346dfafa2c0c88",
".git/objects/cd/3ccc210c131ab310751cbed7d5cd862f0e1556": "75d81e8be3ca6c846bf53a3420a8b9d4",
".git/objects/d0/70c0cb4aefff41033344ac44344ca79de28359": "bf7581798f71fa17da068c3ba236737a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/7faf603a69f32fcdc5f5f486daa1f141055678": "bb5a7ef360fc4e65b9ab96597a2bffd5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/dc/fc504df0a8a2f13b8df1bc17f34afa3ec22d40": "6a26d406fe860857f3623167448c24eb",
".git/objects/dd/c7e16f898ab4f735ececaaa2a1eb6371ffc2f7": "a1c5b8ca0185df0c880e949c76f59c4c",
".git/objects/df/0de0289ba46589a5c21dd8014d0f63a20aef27": "fa11b4952ab5a13aae3a5a2463d99452",
".git/objects/df/60f8ba232b7c1f1bfed4c5cd66927f377de089": "cbf0a0a9eaa9112abfd9a51eea442de3",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e4/59ca1202a97dccdf914091151c97f1ef5d9172": "33fcfe53c53895053c165979b4672d13",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/fe277538dca46638f226f7c393544cf7a03698": "5073c8a64f56a6eabbf22bdad91ea2cb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/bf1c1f46086ac118d0971fc1607e896d5df443": "905020a0f82bdc97f0afb96f16fdfeca",
".git/objects/f9/370c108f5facb2e338e35116d65cb8a501bdb0": "e0ad32602862fd6f48e1b344a0226c60",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/1828ea8e06afad960fb4b9b7ec0bd367d2ef30": "77558103a80d8160dc8b39e2348a0077",
".git/refs/heads/main": "17afdff09dfeafd64d5cf7485f394fb6",
".git/refs/remotes/origin/main": "17afdff09dfeafd64d5cf7485f394fb6",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a68a202610592cb592f997676af1252c",
"/": "a68a202610592cb592f997676af1252c",
"main.dart.js": "af1d317817156cd1824aadede00a7528",
"manifest.json": "d446caf18c37083825cd77321c832e81",
"version.json": "9b765716a24fa91995ef9211d143d5c1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
