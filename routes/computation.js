const express = require('express');
const app = express();


router.get('/computation', (req, res) => {
  // Get the last digit of your ID (replace this with your actual ID retrieval method)
  const id = parseInt(req.query.id);
  const lastDigit = id % 10;

  // Check if a custom 'x' value is provided in the query string
  const customX = parseFloat(req.query.x);

  let x;
  if (!isNaN(customX)) {
    x = customX;
  } else {
    // Generate a random value between 1 and 100
    x = Math.random() * 99 + 1;
  }

  let fn, result;

  // Determine the function to apply based on the last digit
  if (lastDigit === 0) {
    fn = "log10";
    result = math.log10(x);
  } else {
    fn = "unknown";
    result = "unsupported function";
  }

  // Construct the response string
  const response = `${fn} applied to ${x} is ${result}`;

  res.send(response);
});

module.exports = router;
