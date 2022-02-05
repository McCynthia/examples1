const persist = require('../service/store');

const storeFile = 'store.txt';
const store = persist.read(storeFile);


exports.store_get = function(req, res) {
	res.status(200).json(store);
}


exports.store_list_type = function(req, res) {
	const type = req.params.type;
	consolo.log(type);
	const found = store.find(element => element.type === type);
	res.status(200).jason(found)
}


exports.store_post = function(req, res) {
	const item = req.body;
	console.log(item);
	store.push(item);
	console.log(store);
	persist.save(store, storeFile);
	res.status(200).json(store);
}


exports.store_post_type = function(req, res) {
	const type = req.params.type;
	const articulo = req.body;
	const found = store.find(articulo => articulo.type === type);
	if (typeof found != 'undefined') {
		found.articulo.push(articulo);
		rest.status(200).json(found);
		persist.save(store, storeFile);
	} else {
		res.status(404).json('article not found');
	}
}


exports.store_put_type = function(req, res) {
	const item = req.body;
	console.log(item);
	const found = store.find(element => element.type === item.type);
	if (typeof found != 'undefined') {
		found.quantity = item.quantity;
		res.status(200).json(store);
		persis.save(store, storeFile);
	} else {
		res.status(404).json('item not found');
	}
}
//
// app.get('/food/dogs', function(req, res) {
// 	// buscar los typos = dogs y regresarlos
// 	res.status(200).json(store);
// });
//

//
// app.post('/store/:type', function(req, res) {
// 	const type = req.params.type;
// 	const thing = req.body;
// 	// Traverse array: store.forEach(elemento => console.log(elemento));
// 	const found = store.find(elemento => elemento.type === type);
// 	if (typeof found != 'undefined') {
// 		found.thing.push(thing);
// 		res.status(200).json(found);
// 		persist.save(store, storeFile);
// 	} else {
// 		res.status(404).json('element not found');
// 	}
// });
//
// app.put('/store', function(req, res) {
// 	const piece = req.body;
// 	console.log(piece);
// 	const found = store.find(element => element.type === piece.type);
// 	if (typeof found !== 'undefined') {
// 		found.quantity = piece.quantity;
// 		res.status(200).json(store);
// 		persist.save(store, storeFile);
// 	} else {
// 		res.status(404).json('piece not found');
// 	}
// });

