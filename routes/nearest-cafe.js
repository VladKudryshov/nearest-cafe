var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/nearest-cafe?lat=:lat&long=:long', function(req, res, next) {
  const cafe = [
    {
      name: 'Кофейня шекспир',
      id: '1',
      location:[
        lat: '12345',
        long: '12345'
      ]
    },
    {
      name: 'Кофе саунд',
      id: '2',
      location:[
        lat: '12345',
        long: '12345'
      ]
    },
    {
      name: 'Кофейня шекспир',
      id: '3',
      location:[
        lat: '12345',
        long: '12345'
      ]
    }
  ];

  app.get('/nearest-cafe', (req, res) => {
    res.json({
      name: 'ГрГУ имени янки купалы',
      location: [
        lat: '53.6847363',
        long: '23.839336'
      ],
      cafe: cafe,
    });
  });


});

module.exports = router;
