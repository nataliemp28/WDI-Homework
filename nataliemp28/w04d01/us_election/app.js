const express = require('express');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const router = require('./config/routes');

const app = express();
const port = process.env.PORT || 8000; //this is to make it deployable on heroku.

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.use(expressLayouts);

app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));

// app.get('/index', function(req,res) {
//   res.render('index', { name: "US General Election 2016", image: "/images/us_election.png" });
//
// });
// app.get('/hilary', function(req,res) {
//   res.render('hilary', { name: "Hilary Clinton", image: "/images" });
// });
// app.get('/donald', function(req,res) {
//   res.render('donald', { name: "Donald Trump", image: "/images/trump.jpg" });
// });

app.use('/', router);

app.listen(port, () => console.log(`Running on port: ${port}`));
