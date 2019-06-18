var mongoose = require('mongoose'),
Schema = mongoose.Schema,
relationship = require("mongoose-relationship");


var CategorieSchema = new Schema({
    name: {type: String, required: true, max: 100},
});


// var MainCategorieSchema = new Schema({
//     name: {type: String, required: true, max: 100},
    
    
// });

// var Level1CategorieSchema = new Schema({
//     name: {type: String, required: true, max: 100},
    
    
// });

// var Level2CategorieSchema = new Schema({
//     name: {type: String, required: true, max: 100},
    
    
// });

var ParentSchema = new Schema({
	name: {type: String, required: true, max: 100},
    children:[{ type:Schema.ObjectId, ref:"Child" , required: true}]
});

var Parent = mongoose.model("Parent", ParentSchema);
 
var ChildSchema = new Schema({
	name: {type: String, required: true, max: 100},
    parent: { type:Schema.ObjectId, ref:"Parent", childPath:"children" }
});

ChildSchema.plugin(relationship, { relationshipPathName:'parent' });

var Child = mongoose.model("Child", ChildSchema)


// Export the model
module.exports = mongoose.model('Category', ParentSchema);