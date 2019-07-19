require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// create express app
const app = express();

// the port used for express server
let PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world')
})

// start server
app.listen(PORT, () => {
  console.log('Bot is listening on port ' + PORT);
});
