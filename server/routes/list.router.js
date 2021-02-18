const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET route for shopping items
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM shopping_list ORDER BY name ASC;`;
  pool
    .query(sqlText)
    .then((results) => {
      console.log('rows', results.rows);
      res.send(results.rows);
    })
    .catch((err) => {
      console.log('Error contacting database', err);
      res.sendStatus(500);
    });
}); // end GET route

// POST route
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
}); // end POST route

// DELETE route
router.delete('/', (req, res) => {
  console.log('inside router.delete');
  let queryText = ' DELETE FROM "shopping_list" ';

  pool
    .query(queryText)
    .then((result) => {
      console.log('cleared the list');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error on clear', error);
      res.sendStatus(500);
    });
});

module.exports = router;
