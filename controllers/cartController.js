const cart = require("./../models/cart");

const postCart = (req, res) => {
    cart(req.body).save((err, data) => {
        if (err) throw err;
        if (req.query.username !== null) {
            res.render("cart", {
                cartitems: data,
                title: "Shopping Cart",
                username: req.query.username,
            });
        } else {
            res.render("cart", {
                cartitems: data,
                title: "Shopping Cart",
                username: "",
            });
        }
    });
};

const getCart = (req, res) => {
    cart.find({username: req.query.username}, (err, data) => {
        if (err) throw err;
        if (req.query.username != null) {
            res.render("cart", {
                cartitems: data,
                title: "Shopping Cart",
                username: req.query.username,
            });
        } else {
            res.render("cart", {
                cartitems: data,
                title: "Shopping Cart",
                username: "",
            });
        }
    });
};

const deleteCart = (req, res) => {
    cart.find({_id: req.params._id}).remove((err, data) => {
        if (err) throw err;
        if (req.query.username != null) {
            res.render("cart", {
                cartitems: data,
                title: "Shopping Cart",
                username: req.query.username,
            });
        } else {
            res.render("cart", {
                cartitems: data,
                title: "Shopping Cart",
                username: "",
            });
        }
    });
};

module.exports = {
    postCart,
    getCart,
    deleteCart
};