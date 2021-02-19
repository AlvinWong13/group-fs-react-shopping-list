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


// DELETE route for clear button
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
}); // end delete route

// PUT route for reset button
router.put('/', (req, res) => {
  console.log('inside the router.PUT');

  let queryText = ' UPDATE "shopping_list" SET "purchased"=false ';

  pool
    .query(queryText)
    .then((result) => {
      console.log('reset the list');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error on reset', error);
      res.sendStatus(500);
    });
});

router.delete('/:id', function (req, res) {
  console.log('in delete item endpoint');

  let itemId = req.params.id;

  let sqlText = `DELETE FROM shopping_list WHERE "id"=$1`;

  pool.query(sqlText, [itemId])
  .then((resDB) => {
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('error deleting item', error);
    res.sendStatus(500);
  })
})

router.put('/:id', (req, res) => {
  console.log('in PUT endpoint');
  console.log('req.body', req.body);
  console.log('req.param', req.param);
  let purchase = req.body.itemPurchased;
  console.log('item purchase', purchase);
  let itemId = req.params.id;
  let sqlText = '';

  if (purchase === 'false') {
    sqlText = `UPDATE shopping_list SET "purchased"=TRUE WHERE id=$1`;
  } else{
    console.log('not able to purchase');
    res.sendStatus(500);
    return;
  }
  
  pool.query(sqlText, [itemId])
  .then((resDB) => {
    console.log('resDB in PUT is', resDB);
    res.sendStatus(200);
  }) 
  .catch((error) => {
    res.sendStatus(500);
  })
})

// PUT route for editing an item
router.put('/edit/:id', (req, res) => {
  console.log('in /edit PUT', req.params);
  let queryString = `UPDATE "shopping_list" SET "name"='${req.body.name}', "quantity"=${req.body.quantity}, "unit"='${req.body.unit}' WHERE "id"=$1`;
  pool.query(queryString, [req.params.id]).then((results) => {
    console.log('successfully edited item');
    res.sendStatus(200)
  }).catch((error) => {
    console.log('error editing item', error);
    res.sendStatus(400);
  })



})


module.exports = router;
