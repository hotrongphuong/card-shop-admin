const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttributeSchema = Schema({
    name: { type: String },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }]
});

const Attribute = mongoose.model('Attribute', AttributeSchema);
module.exports = Attribute;

