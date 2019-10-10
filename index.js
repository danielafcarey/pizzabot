require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// create express app
const app = express();

// the port used for express server
let PORT = process.env.PORT || 3000

const findPizza = (date) => {
  // scrape arizmendi website to get find that date
  // http://arizmendi-valencia.squarespace.com/pizza/
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world')
  // seamus fix this

  // let date = get current day of the week / date
  
  // let pizza = findPizza(date)
 
  // send json response in slack format
})


// start server
app.listen(PORT, () => {
  console.log('Bot is listening on port ' + PORT);
});
