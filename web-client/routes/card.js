const express = require('express');

const router = express.Router();

const cardController = require('../controllers/card');

router.route('/')
    .get(cardController.index);

router.route('/page/:indexPage')
    .get(cardController.page);

router.route('/:cardID')
    .get(cardController.detail);

router.route('/search/:key')
    .get(cardController.search);



module.exports = router;