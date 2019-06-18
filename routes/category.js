var express = require('express');
var router = express.Router();

var category_controller = require('../controllers/category');

// test url in product controller
router.post('/create', category_controller.category_create);


module.exports = router;