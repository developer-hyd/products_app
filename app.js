
var express = require('express');
// var bodyParser = require('body-parser');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var category = require('./routes/category'); // Imports routes for the category
var app = express();


// mongoose connection
var mongoose = require('mongoose');
// var dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
var dev_db_url = 'mongodb+srv://vivekmunjewar:mongouser@productapp-fw2ry.mongodb.net/test?retryWrites=true&w=majority'
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/products', product);
app.use('/category', category);


var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
