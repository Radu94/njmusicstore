const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const favicon = require('serve-favicon');
const database = require('./config/database');
const trackController = require('./controllers/trackController');
const loginController = require('./controllers/loginController');
const bodyParser = require('body-parser');
const server = require('./config/server');

const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('./public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

trackController(app);
loginController(app);

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

database.init().then(() => {
    app.listen(server.port);
    console.log(`Listening on port ${server.port}`);
    console.log(`Open app using http://localhost:${server.port}`);
});
