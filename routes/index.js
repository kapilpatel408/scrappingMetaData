var express = require('express');
var scrapping = require('../controller/scrapping'); // Scrapping controller include.
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200).json({
    status:true,
    message: "Welcome to express."
  })
});

//Route For scrapping the meta data from URL
router.post('/scrap', scrapping.scrapping);

module.exports = router;
