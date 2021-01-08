const Card = require('../models/Card');
const Attribute = require('../models/Attribute');
const Figure = require('../models/Figure');
const Race = require('../models/Race');
const Type = require('../models/Type');

const index = async (req, res, next) => {
    card = [
        { name: 'PTBT', price: 50, sold: 50 },
        { name: 'PTBT', price: 50, sold: 50 },
        { name: 'PTBT', price: 50, sold: 50 },
    ];
    res.render('card/index', {
        card
    });
}

const addCard = async (req, res, next) => {
    res.render('card/add');
}

module.exports = {
    index,
    addCard,
}