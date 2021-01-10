const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const passport = require("passport");
const initDBConnection = require("./util/databaseConnection");
const authUser = require("./util/userAuthentication");
const loginRoutes = require("./routes/login");
const trackRoutes = require("./routes/track");
const cartRoutes = require("./routes/cart");
const indexRoutes = require("./routes/index");

// parser and serving static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

// connect to DB
initDBConnection();

// authentication
app.use(passport.initialize());
app.use(passport.session());
authUser(passport);

// js template
app.set("view engine", "ejs");
app.use(expressLayouts);

// routes
app.use(loginRoutes);
app.use(trackRoutes);
app.use(cartRoutes);
app.use(indexRoutes);

app.listen(4000);
