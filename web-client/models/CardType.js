const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardTypeSchema = Schema({
    name: { type: String }
});

const CardType = mongoose.model('Card Type', CardTypeSchema);
module.exports = CardType;