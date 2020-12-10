const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const favicon = require('serve-favicon');
const database = require('./config/database');
const cartController = require('./controllers/cartController');
const trackController = require('./controllers/trackController');
const loginController = require('./controllers/loginController');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('./public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

trackController(app);
cartController(app);
loginController(app);

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

database.init().then(() => {

    const port = process.env.APP_PORT || 4000;

    app.listen(port);

    console.log(`Listening on port ${port}`);
    console.log(`Open app using http://localhost:${port}`);
});
