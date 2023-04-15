const express = require("express");
const app = express();
const todoRouter = require('./routes/todo.router');
const bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('server/public'));


app.use('/todo', todoRouter);

app.listen(port);
console.log("Listening on port: ", port);