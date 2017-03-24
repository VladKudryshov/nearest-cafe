var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cafe/:id/info', function(req, res, next) {
    const id = req.params.id;
    const cafe = cafe.find((r) => r.id === id);

    res.json(Object.assign(
      {},
      cafe,
    ));
});

module.exports = router;
