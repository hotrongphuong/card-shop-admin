const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FigureSchema = Schema({
    name: { type: String },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }]
});

const Figure = mongoose.model('Figure', FigureSchema);
module.exports = Figure;