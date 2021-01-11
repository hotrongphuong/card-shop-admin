const Attribute = require('../models/Attribute');
const Type = require('../models/Type');
const CardType = require('../models/CardType');

const index = async (req, res, next) => {
    const attribute = await Attribute.find({}).lean().exec();
    const type = await Type.find({}).lean().exec();
    const cardType = await CardType.find({}).lean().exec();
    
    res.render('category', { 
        attribute,
        cardType,
        type
    });
}

const newAttribute = async (req, res, next) => {
    const newAttribute = new Attribute(req.body);
    await newAttribute.save();
    res.redirect('/category');
}

const updateAttribute = async (req, res, next) => {
    const { attributeID } = req.params;
    const newAttribute = req.body;
    await Attribute.findByIdAndUpdate(attributeID, newAttribute);
    res.redirect('/category');
}

const deleteAttribute = async (req, res, next) => {
    const { attributeID } = req.params;
    await Attribute.findByIdAndRemove(attributeID);
    res.redirect('/category');
}

const newType = async (req, res, next) => {
    const newType = new Type(req.body);
    await newType.save();
    res.redirect('/category');
}

const updateType = async (req, res, next) => {
    const { typeID } = req.params;
    const newType = req.body;
    await Type.findByIdAndUpdate(typeID, newType);
    res.redirect('/category');
}

const deleteType = async (req, res, next) => {
    const { typeID } = req.params;
    await Type.findByIdAndRemove(typeID);
    res.redirect('/category');
}

const newCardType = async (req, res, next) => {
    const newCardType = new CardType(req.body);
    await newCardType.save();
    res.redirect('/category');
}

const updateCardType = async (req, res, next) => {
    const { cardTypeID } = req.params;
    const newCardType = req.body;
    await CardType.findByIdAndUpdate(cardTypeID, newCardType);
    res.redirect('/category');
}

const deleteCardType = async (req, res, next) => {
    const { cardTypeID } = req.params;
    await CardType.findByIdAndRemove(cardTypeID);
    res.redirect('/category');
}


module.exports = {
    index,
    newAttribute,
    deleteAttribute,
    updateAttribute,
    newCardType,
    updateCardType,
    deleteCardType,
    newType,
    updateType,
    deleteType
}