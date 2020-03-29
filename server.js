const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://heroku_04pms54m:u5gl634et900nb29t81mj5krel@ds047752.mlab.com:47752/heroku_04pms54m',
  {
    useNewUrlParser: true
  }
);

// routes
app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});