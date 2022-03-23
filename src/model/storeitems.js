const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    type: {
        type: String,
        index: true
    },
    name: {
        type: String,
        required: true,
        index: { unique: true }
    },
    size: String,
    color: String,
});

const Store = (mongoose.models && mongoose.models.PetStore) || mongoose.model('PetStore', PetSchema, 'items');
module.exports = Store;

