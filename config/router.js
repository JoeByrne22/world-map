const router = require('express').Router();
const placesController = require('../controllers/placesController');

router.route('/places')
  .get(placesController.indexRoute);

module.exports = router;
