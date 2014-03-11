var Product = require('../models/product.js');

exports.list = function(req, res){
  Product.find(function(err, products) {
		if (err)
			res.send(err)
		res.json(products);
	});
};

exports.teste = function(req, res) {
	var record = new Product({name:'Nome',description:'Descricao'});
	record.save(function(err){
		if(err){
			console.log(err);
			res.status(500).json({status: 'fail'});
		} else {
			res.json({status: 'success'});
		}
	});
};