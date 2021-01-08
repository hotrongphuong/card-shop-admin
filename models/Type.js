const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = Schema({
    name: { type: String },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }]
});

const Type = mongoose.model('Type', TypeSchema);
module.exports = Type;