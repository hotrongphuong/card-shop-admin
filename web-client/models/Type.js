const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = Schema({
    name: { type: String },
});

const Type = mongoose.model('Type', TypeSchema);
module.exports = Type;
