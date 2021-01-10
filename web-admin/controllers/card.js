const multer = require('multer');
const fs = require('fs');
const path = require('path');

const Card = require('../models/Card');
const Attribute = require('../models/Attribute');
const CardType = require('../models/CardType');
const Type = require('../models/Type');


// upload image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.normalize(__dirname + '/../../public/img/'));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage }).single('image');


const index = async (req, res, next) => {
    const card = await Card.find({}).lean().exec();
    res.render('card/index', {
        card
    });
}

const addCard = async (req, res, next) => {
    const attribute = await Attribute.find({}).lean().exec();
    const cardType = await CardType.find({}).lean().exec();
    const type = await Type.find({}).lean().exec();
    res.render('card/add', {
        attribute,
        cardType, 
        type
    });
}

const createCard = (req, res, next) => {
    upload(req, res, async function (err) {
        if (err) {
            console.error(err);
        } else {
            const info = (req.body);
            const newCard = new Card(info);
            if (req.file) {
                newCard.image = req.file.filename;
            }
            const createdCard = await newCard.save();
            res.redirect('/card/add');
        }
    });
}

const detail = async (req, res , next) => {
    const { cardID } = req.params; 
    const card = await Card.findById(cardID).lean().exec();
    const attributes = await Attribute.find({}).lean().exec();
    const cardTypes = await CardType.find({}).lean().exec();
    const types = await Type.find({}).lean().exec();

    const cardType = await CardType.findById(card.cardType);   
    card.cardType = cardType.name;
    const attribute = await Attribute.findById(card.attribute);
    card.attribute = attribute.name;
    const type = await Type.findById(card.type);
    card.type = type.name;

    res.render('card/detail', {
        card,
        attributes,
        cardTypes,
        types
    });
}

const updateCard = (req, res, next) => {
    upload(req, res, async function (err) {
        if (err) {
            console.error(err);
        } else {
            const { cardID } = req.params;
            const newCard = req.body;
            console.log(newCard)
            if (req.file) {
                newCard['image'] = req.file.filename;
                const oldCard = await Card.findById(cardID);
                fs.unlinkSync(path.normalize(__dirname + '/../../public/img/' + oldCard.image));
            }
            await Card.findByIdAndUpdate(cardID, newCard);
            res.redirect(`/card/detail/${cardID}`);
        }
    });
}

const deleteCard = async (req, res, next) => {
    const { cardID } = req.params;
    const card = await Card.findByIdAndRemove(cardID);
    fs.unlinkSync(path.normalize(__dirname + '/../../public/img/' + card.image));
    res.redirect('/card');
}

module.exports = {
    index,
    addCard,
    createCard, 
    detail,
    deleteCard,
    updateCard
}