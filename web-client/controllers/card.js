const Card = require('../models/Card');
const CardType = require('../models/CardType');
const Attribute = require('../models/Attribute');
const Type = require('../models/Type');
const setView =require('../config/setView');

module.exports = {
    index: async (req, res, next) => {
        const cardType = await CardType.find({}).lean().exec();
        const attribute = await Attribute.find({}).lean().exec();
        const type = await Type.find({}).lean().exec();

        const cards = await Card.find({}).lean().exec();
        res.render('card', {
            cardType,
            attribute,
            type,
            cards: cards.slice(0, 12),
            numCard: cards.length
        });
    },

    page: async (req, res, next) => {
        const  page = req.params.indexPage;
        console.log(page);
        const cards = await Card.find({}).lean().exec();
        res.send(cards.splice((page - 1) * 12, page * 12));
    },

    search: async (req, res, next) => {
        const data = req.params.key;
        const cards = await Card.find({name: {$regex: data, $options: "$i"}}).lean().exec();
        res.send(cards);
    },

    detail: async (req, res, next) => {
        const { cardID } = req.params;
        const card = await Card.findById(cardID).lean().exec();
        const cardType = await CardType.findById(card.cardType).lean().exec();
        const attribute = await Attribute.findById(card.attribute).lean().exec();
        const type = await Type.findById(card.type).lean().exec();
        res.render('detail', {
            card,
            cardType,
            attribute,
            type
        });
    }
}