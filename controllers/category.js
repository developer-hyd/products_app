var Category = require('../models/category');


exports.category_create = function (req, res) {
    var category = new Category(
        {
            name: req.body.name,
            //children: req.body.children
        }
    );
    category.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Category Created successfully')
    })
};

