const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
// const favicon = require('serve-favicon');
const { authentication, database, dotenv } = require('./config');
const { indexController, cartController, loginController , registrationController, trackController } = require('./controllers');
const bodyParser = require('body-parser');
const passport = require('passport');

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('./public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());
authentication.configure(passport);

loginController(app, passport);
registrationController(app);
indexController(app);
trackController(app);
cartController(app);

database.init().then(() => {

    const port = process.env.APP_PORT || 4000;

    app.listen(port);

    console.log(`Listening on port ${port}`);
    console.log(`Open app using http://localhost:${port}`);
});
