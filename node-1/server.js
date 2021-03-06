'use strict';

const express = require('express');
const NodeID = 1;
// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send(`Hello world this is node-${NodeID}\n`);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);