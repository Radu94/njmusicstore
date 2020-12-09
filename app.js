const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const favicon = require('serve-favicon');
const trackController = require('./controllers/trackController');
const loginController = require('./controllers/loginController');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.static('./public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

trackController(app);
loginController(app);

const db_user = 'test_user';
const db_password = 'test_pass';
const cluster_url = 'claudiacocioaba.ilhjc.mongodb.net';
const db_name = 'musicstore';
const db_uri = `mongodb+srv://${db_user}:${db_password}@${cluster_url}/${db_name}?retryWrites=true`;   
 
mongoose.connect(db_uri)
    .then(result => {
        console.log("connected!");
        app.listen(4000);
        console.log('server listening');
    })
    .catch(err => {
        console.log(err);
    });