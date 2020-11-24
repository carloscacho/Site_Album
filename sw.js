const cacheName = "album-v1.2"
const files = [
	'/Site_Album/',
	'/Site_Album/index.html',
	'/Site_Album/script.js',
	'/Site_Album/style.css',
	'/Site_Album/imagens/icons/favicon.ico',
	'https://code.jquery.com/jquery-3.2.1.slim.min.js',
  'https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js',
	'https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js',
	'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
	'https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css',
]

self.addEventListener('install', function(evt){
	console.log("install sw");
	evt.waitUntil(
		caches.open(cacheName).then(function(cache){
			console.log('colocando arquivos na cache')
			cache.addAll(files)
		})
	)
})

self.addEventListener('activate', function(evt){
	console.log("activate sw");
	evt.waitUntil(
		caches.keys().then(function(keys){
			return Promise.all(
				keys
				.filter(key => key !== cacheName)
				.map(key => caches.delete(key))
			)
		})
	)
})

self.addEventListener('fetch', function(evt){
	console.log("fetch sw");
	evt.respondWith(
		caches.match(evt.request).then(function(res){
			return res || fetch(evt.request)
		})
	)
})
