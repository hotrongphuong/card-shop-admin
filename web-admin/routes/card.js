const express = require('express');

const router = express.Router();

const cardController = require('../controllers/card');

router.route('/')
    .get(cardController.index);

router.route('/add')
    .get(cardController.addCard)
    .post(cardController.createCard);

router.route('/detail/:cardID')
    .get(cardController.detail);

router.route('/delete/:cardID')
    .get(cardController.deleteCard);

router.route('/update/:cardID')
    .post(cardController.updateCard);

module.exports = router;