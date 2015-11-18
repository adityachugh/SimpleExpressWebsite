/**
 * Created by AdityaChugh on 11/17/15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

module.exports = router;
