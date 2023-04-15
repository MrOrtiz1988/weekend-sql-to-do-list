const express = require("express");
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', function (req, res) {
  res.send("all good");
});


module.exports = router;