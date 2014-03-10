var Product = require('../models/product.js');

exports.list = function(req, res){
  Product.find(function(err, products) {
		if (err)
			res.send(err)
		res.json(products);
	});
};