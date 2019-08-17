const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const countrySchema = new Schema({
    name: {type: String},
    capital:{type: String}
});

module.exports = mongoose.model('country', countrySchema);