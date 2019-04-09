const Place = require('../models/place');

function indexRoute(req, res, next) {
  console.log('index route running');
  Place.find().then(places => res.json(places))
    .catch(next);
}


module.exports = {
  indexRoute: indexRoute
};
