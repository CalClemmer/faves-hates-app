var express = require('express');
var router = express.Router();

router.get('/foods', function(req, res) {
  res.render('hates/foods', {title: 'Hated Foods', foods: ['black licorice', 'balut']});
});

router.get('/animals', function(req, res) {
  res.render('hates/animals', {title: 'Hated Animals', animals: ['cockroaches', 'fruit flies']})
});

module.exports = router;