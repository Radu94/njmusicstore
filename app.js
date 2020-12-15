const express=require('express');
const expressLayouts = require('express-ejs-layouts');
const app=express();
app.set('view engine','ejs');
app.use(expressLayouts);
app.use(express.static('./public'));

// dotenv
const dotenv = require('dotenv');
dotenv.config();

//passport
const passport = require('./config/passport')
app.use(passport.initialize());
app.use(passport.session());

// Routes
const routes = require('./routes/routes');
app.use(routes);

const trackController=require('./controllers/trackController');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
trackController(app);

//mongodb connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://' + process.env.MONGOUSER + ':' + process.env.MONGOPASSWORD + '@cluster0.jlrkv.mongodb.net/'+process.env.MONGODBNAME+'?retryWrites=true&w=majority', { useNewUrlParser: true })
app.listen(4000);
console.log('server listening');