const passport = require('passport');
const express = require('express');
const router = express.Router();
const loginController = require('./../controllers/loginController');

router.get("/login", loginController.getLogin);
router.post("/login",
    passport.authenticate("local", { failureRedirect: "/error" }),
    loginController.postLogin
);
router.get("/error", loginController.getError);
router.get("/logout", loginController.getLogout);

module.exports = router;