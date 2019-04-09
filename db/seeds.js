const mongoose = require('mongoose');
const env = require('../config/environment');
const Place = require('../models/place');

mongoose.connect(env.dbURI);


const placeData =
  [
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      location: { lat: 60.116667, lng: 19.9 }
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      location: { lat: 41, lng: 20 }
    },
    {
      name: 'Andorra',
      capital: 'Andorra la Vella',
      location: { lat: 42.5, lng: 1.5 }
    },
    {
      name: 'Austria',
      capital: 'Vienna',
      location: { lat: 47.33333333, lng: 13.33333333 }
    },
    {
      name: 'Belarus',
      capital: 'Minsk',
      location: { lat: 53, lng: 28 }
    },
    {
      name: 'Belgium',
      capital: 'Brussels',
      location: { lat: 50.83333333, lng: 4 }
    },
    {
      name: 'Bosnia and Herzegovina',
      capital: 'Sarajevo',
      location: { lat: 44, lng: 18 }
    },
    {
      name: 'Bulgaria',
      capital: 'Sofia',
      location: { lat: 43, lng: 25 }
    },
    {
      name: 'Croatia',
      capital: 'Zagreb',
      location: { lat: 45.16666666, lng: 15.5 }
    },
    {
      name: 'Cyprus',
      capital: 'Nicosia',
      location: { lat: 35, lng: 33 }
    },
    {
      name: 'Czech Republic',
      capital: 'Prague',
      location: { lat: 49.75, lng: 15.5 }
    },
    {
      name: 'Denmark',
      capital: 'Copenhagen',
      location: { lat: 56, lng: 10 }
    },
    {
      name: 'Estonia',
      capital: 'Tallinn',
      location: { lat: 59, lng: 26 }
    },
    {
      name: 'Faroe Islands',
      capital: 'Tórshavn',
      location: { lat: 62, lng: 7 }
    },
    {
      name: 'Finland',
      capital: 'Helsinki',
      location: { lat: 64, lng: 26 }
    },
    {
      name: 'France',
      capital: 'Paris',
      location: { lat: 46, lng: 2 }
    },
    {
      name: 'Germany',
      capital: 'Berlin',
      location: { lat: 51, lng: 9 }
    },
    {
      name: 'Gibraltar',
      capital: 'Gibraltar',
      location: { lat: 36.13333333, lng: 5.35 }
    },
    {
      name: 'Greece',
      capital: 'Athens',
      location: { lat: 39, lng: 22 }
    },
    {
      name: 'Guernsey',
      capital: 'St. Peter Port',
      location: { lat: 49.46666666, lng: 2.58333333 }
    },
    {
      name: 'Holy See',
      capital: 'Rome',
      location: { lat: 41.9, lng: 12.45 }
    },
    {
      name: 'Hungary',
      capital: 'Budapest',
      location: { lat: 47, lng: 20 }
    },
    {
      name: 'Iceland',
      capital: 'Reykjavík',
      location: { lat: 65, lng: 18 }
    },
    {
      name: 'Ireland',
      capital: 'Dublin',
      location: { lat: 53, lng: 8 }
    },
    {
      name: 'Isle of Man',
      capital: 'Douglas',
      location: { lat: 54.25, lng: 4.5 }
    },
    {
      name: 'Italy',
      capital: 'Rome',
      location: { lat: 42.83333333, lng: 12.83333333 }
    },
    {
      name: 'Jersey',
      capital: 'Saint Helier',
      location: { lat: 49.25, lng: 2.16666666 }
    },
    {
      name: 'Latvia',
      capital: 'Riga',
      location: { lat: 57, lng: 25 }
    },
    {
      name: 'Liechtenstein',
      capital: 'Vaduz',
      location: { lat: 47.26666666, lng: 9.53333333 }
    },
    {
      name: 'Lithuania',
      capital: 'Vilnius',
      location: { lat: 56, lng: 24 }
    },
    {
      name: 'Luxembourg',
      capital: 'Luxembourg',
      location: { lat: 49.75, lng: 6.16666666 }
    },
    {
      name: 'Macedonia (the former Yugoslav Republic of)',
      capital: 'Skopje',
      location: { lat: 41.83333333, lng: 22 }
    },
    {
      name: 'Malta',
      capital: 'Valletta',
      location: { lat: 35.83333333, lng: 14.58333333 }
    },
    {
      name: 'Moldova (Republic of)',
      capital: 'Chișinău',
      location: { lat: 47, lng: 29 }
    },
    {
      name: 'Monaco',
      capital: 'Monaco',
      location: { lat: 43.73333333, lng: 7.4 }
    },
    {
      name: 'Montenegro',
      capital: 'Podgorica',
      location: { lat: 42.5, lng: 19.3 }
    },
    {
      name: 'Netherlands',
      capital: 'Amsterdam',
      location: { lat: 52.5, lng: 5.75 }
    },
    {
      name: 'Norway',
      capital: 'Oslo',
      location: { lat: 62, lng: 10 }
    },
    {
      name: 'Poland',
      capital: 'Warsaw',
      location: { lat: 52, lng: 20 }
    },
    {
      name: 'Portugal',
      capital: 'Lisbon',
      location: { lat: 39.5, lng: 8 }
    },
    {
      name: 'Republic of Kosovo',
      capital: 'Pristina',
      location: { lat: 42.666667, lng: 21.166667 }
    },
    {
      name: 'Romania',
      capital: 'Bucharest',
      location: { lat: 46 , lng: 25 }
    },
    {
      name: 'Russian Federation',
      capital: 'Moscow',
      location: { lat: 60 , lng: 100 }
    },
    {
      name: 'San Marino',
      capital: 'City of San Marino',
      location: { lat: 43.76666666 , lng: 12.41666666 }
    },
    {
      name: 'Serbia',
      capital: 'Belgrade',
      location: { lat: 44, lng: 21 }
    },
    {
      name: 'Slovakia',
      capital: 'Bratislava',
      location: { lat: 48.66666666, lng: 19.5 }
    },
    {
      name: 'Slovenia',
      capital: 'Ljubljana',
      location: { lat: 46.11666666, lng: 14.81666666 }
    },
    {
      name: 'Spain',
      capital: 'Madrid',
      location: { lat: 40, lng: 4 }
    },
    {
      name: 'Svalbard and Jan Mayen',
      capital: 'Longyearbyen',
      location: { lat: 78, lng: 20 }
    },
    {
      name: 'Sweden',
      capital: 'Stockholm',
      location: { lat: 62, lng: 15 }
    },
    {
      name: 'Switzerland',
      capital: 'Bern',
      location: { lat: 47, lng: 8 }
    },
    {
      name: 'Ukraine',
      capital: 'Kiev',
      location: { lat: 49, lng: 32 }
    },
    {
      name: 'United Kingdom of Great Britain and Northern Ireland',
      capital: 'London',
      location: { lat: 54, lng: 2 }
    }
  ];



Place.collection.drop();

Place.create(placeData)
  .then(places => {
    console.log(`Created ${places.length} places`);
    mongoose.connection.close();
  });
