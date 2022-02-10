const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    type: {
        type: String,
        index: true
    },
    name: {
        type: String,
        required: true,
        index: { unique: true }
    },
    breed: String,
    color: String,
    personality: String,
    dob: Date
});

const Pet = (mongoose.models && mongoose.models.PetStore) || mongoose.model('PetStore', PetSchema, 'pets');
module.exports = Pet;