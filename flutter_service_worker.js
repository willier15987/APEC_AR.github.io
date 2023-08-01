'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dcad8c7a6b1feb59d45ff626650f2619",
".git/config": "02b82568fcc55fc5e03ed07faf12192c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "de11b2f5d2b6b1586588ce2ec4481380",
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
".git/index": "10a86ab2a15c1219c7a80fdf287d7686",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "053edb79853a14b8f507087de7a3b726",
".git/logs/refs/heads/main": "964320335d16bb3a9535036f5a38e68d",
".git/logs/refs/remotes/origin/main": "b60c689fc3bef8015d713df0cf9c4ef5",
".git/next-index-30748.lock": "36c36dd22c10dd15f4be1d3e674d43b9",
".git/objects/00/37db2f307422c05d4f8686963e16e97e8f9e81": "d86e3efe3e26c6a7fa68338e9c86ca64",
".git/objects/03/301a45455d93c0ecea0b6e2078c07ca8cd65d9": "368e1359b5677942017e29c0dd01860b",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/d62b1966d9f22616b5ba0a879dba4bee8ccec3": "1182fa70da766cde631f96c04c32a78b",
".git/objects/10/2de65dc9ed651dd2e1ab2f4bf6099636177fd1": "4c2cd8540b156c50e7f3aeb2d485bdd8",
".git/objects/10/99a611139c80ed33e0f1604f93061c51d11834": "5e7f261bbdb6b9ad7ac6cfc4592810cb",
".git/objects/1a/3fe4d0bffec06f5ea5b98f8563b1441033b8bd": "2be0e566bb4a18cc1ca549c252931901",
".git/objects/1b/d491b088c6e59785518d5e1cf94340d4a31a75": "24d7eb759c7fc47409ae9c609a2c82f2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/b1e1bf353c50d1ce74a646d1c2c6648196a45a": "cf7e880a42c39f74814450e4d0c6844a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/23/3c8efd1dd643c494acd9dc188cb9f6be9975b0": "ca59eba3113c1c94abf0f7e5368ab96c",
".git/objects/2a/43f3151c0d1ab4e6fa340246dc490c80ab63e3": "708acca4b8106d76980161fe00f60243",
".git/objects/2d/8e3f9c3352793e08af3748f882dee98ee2b190": "a1f3dc58197727c09682af7e038e09fa",
".git/objects/30/e674ffecb9ed38c7d4586d2b843f49078386c3": "5d242993913c33f5d5ddeb0f48d03b61",
".git/objects/31/4ec2c1553ae9c0a688941abab53399dabfa525": "648f390355f899b32455ae1da6bb9b05",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/351a21bed57206fdf27d88f5e95f92c6baecb4": "cb92a52737d611e4d99109130785be22",
".git/objects/3c/4582764d36129ed20c9309c77dfc94b927c604": "cb56ff2f807086150f0664d1e5a9bc89",
".git/objects/3d/997e6990ec3cd0587201942610fee2d6bb22e9": "4ed0567fe561495e71543e06349b1dce",
".git/objects/3f/64f1e7f13b11d15e990785dbc8b0562f09cebc": "37dd4358668d360cd5f2f4d030384fe3",
".git/objects/41/8ad2df200dba4e6f61b323d48c087f347174de": "e298e8ac72108232c099ed23fc32df86",
".git/objects/42/a3b996723b61a5e53b40bddfcbb465eff45074": "cafe0591ca8a35ecbae8431140c25fba",
".git/objects/43/2fe0af2d9ae5f72860c0c8f431e163f19cafef": "6acb643d789b7bfa230f3a684d96a408",
".git/objects/43/5b0fb54b7a787d61e95329a1c3ec9f6db5fe8a": "8faeab3451ebbf8aee4ff7ddd0c7c22f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/b5225a1aa42fae40ee530b0c2aad425f8d80f5": "06eb00c58933c39c2aac112d04e146cc",
".git/objects/4a/527bdd8c3954cf5aaea38ff4e5a239219fdda4": "52a72319815f2b39abc564ea61e09c22",
".git/objects/4e/75a3d71a66c7638ab07b76a63ec12b1b1f137a": "d14bab8324ea2447439b022d3b7e2074",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/6bbeb733bb5e4a6c10e215b358ceb5873b9c7c": "d67528f5f552048d603a587d2e566689",
".git/objects/5d/ce1c4bebda26f075baec26d188f2606a3616c2": "403dd7812dac53a0873e98488fc84c3e",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/242c68fa30755137dfc4cca6bb57859273b73a": "21939681cfa3473688e067e09a23d472",
".git/objects/63/7a23a5a0eca11ac660ce01bc57ceb5e9000de7": "1f8f7dbf15619c7556f5e3da5db28e69",
".git/objects/64/fb821a05b7841c456bcb13abc0aacb3da50cf1": "9737b85951f66b7af3e74989bbce6640",
".git/objects/6b/dd00cc25329a59671bfe763d2f8de67816d70a": "7f24ea6dc19e9b98bae72566f5a8971e",
".git/objects/6d/b38150ace0a976c2549a4a25dcee11e9be24fe": "2ff66eaed0e16bb0694bd5c8ee5406dc",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/77/285b34458ca5b7e83c20f4616e56eac0030d34": "38e7bbbfecadbe30552e741d9fd8294c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/603dc3cc8a4df7339b93b501cdf2418e7f0d7e": "dd77bae71f4d695638a0d4346cfd1c48",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/322c094faf673f74113fdba467121c0bb74e2e": "77020351f288c06bbd161938fba18f52",
".git/objects/8d/14c48f82ba168ab3599484e7e1d7030a844ea9": "2ff4577f5562c620c4bb4bb54e29816b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/61869cc57f4ba58fee6ab4d186139f0c1a97d2": "f7c17295bcc6d93b89158b6144413fd0",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/c17afee43b28505b6987030953f0f5a2cc6ef8": "b576e86f8ef60db6132b35050a60b0ad",
".git/objects/91/bdf4d35df06df64073db12b7e64af334a3a6a8": "368682cd5b99d4fa4a424a8e8ab5e57a",
".git/objects/93/151a8baf3edc2e341f78466635d206715e03c8": "fc081bc2adb3a4c686203c490681f0b4",
".git/objects/98/185a38e86d55ac0d84d14cee034d99f1c73950": "c491fea2bad21ac471cd14f8e7e0053a",
".git/objects/a0/8d3dfd3f6457f8b8aa1da2b23fef36aede3ec5": "f00bc128e9b310be27c9ae577544a31a",
".git/objects/a7/30e2237dabcd81f4d42db3d42a8c70dc087a45": "5831f1693767444f62657eee42b219c5",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b6/b6fdeea493c97d646f239d51bbd734de40ce41": "800d05d983e773094bd050419c1e5a8f",
".git/objects/b6/c138434983e3146d0850012c902d8e50832d92": "e7e732bf2610b4bed717ed4c111bd157",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b4256321816f89f1bbbbd2358118b81ac3b4e6": "59a1cbcc125786212a7acfc091b44a65",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/8e451ca812aafb78eada7efdcbecfface9d6ab": "37e606e1ee56d989c96a5c75f1bbde78",
".git/objects/c0/8ac2c2fb4dc4ebb01ee9a06c98c9c7d9c3c234": "8fea020bfae93d6030bf3639c046ad64",
".git/objects/c3/7f26e3d4c9038a07d6851b7155701b8107335f": "e8a665fa5bb8c97deb6656fdc63a84e3",
".git/objects/c5/4802c4a872db0a28831d3d871231b22e8c2ac0": "98c0ffa8d6c5e4d6c319bc2c5b8d79fd",
".git/objects/c6/193b4415b53317972865af3be5bce624a69537": "3d45688cd4d2324f212a46fef48a2f98",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/d0/7335a1196e1226b0245bf68c2a645edd6c2779": "8787704aa6d09cc95da3ab02f7e2d2a6",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/54f508fec2a64848fb5b109c110420235c2e28": "3840b125e2814632a6cbf7ca00e4c678",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4b824c9a97e5bf62eb11df80b7998e8a976e8e": "df5a76102f78e8fb5a40025deff4f75a",
".git/objects/db/12ce5d843b417b34772d8950f67587668c1178": "7e7131e1f7eacab901c42f0a7a01a848",
".git/objects/dd/a6e16beea8d63e1f72406c439fcac46c9d6dad": "0f5220615c6f012e0a51d87cd6811006",
".git/objects/df/3046c5cca46410d1f24a40f227e051e8aae378": "461f4b0be69a932b33898456bb29efd5",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/6893635a6989b2f11a49b646ebfee836420bfb": "da09a9c6a7c7bdb7763d085c2218da27",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/70a4c7dfba3fa8fb878f500ed59c26cc5b420c": "dd03f633b74be63334fc8650bea94c3b",
".git/objects/f1/58fdc18216d2175637ec6c6c08946d844671d0": "bd6ebc367c235f0b31a1421f363f1ea2",
".git/objects/f1/cfd63c90781e9b36f7598cc2bfc92ad96d17b7": "8b43b6a152bf8f86f09d24b91fa381b9",
".git/objects/f2/68020655af3272393da0b6d971b9b1c2d7d403": "3daa4b1f1a35cea087d4c48c64e22bf8",
".git/objects/fa/9de41f4236fd7d7e002375bd252473cd4e6010": "24251b5bd04cb2d404993f174c3e6e53",
".git/objects/ff/f6c8c771bd6fbbb519b173c336132a9be78293": "6066e2bb405df42e9ac19468b2919422",
".git/ORIG_HEAD": "1abf3c4152a3cc2ed17f2990c2b155d6",
".git/refs/heads/main": "cf7f0552e0d804561c938d2d109bbc61",
".git/refs/remotes/origin/main": "cf7f0552e0d804561c938d2d109bbc61",
"assets/AssetManifest.bin": "4f8e140edc85e7fb74a18b46969c23a7",
"assets/AssetManifest.json": "9bebcbd579c80bc4dffa5875ca41ad7a",
"assets/assets/images/BG.png": "c94fc160f5cd3d86ab5dad7cce321dd1",
"assets/assets/images/BG02.png": "446ae0b89b917b7d0afdba36ebfc35a1",
"assets/assets/images/button_Answer.png": "cfab89de2396a04d263bfef15bb0e007",
"assets/assets/images/button_Cancel.png": "ea8d4961452a0483a80273332dc4d5ca",
"assets/assets/images/button_CH.png": "80e7958bce9a50ff204183a8ed86594c",
"assets/assets/images/button_CH_off.png": "f59875aa78cf5e41cf0bcb4f9d8e09a0",
"assets/assets/images/button_edit.png": "8b8eed9ccfe3c7fd2453db173b3c91db",
"assets/assets/images/button_EN.png": "971b27c8da5ffdfe1ec577929b9451e1",
"assets/assets/images/button_EN_1.png": "fe46c488aecc8ac9dbb13c25b594f596",
"assets/assets/images/button_JP.png": "759b00dc8d396855998585f21cdfec03",
"assets/assets/images/button_JP_1.png": "d9b1e2d52feaf7bea125af211531afa2",
"assets/assets/images/button_mistake.png": "accdcd90dcdb3674e999c535b1763e40",
"assets/assets/images/button_out.png": "558932d14d183f00387d17de61073041",
"assets/assets/images/button_remove.png": "22fcc725d87d799d7540ea71dd64408c",
"assets/assets/images/button_save.png": "d266bab0dc7b58a49d99defc6ca2f2d3",
"assets/assets/images/button_save2.png": "f8e0d0bf252ff3845639e93764ff1674",
"assets/assets/images/LeftBtn.png": "bd6e7b358de908b78f4275a15fd63b37",
"assets/assets/images/lessonPlan_edit.png": "59fb45d96676ebae77b028ab7dde76cf",
"assets/assets/images/lessonPlan_list.png": "768473c732fa09b82a9c01be0d99f603",
"assets/assets/images/LoginBg.png": "cd70b3050c4e3d68e2433bef668b6151",
"assets/assets/images/LoginBtn.png": "1795ebf45189322636ede1072a4bdc57",
"assets/assets/images/RightBtn.png": "056cfbad801d05f00eeae07786fa5fbb",
"assets/assets/images/text_Establish.png": "532311127d6c18bf46d8f87f11957f69",
"assets/assets/images/text_list.png": "5271d205aaa3412760854df7dbc4b265",
"assets/assets/images/text_out.png": "acd4260c2aeaedcaa0067ecf941268c7",
"assets/assets/images/tip2_remove.png": "77b630357de2c55141365c91d948d151",
"assets/assets/images/tip2_save.png": "00d8fa61d5bfef02babc21807505c3fd",
"assets/assets/images/tip_out.png": "d61e77441402b71615d2e21299eb0c59",
"assets/assets/images/tip_remove.png": "9cdd85f0fc0a2eb0ad0006f365b8a693",
"assets/assets/images/tip_save.png": "a82a8cccd1789398b7cc8102cad5c0d4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "b11f9325e22c437837a24786677f4334",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "838199147570b22f43833310f091e5b5",
"/": "838199147570b22f43833310f091e5b5",
"main.dart.js": "d124e13f6a4faa2a8a53569263f83474",
"manifest.json": "6e9d15681b95afa691ca36d7791a9e22",
"version.json": "67ec5478ab9cfdf9c5ff8dc3c8e6110c"};
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
