'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "33b6ed9dea7978e10d20b3c8c3e0b3c2",
"version.json": "9afdace5897acb1b6b26cbcf93f619f5",
"index.html": "4989c5a72e4258a2ef8c9302c48e3fb6",
"/": "4989c5a72e4258a2ef8c9302c48e3fb6",
"CNAME": "9d8faad3f6ecf8641ac887ba4c47780f",
"main.dart.js": "42c9c9556998b7b61856ea26297ef899",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "71298a958ab6f40ce7d3c72d35336213",
".git/config": "fba6ecd3926d0ebf91adaf438488866f",
".git/objects/95/2609acb8519ca80ed4900649c2c28960f42d30": "8ca5e8730ba11cb1a9b1a728e72cc5ee",
".git/objects/6f/712a8ca2c34294820c786aa19dd2bd867c4ec3": "82851767c2b09ab58ca303db06848fde",
".git/objects/9b/25f429c4655d3fb4d7bfe3aed04dbd34eac2d8": "3aeb9e60588cf97aa664344392eccedc",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/3d/af9f8d747bf0415f385b8209c8bc0d027bbb00": "1606d0827316c39c731502700fa8bf26",
".git/objects/58/7e9fdc7663abce820956157fa5cd061f63cb83": "01ce4cfd458e8a492ed3e3d939371897",
".git/objects/0b/1800a24a57849960c354dc9919727a46da68ea": "c715d25a1e1cd211abd5f377f50f855a",
".git/objects/94/88507a2009cd38edd35a06807774f052a585dc": "2c9c0503cb07be2129bed640f6ddba37",
".git/objects/5a/c1cb3829e0262b5e415c3061439fbbfa2d1e72": "9a4b83259873b472816fdb5f3979877f",
".git/objects/a3/dc83eb29d2e2637a53f8365e5a23c768ef2647": "f3c5888486156107d25eed48516685ca",
".git/objects/d9/da403f43c668d7dba97c66250051ae865ef31d": "d476dca18067afce4d07bda7045e6643",
".git/objects/ac/ff2ee27ce330baa6c5736f747281d40502129f": "b93decdbff8829ef1500014efd9f4b2b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/be/828a862c8526a5cd8e76215467d0af6b5f4eff": "f536ae1961221fd65a54a9b4c90302b7",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/a2/e4cc2b3677d905181b27ec2a8b0c6feb61560e": "a0644a9a4db21a1dbbdbbeb2d5b3d61a",
".git/objects/d1/5afff29c8f0ab2d45b3ed6d608d35573d5d506": "33fcbb4bd3a248384afaf79e138f9e15",
".git/objects/d1/2175c518941657f03dd83f76204346d2165721": "c98696fa4949f28f4a2aa78e6553ed33",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e5/b55a61542670d4f40d6086373171da4187ebf4": "91e7c1c9ee89f626cf7a3e4e6d83c1e4",
".git/objects/f4/12ad6639b8b5d6b088df2779b1556d6cfcab16": "01df28543549ed6d53a09e0564dfb46d",
".git/objects/f3/b7eaeae45652034027bcbaea1b9d0b6c232a13": "339ff9768e85eb9dd6157f79870b8ccc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/e4/687e009774fdbc57f8491de4c6c247bb442735": "2fa785ac558ffd70bb637540dbbcc988",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/29/8caeb7a354350bef02be370d9c9bc016387551": "f5b72d1bc99ea0cdd9a5bf592ce8abae",
".git/objects/7c/5e87ec4de91f2d79ab80b09b39ad475b6db97c": "dc13e921c9c5a22dc74cbce799d78515",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/219fd50fdd2e009dfb29c6c882c7721f8ab962": "6b8494baf93f3f848920630a4a19aa8d",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/75/2e093b10667e8108a257075168b55311f5e992": "76705797733cab3909c72d94df346c36",
".git/objects/72/841e9d77085cbf03615672bfa6f9a375cef100": "1743489178fb5f291f1f11c24670d45c",
".git/objects/72/48a4cd1dd41575746798157afac42d7d63658d": "81cc4f62cb5f7ac22612e92da290e292",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/4619018aeda4aeae241b3f688a0dd345c7539f": "769939135e0b0508879e3143bf6884cc",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/dffc718e0d487a4da66840e6568fe1b15d8acb": "2c9b19a1307e852297ca79cc0f8b8aa1",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/5e/03666e1959973c4b2f586dfba357e6981aa89d": "03e1f9baeee5eb45e221c146afe15a17",
".git/objects/6d/eb0af5ce284c8d101a6e8f47233ec4d2198783": "8d1a8fd50ab7973fa877996249a62799",
".git/objects/52/677634ed81d97558f634093e03756a10587991": "06110382ab9d8b1b3cc59641009859d0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/123f5dd2614aae9d304d769ba78e4e8df871e8": "d474de2c595abc1e843f881020fda51b",
".git/objects/a0/4afb0292a997d8abffe9f3f16aa8ba58ff581b": "77c4c58069d5ef848d8753b806251819",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/a9/2f4a065c8b53904f98ca03b5dfc70a5296ea0d": "8aef4787ebec8936d4ff14d5a96f9394",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/392da85aee0f512f7e199c46e8d2be99fefe08": "0ce0c62677ad249e54b471724bf8c806",
".git/objects/c3/61606a07ae127647cab207219b5d0d952f4db4": "15c1db19b0a7bbf8fca2975a2e0e910d",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ea/1a986fc5a0f003a555434bb7eec83474ca177e": "dcdb5a4703e97f59f671601964163c70",
".git/objects/e6/cf3464dac54811dc8f8614bbcdd3c5a4b7708d": "973fc8653a314f35ea81bea76f0beb50",
".git/objects/f0/1b75f1e7d80d0e93b0d89830bb31f0d152b74a": "d7b34cf64d81313c8f78884081781823",
".git/objects/f0/357870c98cd4983c64e4c9d603517ab7b0a350": "de4d319d697779be4264ef893fe8aeeb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/72ee0062193b31cf6bd5138f687979a9abbff4": "5472ce6d48b578a00c7f9bac438ba893",
".git/objects/ce/dc828a4c162b989d3625e3242253c642510647": "103062d9802436fe2c332906840335d8",
".git/objects/83/5abc14704ca5228d6eb7144af139df000c9c76": "8f23239a2ed2ffbb779aabdecb9aca3e",
".git/objects/4a/cee93143d5ad0f06c4a66f802a5af37a8da13f": "062ba290c397a2d44759be357cec21ac",
".git/objects/24/84699dc25be5330458d5b3f48c4d2158d1975a": "5f9a43a2a1b0d087ef0729046eb44b35",
".git/objects/4f/b323f81ca59f367a76bb2cc4a659fde1a80f6a": "fc246652d5e42e433dde1b710fbb6ea6",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/4f/f799880b3ed5c63bdbffba69668b0a8b891018": "8a010f585a6651779ae5780e8654ecb7",
".git/objects/8d/498f7383ad5589eede82d8ff7596c235c69705": "a80dd0c5308b377a6750b7669334c5d3",
".git/objects/78/e04aa51cca0e74f7321c16bb6aa31069bde065": "59a32f4b6202e47d4deffed20c739b4c",
".git/objects/78/c73661bd111a9cc5ffb8b910d090761216951d": "943210aee54ab4870f64f3fe20d37a31",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/25/5d472f40f787bf8153d88c475075ee918d9c5c": "cf4e1b39799f1e23c57a5d09643f99ac",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "853633dbf09a9d1a8a98e2d5ea431e8f",
".git/logs/refs/heads/main": "0019be381c1b56b05b22cb6690ed6161",
".git/logs/refs/remotes/origin/main": "816dcbda2434168f6f12af7c282411cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "eed2879ec5b20da3e736767f6db051e7",
".git/refs/remotes/origin/main": "eed2879ec5b20da3e736767f6db051e7",
".git/index": "8104cca4df88cabbec05659dfd825c67",
".git/COMMIT_EDITMSG": "689ad9578f2f3b7905de5c47c8b44dca",
"assets/AssetManifest.json": "6584b6029252fa0462bdc549138e59bb",
"assets/NOTICES": "6996752b0a5aca7b1ba77979367d4988",
"assets/FontManifest.json": "571a3ab094199eee626c8cc45aa8ef1e",
"assets/AssetManifest.bin.json": "7b667d5ac3b42db3209bb4d7573e11ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4222e64eba8134313d3ec28ce92a5bc4",
"assets/fonts/MaterialIcons-Regular.otf": "6a8ffbb1f78baee8e575226e75610b97",
"assets/assets/images/marker_gold.png": "e02d35e0819a146713bd3ae36c0d75a3",
"assets/assets/images/background.png": "88e0ff438b54b3f954d753eef3330308",
"assets/assets/images/background_1.png": "efa6ff53c5f4939afd63ddd4bd7aade5",
"assets/assets/images/marker_blue.png": "3b00c689d93ec4582400a6c9c9e317b2",
"assets/assets/docs/felhasznalasi_feltetelek.pdf": "d442f1b859523a30b6f2a1849cac1367",
"assets/assets/docs/terms_of_service.pdf": "8f33f2ab28cf56b6cdf6210c3599c2d0",
"assets/assets/docs/privacy_policy.pdf": "cf6d5416150923932d752b3ded1e6f52",
"assets/assets/docs/adatvedelmi_tajekoztato.pdf": "e62e1afebbd567ae92dc0e1e6abdf901",
"assets/assets/fonts/KoHo-Medium.ttf": "d8413effece27e7130d0590c1af53e1b",
"assets/assets/fonts/KoHo-SemiBold.ttf": "a72f934104f58e900e6c43a35108cf66",
"assets/assets/fonts/KoHo-Light.ttf": "633be19e880a50c19e321a7dc72d3b97",
"assets/assets/fonts/KoHo-Bold.ttf": "804c121dd601bdbf81c101127d4484e0",
"assets/assets/fonts/KoHo-ExtraLight.ttf": "e5e781ccf4bf87b2fb5442aaff8bfe18",
"assets/assets/fonts/KoHo-BoldItalic.ttf": "f1bf844d8c657aeb8e6989cb417a41d6",
"assets/assets/fonts/KoHo-ExtraLightItalic.ttf": "99f2e4bbadd75c138e0a1f1cd27b79f3",
"assets/assets/fonts/KoHo-MediumItalic.ttf": "750211644a1efbaa0855542e7849a90c",
"assets/assets/fonts/KoHo-Regular.ttf": "868bca664ab4070fb4bfe8f47f3612bf",
"assets/assets/fonts/KoHo-SemiBoldItalic.ttf": "eba1214dabe02ab8bfefe7854840c80a",
"assets/assets/fonts/KoHo-LightItalic.ttf": "9c5265d34c84dea494a1049a2ab9bb0e",
"assets/assets/fonts/KoHo-Italic.ttf": "201256371791c89eb0f51877625ec941",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
