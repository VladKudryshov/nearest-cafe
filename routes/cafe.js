var express = require('express');
var router = express.Router();
var cafe = require('../data/cafe');

router.get('/', function(req, res, next) {
   res.send(cafe);
   console.log(cafe);
   
});

router.get('/:id/info', function(req, res, next) {
   const id = req.params.id;
   res.json(cafe.find((r) => r.id === id));
});

module.exports = router;
