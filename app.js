const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const favicon = require('serve-favicon');
const app = express();
const trackController = require('./controllers/trackController');
const loginController = require('./controllers/loginController');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('./public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//passport
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

//dotenv
const dotenv = require('dotenv');
dotenv.config();

//rotes
const routes = require('./routes/routes')
app.use(routes);

//mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://' + process.env.MONGOUSER + ':' + process.env.MONGOPASSWORD + '@cluster0.jlrkv.mongodb.net/' + process.env.MONGODBNAME + '?retryWrites=true&w=majority', { useNewUrlParser: true }).catch((err) => {
  console.log(err);
});

app.listen(4000);
console.log('server listening');