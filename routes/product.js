var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/product');

// test url in product controller
router.get('/test', product_controller.test);
console.log('=================')

module.exports = router;