const express = require('express');

const router = express.Router();

const cartController = require('../controllers/cart');

router.route('/')
    .get(cartController.index);


module.exports = router;