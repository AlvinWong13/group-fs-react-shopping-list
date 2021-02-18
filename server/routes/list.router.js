const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.post('/', function (req, res) {
  console.log('inside SERVER-Side-Post');
  console.log('req.body', req.body);

  const foodItem = req.body;
  const queryText =
    'INSERT INTO "shopping_list" ("name", "quantity", "unit") VALUES ($1, $2, $3)';

  pool
    .query(queryText, [foodItem.name, foodItem.quantity, foodItem.unit])
    .then((results) => {
      console.log('results', results);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error in POST', error);
      res.sendStatus(500);
    });
});

module.exports = router;
