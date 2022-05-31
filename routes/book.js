const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/list', function(req, res, next) {
  res.render('pages/book/book');
});


/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('pages/book/book-add');
});


module.exports = router;
