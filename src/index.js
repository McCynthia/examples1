const express = require('express');
const app = express();
const persist = require('./service/store');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const petsFile = 'pets.txt';
//const pets = [{type: 'cats', quantity: 3, members: [{name: 'Otis', ageInYears: 12, color: 'black&white'}]}, {type: 'dogs', quantity: 4, members: [{name: 'Flaco', ageInYears: 10, color: 'black'}]}, {type: 'bunnies', quantity: 10, members: [{name: 'Snowball', ageInYears: 3, color: 'white'}]}];
const pets = persist.read(petsFile);


app.get('/', function(req, res) {
	const menu = ['Pets', 'Services', 'Accesories'];
	res.status(200).json(menu);
});


app.get('/pets', function(req, res) {
	res.status(200).json(pets);
});

app.get('/pets/dogs', function(req, res) {
	// buscar los typos = dogs y regresarlos
	res.status(200).json(pets);
});

app.get('/pets/:type', function(req, res) {
	const type = req.params.type;
	console.log(type);
	const found = pets.find(element => element.type === type);
	res.status(200).json(found);
});


app.post('/pets', function(req, res) {
	const pet = req.body;
	console.log(pet);
	pets.push(pet);
	persist.save(pets, petsFile);
	res.status(200).json(pets);
});


app.post('/pets/:type', function(req, res) {
	const type = req.params.type;
	const miembro = req.body;
	// Traverse array: pets.forEach(mascota => console.log(mascota));
	const found = pets.find(mascota => mascota.type === type);
	if (typeof found != 'undefined') {
		found.members.push(miembro);
		res.status(200).json(found);
		persist.save(pets, petsFile);
	} else {
		res.status(404).json('pet not found');
	}
});


app.put('/pets', function(req, res) {
	const pet = req.body;
	console.log(pet);
	const found = pets.find(element => element.type === pet.type);
	if (typeof found !== 'undefined') {
		found.quantity = pet.quantity;
		res.status(200).json(pets);
		persist.save(pets, petsFile);
	} else {
		res.status(404).json('pet not found');
	}
});


module.exports = app;


//app.use('/', petsApi);


//module.exports = app

//function petsApi() {
//	console.log('hey');
//	return ('dogs, cats');
//}

//TAREA:
//LEER NODE EXPRESS
//PUT - MODIFY UN ELEMENTO CANTIDAD (BUSCAR ELEMENTOS EN ARRAY, ENCONTRAR Y MODIFICAR)


// function add(object, arr) {
//	arr.push(object);
//}
//cont merchandise = []
//add({name: 'dog food', price: 24.90})
//console.log(merchandise)
//add({name: 'bed', price: 40})
//console.log(merchandise)

//function findMerchandise(merchandiseName, array) {
//	return array.find(element, => element.name === merchandiseName);
//}
//console.log(findMerchandise('dog food', merchandise))