const express = require("express");
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', function (req, res) {
  console.log('GET /todo');

  let sqlText = 'SELECT * FROM "todo";';

  // Send a sql query to our database:
  pool.query(sqlText)
    .then((dbRes) => {
      console.log('dbRes.rows:', dbRes.rows);
      let todoList = dbRes.rows;
      res.send(todoList);
    })
    .catch((dbErr) => {
      console.log('SQL query in GET /todo failed:', dbErr)
      res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
  console.log('POST /todo');

  let newTask = req.body.task;
  let complete = req.body.complete;

  let sqlText = `
    INSERT INTO "todo"
      ("task", "complete")
      VALUES
      ($1, $2);
  `;
  let sqlValues = [newTask, complete];

  pool.query(sqlText, sqlValues)
    .then((dbRes) => {

      res.sendStatus(201); //  👈 200 means 'Created'
    })
    .catch((dbErr) => {
      console.log('POST /todo error:', dbErr);
      res.sendStatus(500);
    })
})

router.put('/:id', (req, res) => {

  let theIdToUpdate = req.params.id;

  let isComplete = req.body.complete;

  let sqlText = `
    UPDATE "todo"
      SET "complete"=$1
      WHERE "id"=$2;
  `
  let sqlValues = [isComplete, theIdToUpdate];

  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200); //  👈 200 means 'OK'
    })
    .catch((dbErr) => {
      console.log('PUT /todo/:id fail:', dbErr);
      res.sendStatus(500);
    })

})

router.delete('/:id', (req, res) => {

  let theIdToDelete = req.params.id;

  let sqlText = `
    DELETE FROM "todo"
      WHERE "id"=$1;
  `;
  let sqlValues = [theIdToDelete];

  pool.query(sqlText, sqlValues)
    .then((dbRes) => {

      res.sendStatus(200); //  👈 200 means 'OK'
    })
    .catch((dbErr) => {
      console.log('delete /todo error:', dbErr);

      res.sendStatus(500);
    })
})

module.exports = router;