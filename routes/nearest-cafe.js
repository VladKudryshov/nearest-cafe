var express = require('express');
var router = express.Router();
var cafe = require('../data/cafe');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(Object.assign(

    {},
    req.query,
    cafe

  ));

});

module.exports = router;
