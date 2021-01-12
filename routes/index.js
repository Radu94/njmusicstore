const express = require('express');
const router = express.Router();
const indexController = require('./../controllers/indexController');

router.get("/", indexController.getIndex);
router.get("/index", indexController.getIndex);
router.get("/success", indexController.getIndex);

module.exports = router;