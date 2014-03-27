var Product = require('../models/product.js');
var Usuario = require('../models/usuario.js');

exports.create = function(req, res){
	var id_vendedor = req.body.id_vendedor;

	Usuario.findById(id_vendedor, function(err, vendedorBusca){
		if(err){
			res.send(err)
		}
		else{
			if(vendedorBusca == null){
				return res.send("Não foi possível localizar o usuario de id:'"+id_vendedor+"'. ");
			}

			product = new Product({
				nome          : req.body.nome,
				valor         : req.body.valor,
				descricao     : req.body.descricao,
				tipo_pagamento: req.body.tipo_pagamento,
				categoria     : req.body.categoria,
				valor_inicial : req.body.valor_inicial,
				valor_final   : req.body.valor_final,
				tempo_leilao  : req.body.tempo_leilao,
				data_inicial  : new Date(),
				vendedor      : vendedorBusca
			});

			product.save(function (err) {
				if (err)
					res.send(err);
				else
					console.log("created");
			});

			res.json(product);
		}	
	});
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