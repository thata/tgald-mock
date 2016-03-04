var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var iframe_id = req.query.iframe_id
  var n = Math.floor(Math.random() * 20) + 1
  res.render('index', { title: 'Express', n: n, iframe_id: iframe_id });
});

module.exports = router;
