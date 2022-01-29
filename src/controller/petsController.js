const persist = require('../service/store');

const petsFile = 'pets.txt';
const pets = persist.read(petsFile);

exports.pets_get = function(req, res) {
    res.status(200).json(pets);
}
exports.pets_list_type = function(req, res) {
    const type = req.params.type;
    console.log(type);
    const found = pets.find(element => element.type === type);
    res.status(200).json(found);
}

exports.pets_post = function(req, res) {
    const pet = req.body;
    console.log(pet);
    pets.push(pet);
    console.log(pets);
    persist.save(pets, petsFile);
    res.status(200).json(pets);
}

exports.pets_post_type = function(req, res) {
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
}

exports.pet_put_type = function(req, res) {
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
}