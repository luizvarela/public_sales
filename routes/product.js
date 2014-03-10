var Product = require('.models/product');

module.exports = function (app) {
	app.get('api/products'. function(req, res){
		Product.find(function(err, products) {
			if (err)
				res.send(err)
			res.json(products);
		});
	});
}