const Card = require('../models/Card');
const CardType = require('../models/CardType');
const Attribute = require('../models/Attribute');
const Type = require('../models/Type');

module.exports = {
    index: async (req, res, next) => {
        let page = 1;
        if (parseInt(req.query.page) > 0) {
            page = parseInt(req.query.page);
        }
        const perPage = 12;
        const startCard = (page - 1) * perPage;
        const ensCard = startCard + perPage;
        const cards = await Card.find({}).lean().exec();
        console.log(cards);
        res.render('card', {
            cards: cards.slice(startCard, ensCard),
            sumCard: cards.length,
            page: page
        });
    },

    detail: async (req, res, next) => {
        const { cardID } = req.params;
        const card = await Card.findById(cardID).lean().exec();
        const cardType = await CardType.findById(card.cardType).lean().exec();
        const attribute = await Attribute.findById(card.attribute).lean().exec();
        const type = await Type.findById(card.type).lean().exec();
        console.log(card);
        res.render('detail', {
            card,
            cardType,
            attribute,
            type
        });
    }
}