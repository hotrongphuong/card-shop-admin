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
    },

    getCard: async (req, res, next) => {
        const cardID = req.query.id;
        console.log(cardID);
        const card = await Card.findById(cardID).lean().exec();
        console.log(card);
        res.send(card);
    }
}