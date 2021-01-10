const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttributeSchema = Schema({
    name: { type: String }
});

const Attribute = mongoose.model('Attribute', AttributeSchema);
module.exports = Attribute;

