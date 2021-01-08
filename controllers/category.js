const Attribute = require('../models/Attribute');
const Figure = require('../models/Figure');
const Race = require('../models/Race');
const Type = require('../models/Type');

const index = async (req, res, next) => {
    const monsterAttribute = await Attribute.find({}).lean().exec();
    const figure = await Figure.find({}).lean().exec();
    const monsterRace = await Race.find({}).lean().exec();
    const monsterType = await Type.find({}).lean().exec();
    
    res.render('category', { 
        monsterAttribute,
        figure,
        monsterRace,
        monsterType
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
    const monsterAttribute = await Attribute.findByIdAndUpdate(attributeID, newAttribute);
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
    const monsterType = await Type.findByIdAndUpdate(typeID, newType);
    res.redirect('/category');
}

const deleteType = async (req, res, next) => {
    const { typeID } = req.params;
    await Type.findByIdAndRemove(typeID);
    res.redirect('/category');
}

const newRace = async (req, res, next) => {
    const newRace = new Race(req.body);
    await newRace.save();
    res.redirect('/category');
}

const updateRace = async (req, res, next) => {
    const { raceID } = req.params;
    const newRace = req.body;
    await Race.findByIdAndUpdate(raceID, newRace);
    res.redirect('/category');
}

const deleteRace = async (req, res, next) => {
    const { raceID } = req.params;
    await Race.findByIdAndRemove(raceID);
    res.redirect('/category');
}

const newFigure = async (req, res, next) => {
    const newFigure = new Figure(req.body);
    await newFigure.save();
    res.redirect('/category');
}

const updateFigure = async (req, res, next) => {
    const { figureID } = req.params;
    const newFigure = req.body;
    await Figure.findByIdAndUpdate(figureID, newFigure);
    res.redirect('/category');
}

const deleteFigure = async (req, res, next) => {
    const { figureID } = req.params;
    await Figure.findByIdAndRemove(figureID);
    res.redirect('/category');
}

module.exports = {
    index,
    newAttribute,
    deleteAttribute,
    updateAttribute,
    newFigure,
    updateFigure,
    deleteFigure,
    newRace, 
    updateRace,
    deleteRace,
    newType,
    updateType,
    deleteType
}