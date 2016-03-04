var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var n = Math.floor(Math.random() * 20) + 1
  res.render('index', { title: 'Express', n: n });
});

module.exports = router;
