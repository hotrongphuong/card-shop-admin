const express = require('express');

const router = express.Router();

const cardController = require('../controllers/card');

router.route('/')
    .get(cardController.index);

router.route('/page')
    .post(cardController.page);

router.route('/:cardID')
    .get(cardController.detail);

router.route('/search')
    .post(cardController.search);

router.route('/search/:key')
    .get(cardController.search);



router.route('/filter')
    .post(cardController.filter);



module.exports = router;