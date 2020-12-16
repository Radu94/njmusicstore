const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const loginRoutes = require('./routes/loginRoutes');
const trackRoutes = require('./routes/trackRoutes');
const auth = require('./controllers/auth');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.static('./public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({secret: process.env.SESSION_SECRET}));
app.use(passport.initialize());
app.use(passport.session());
auth.passportSetup();

app.use(loginRoutes);
app.use(trackRoutes);

const db_uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_URL}/${process.env.DB_NAME}?retryWrites=true`;   

mongoose.connect(db_uri)
    .then(result => {
        app.listen(process.env.PORT);
    })
    .catch(err => {
        console.log(err);
    });