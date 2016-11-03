var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res) {
  res.render('index', {});
});

// GET bio page
router.get('/bio', function(req, res) {
    res.render('bio', {});
});

// GET projects page
router.get('/projects', function(req, res) {
    res.render('bio', {});
});

// GET github page
router.get('/github', function(req, res) {
    res.redirect("http://www.github.com/treyfeldman");
    // Change to: window.open("http://www.github.com/treyfeldman");
});

// GET resume page
router.get('/resume', function(req, res) {
    res.render('resume', {});
});

module.exports = router;
