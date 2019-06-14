var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorieSchema = new Schema({
    name: {type: String, required: true, max: 100},
    sub_categories: {type: Array, required: false},
    
});


// Export the model
module.exports = mongoose.model('Product', CategorieSchema);