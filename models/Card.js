const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = Schema({
    name: { type: String },
    attribute: { type: Schema.Types.ObjectId },
    level: { type: Number },
    type: { type: Schema.Types.ObjectId },
    description: { type: String },
    price: { type: Number },
    figure: { type: Schema.Types.ObjectId },
    race: {type: Schema.Types.ObjectId },
    sold: { 
        type: Number,  
        default: 0
    },
    dateCreate: { 
        type: Date,
        default: Date(Date.now())
    },
    image: { type: String }
});

const Card = mongoose.model('Card', CardSchema);
module.exports = Card;