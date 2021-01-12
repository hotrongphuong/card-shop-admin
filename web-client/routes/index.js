const express = require('express');

const router = express.Router();

const indexController = require('../controllers/index');

router.route('/')
    .get(indexController.index);

router.route('/getCard')
    .get(indexController.getCard)


module.exports = router;