var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('umbrella', { title: 'search result by umbrella' });
});

module.exports = router;
