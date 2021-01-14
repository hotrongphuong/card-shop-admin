const Card = require('../models/Card');
const CardType = require('../models/CardType');
const Attribute = require('../models/Attribute');
const Type = require('../models/Type');


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
        const filter = {
            keySearch: {$regex: req.body.keySearch, $options: "$i"}
        };
        const _cardType = req.body.cardType;
        if(_cardType !== "") {
            filter['cardType'] = _cardType;
        };
        const _attribute = req.body.attribute;
        if(_attribute !== "") {
            filter['attribute'] = _attribute;
        };
        const _type = req.body.type;
        if(_type !== "") {
            filter['type'] = _type;
        };
        const _level = req.body.level;
        if(_level !== "") {
            filter['level'] = _level;
        }
        const cards = await Card.find(filter).lean().exec();
        res.send(cards.splice((numPage - 1) * 12, numPage * 12));
    },

    search: async (req, res, next) => {
        const data = req.body.keySearch;
        console.log(data);
        const cards = await Card.find({name: {$regex: data, $options: "$i"}}).lean().exec();
        res.send(cards);
    },

    filter: async (req, res, next) => {
        const filter = {};
        const _cardType = req.body.cardType;
        if(_cardType !== "") {
            filter['cardType'] = _cardType;
        };
        const _attribute = req.body.attribute;
        if(_attribute !== "") {
            filter['attribute'] = _attribute;
        };
        const _type = req.body.type;
        if(_type !== "") {
            filter['type'] = _type;
        };
        const _level = req.body.level;
        if(_level !== "") {
            filter['level'] = _level;
        }
        const cards = await Card.find(filter).lean().exec();
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