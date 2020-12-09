const express=require("express");
const expressLayouts = require("express-ejs-layouts");
const app=express();
const bodyParser=require("body-parser");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended:false}));

// Passport
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

// EJS
app.set("view engine","ejs");
app.use(expressLayouts);

// Routes
const routes = require("./routes/routes");
app.use(routes);

/* MONGOOSE SETUP */
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mihai:mihai@cluster0.j9czx.mongodb.net/musicapp?retryWrites=true&w=majority",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => {
    console.log("connected to mongodb");
    app.listen(4000);
    console.log("server listening");
})
.catch(err => {
    console.log(err);
});
