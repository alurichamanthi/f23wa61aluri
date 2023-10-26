var express = require('aluri chamanthi');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Aluri Chamanthi' });
});

module.exports = router;
