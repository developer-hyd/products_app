
var express = require('express');
// var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var app = express();
app.use('/products', product);


var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
