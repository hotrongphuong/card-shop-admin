const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/category');

router.route('/')
    .get(categoryController.index);

router.route('/newAttribute')
    .post(categoryController.newAttribute);

router.route('/updateAttribute/:attributeID')
    .post(categoryController.updateAttribute);

router.route('/deleteAttribute/:attributeID')
    .post(categoryController.deleteAttribute);

router.route('/newCardType')
    .post(categoryController.newCardType);

router.route('/updateCardType/:cardTypeID')
    .post(categoryController.updateCardType);

router.route('/deleteCardType/:cardTypeID')
    .post(categoryController.deleteCardType);

router.route('/newType')
    .post(categoryController.newType);

router.route('/updateType/:typeID')
    .post(categoryController.updateType);

router.route('/deleteType/:typeID')
    .post(categoryController.deleteType);

    
module.exports = router;