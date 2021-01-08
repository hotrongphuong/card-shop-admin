const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RaceSchema = Schema({
    name: { type: String },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }]
});

const Race = mongoose.model('Race', RaceSchema);
module.exports = Race;