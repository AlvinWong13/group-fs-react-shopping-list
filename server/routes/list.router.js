const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET route
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM shopping_list ORDER BY name ASC`;
  pool.query(sqlText)
  .then(results => {
    res.send(results.row);
  })
  .catch(err => {
    console.log('Error contacting database', err);
    res.sendStatus(500);
  });
});

module.exports = router;