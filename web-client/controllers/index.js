const Card = require('../models/Card');
const CardType = require('../models/CardType');
const Attribute = require('../models/Attribute');
const Type = require('../models/Type');

module.exports = {
    index: async (req, res, next) => {
        const cards = await Card.find({}).lean().exec();
        console.log(cards);
        res.render('home', {
            cards
        });
    }
}