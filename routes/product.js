var Product = require('../models/product.js');

exports.create = function(req, res){
	product = new Product({
    name: req.body.name,
    description: req.body.description,
  });
  product.save(function (err) {
    if (err)
      res.send(err);
    else
    	console.log("created"); 
  });
 	res.send(product);
}

exports.list = function(req, res){
  Product.find(function(err, products) {
		if (err)
			res.send(err)
		res.json(products);
	});
};

exports.find = function(req, res){
	product = Product.findById(req.params.id, function (err, product) {
	  if (err) {
	  	return console.log(err);
	  } else {
	    return res.send(product);
	  }
	});
}

exports.delete = function(req, res){

}

exports.teste = function(req, res) {
	var record = new Product({
		name:'Nome',
		description:'Descricao'
	});
	record.save(function(err){
		if(err){
			console.log(err);
			res.status(500).json({status: 'fail'});
		} else {
			res.json({status: 'success'});
		}
	});
};