const persist = require('../service/store');

const storeFile = 'store.txt';
const store = persist.read(storeFile);


exports.store_get = function(req, res) {
	res.status(200).json(store);
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

