const getIndex = (req, res) => {
    res.render("index", {
        username: req.query.username || "",
        title: "Home",
    });
};

module.exports = { getIndex };