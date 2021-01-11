const express = require('express');

const router = express.Router();

const cardController = require('../controllers/card');

router.route('/')
    .get(cardController.index);

router.route('/:cardID')
    .get(cardController.detail);


module.exports = router;