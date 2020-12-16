var express=require('express');
var expressLayouts = require('express-ejs-layouts');
var session=require('express-session');
var favicon=require('serve-favicon');
var app=express();
var trackController=require('./controllers/trackController');
var loginController=require('./controllers/loginController');
var bodyParser=require('body-parser');
app.set('view engine','ejs');
app.use(expressLayouts);
app.use(express.static('./public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

const dotenv = require('dotenv');
dotenv.config();

const routes =require('./routes/routes')
app.use(routes);

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://' + process.env.MONGOUSER + ':' + process.env.MONGOPASSWORD + '@cluster0.jlrkv.mongodb.net/'+process.env.MONGODBNAME+'?retryWrites=true&w=majority',{ useNewUrlParser: true}).catch((err) => {
  console.log(err);
});

app.listen(4000);
console.log('server listening');