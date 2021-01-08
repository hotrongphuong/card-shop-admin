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

router.route('/newFigure')
    .post(categoryController.newFigure);

router.route('/updateFigure/:figureID')
    .post(categoryController.updateFigure);

router.route('/deleteFigure/:figureID')
    .post(categoryController.deleteFigure);

router.route('/newRace')
    .post(categoryController.newRace);

router.route('/updateRace/:raceID')
    .post(categoryController.updateRace);

router.route('/deleteRace/:raceID')
    .post(categoryController.deleteRace);

router.route('/newType')
    .post(categoryController.newType);

router.route('/updateType/:typeID')
    .post(categoryController.updateType);

router.route('/deleteType/:typeID')
    .post(categoryController.deleteType);

    
module.exports = router;