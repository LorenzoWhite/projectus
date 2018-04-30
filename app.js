const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database');
const cors = require('cors');
const path = require('path');

//initialize app
const app = express();

const users = require('./routes/users')

//initialize mongoose
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to database "+config.database);
});

//bodyparser middleware
app.use(cors());
app.use(bodyParser.json());


//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//set backend routes
app.use('/users', users);


//deploy app
const port = 3000;

app.listen(port, ()=>(
  console.log("server started on port "+ port)
))
