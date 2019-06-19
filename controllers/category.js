var Category = require('../models/category');


exports.category_create = function (req, res) {
    var children = req.body.children
    var i = children.entries()
    var child = []
    let result = i.next()
    while (!result.done) {
    console.log(result.value); // 1 3 5 7 9
    child.push(result.value)
    result = i.next();
 }

    console.log("================", children)
    children_array = [children._id]
    var category = new Category(
        {
            name: req.body.name,
            children: child
        }
    );
    console.log(category)
    category.save(function (err) {
        if (err) {
            console.log(err)
            res.send('Error Created successfully')
        }
        res.send('Category Created successfully')
    })
};




let res = i.next();
while (!res.done) {
 console.log(res.value); // 1 3 5 7 9
 res = i.next();
}