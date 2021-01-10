const getLogin = (req, res) => {
    res.render("login", {username: "", title: "Login", errormessage: ""});
};

const getLogout = (req, res) => {
    req.logout();
    res.redirect("/");
};

const getError = (req, res) => {
    res.render("login", {
        username: "",
        title: "Login",
        errormessage:
            "An error occured while logging in. Please check your username and password!",
    });
};

const postLogin = (req, res) => {
    res.redirect("/success?username=" + req.user.username);
};

module.exports = {getLogin, getLogout, getError, postLogin};
