var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  //router.get('/', (req, res) => {
    // Check if there is a query parameter 'x' in the request
    const x = req.query.x ? parseFloat(req.query.x) : Math.random() * 10;
 
    // Calculate the sine of 'x'
    const result = Math.log(x);
 
    // Create the response string
    const responseString = `Math.log() applied to ${x} is ${result}`;
 
    res.send(responseString);
  });
 
//});
 
module.exports = router;