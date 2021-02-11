const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const favicon = require('serve-favicon');

const app = express();
const { trackController } = require('./controllers/trackController');
const loginRouter = require('./routes/login');

const bodyParser = require('body-parser');
const passport = require('passport');

app.set('view engine','ejs');
app.use(expressLayouts);
app.use(express.static('./public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(loginRouter);
trackController(app);
app.use(passport.initialize());
app.use(passport.session());
app.listen(4000);
console.log('server listening');