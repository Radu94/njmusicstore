let Track = require("../models/track");
let CartItem = require("../models/cart");


exports.trackList = (req, res) => {
    Track.find({},function(err,data)  {
        if(err) throw err;
        if(req.query.username!=null) {
           res.render("track-list",{tracks: data,title: "Product List", username:req.query.username});
        }
        else {
           res.render("track-list",{tracks: data,title: "Product List", username:""});
        }                 
    });
};

exports.trackAddPage = (req, res) => {
    Track.find({},function(err,data) {
        if(err) throw err;
        if(req.query.username!=null) {
            res.render("track-add",{tracks: data,title: "Add Track", username:req.query.username});
        }
        else {
            res.render("track-add",{tracks: data,title: "Add Track", username:""});
        }
    });
};

exports.trackAddAction = (req, res) => {
    Track(req.body).save(function(err,data){
        if(err) throw err;  
        if(req.query.username!=null) {          
            res.render("track-add",{tracks:data, title:"Track", username:req.query.username});
        }
        else {
            res.render("track-add",{tracks:data, title:"Track", username:""});
        }
    });       
};

exports.trackDelete = (req, res) => {
    Track.find({_id: req.params._id}).deleteOne(function(err,data) {                  
        if(err) throw err;
        if(req.query.username!=null) {
            res.render("track-add",{tracks: data,title: "Add Track", username:req.query.username});
        }
        else {
            res.render("track-add",{tracks: data,title: "Add Track", username:""});
        }                  
    });
};

exports.cartGet = (req, res) => {
    CartItem.find({username: req.query.username},function(err,data) {
        if(err) throw err;
        if(req.query.username!=null) {
            res.render("cart",{cartitems:data, title:"Shopping Cart", username:req.query.username});
        }
        else {
            res.render("cart",{cartitems:data, title:"Shopping Cart", username:""});
        }               
    });
};

exports.cartAddItem = (req, res) => {
    CartItem(req.body).save(function(err,data) {
        if(err) throw err;   
        if(req.query.username!=null) {
            res.render("cart",{cartitems:data, title:"Shopping Cart", username:req.query.username});
        }
        else {
            res.render("cart",{cartitems:data, title:"Shopping Cart", username:""});
        }
    });       
};

exports.cartDeleteItem = (req, res) => {
    CartItem.find({_id: req.params._id}).deleteOne(function(err,data) {                  
        if(err) throw err;
        if(req.query.username!=null) {
            res.render("cart",{cartitems:data, title:"Shopping Cart", username:req.query.username});
        }
        else {
            res.render("cart",{cartitems:data, title:"Shopping Cart", username:""});
        }              
    });
};
