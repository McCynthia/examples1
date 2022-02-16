const Pet = require('../model/pet')

exports.pets_get = async function(req, res) {
    const pets = await Pet.find({});
    res.status(200).json(pets);
}

exports.pets_list_type = async function(req, res) {
    const type = req.params.type;
    const found = await Pet.find({ type });
    res.status(200).json(found);
}

exports.pets_post_type = async function(req, res) {
    const miembro = req.body;
    const newPetDoc = new Pet(miembro);
    try {
        const result = await newPetDoc.save();
        return res.status(201).json(result);
    }
    catch(err){
        return res.status(400).json({ error: err });
    }
}

exports.pet_put_type_name = async function(req, res) {
    const name = req.params.name;
    console.log('Looking for %s ', name);
    const pet = req.body;
    const found = await Pet.find({ name });
    if (found) {
        console.log('Found %j', found);
        const updatedPet = await Pet.findOneAndUpdate({ name }, pet, { new: true });
        return res.status(200).json(updatedPet);
    }
    res.status(404).json('pet not found');
}