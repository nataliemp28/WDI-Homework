const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const router = require('./config/routes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/beer-api');

app.use(express.static(`${__dirname}/public`));

app.use('/api', router);

app.listen(port, () => console.log("Express is running on port: " + port));


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODBmNzdmMzBlNzNjMmMwNTBkYmNlOGQiLCJ1c2VybmFtZSI6ImdpcmxzIiwiaWF0IjoxNDc3NDA4NzU1LCJleHAiOjE0Nzc0OTUxNTV9.JTgej54VzF0-KCBMQnxkhsKW3rxuYFccx9xNlx8fbLM

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODBmNzdmMzBlNzNjMmMwNTBkYmNlOGQiLCJ1c2VybmFtZSI6ImdpcmxzIiwiaWF0IjoxNDc3NDA4OTExLCJleHAiOjE0Nzc0OTUzMTF9.w1TjWS_zce1xktoKakhMQtG4mUkhQfOhzHkS706CxqA
