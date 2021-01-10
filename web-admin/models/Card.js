const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = Schema({
    name: { type: String },
    attribute: { type: Schema.Types.ObjectId },
    cardType: { type: Schema.Types.ObjectId},
    level: { type: Number },
    type: { type: Schema.Types.ObjectId },
    description: { type: String },
    price: { type: Number },
    atk: { type: Number },
    def: { type: Number},
    sold: { 
        type: Number,  
        default: 0
    },
    dateCreate: { 
        type: Date,
        default: Date.now()
    },
    image: { 
        type: String,
        default: "no-image.png"
    }
});

const Card = mongoose.model('Card', CardSchema);
module.exports = Card;