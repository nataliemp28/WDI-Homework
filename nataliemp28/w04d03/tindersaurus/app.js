const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000; //this is to make it deployable on heroku.
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.use(expressLayouts);

app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);


mongoose.connect("mongodb://localhost/quotes-app");

app.get('/', (req, res) => res.render('index'));

const router = require('./config/routes');

app.use('/', router);

app.listen(port, () => console.log(`Running on port: ${port}`));
