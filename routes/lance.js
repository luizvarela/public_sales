var Lance   = require('../models/lance.js');
var Product = require('../models/product.js');
var Usuario = require('../models/usuario.js');
var mongoose = require ('mongoose');
var ObjectId = mongoose.Types.ObjectId;

exports.incluir = function(req, res){
	var id_produto  = req.body.id_produto;
	var valor_lance = req.body.valor;
	var id_comprador   = req.body.id_comprador;

	Usuario.findById(id_comprador, function(err, comprador){
		if(err){
			res.send(err);
		}
		else{
			Product.findById(id_produto, function(err, product){
				if(err){
					res.send(err);
				} else {
					if(product == null){
						return res.send("Não foi possível localizar o produto de id:'"+id_produto+"'. ");
					}

					if(comprador == null){
						return res.send("Não foi possível localizar o comprador de id:'"+id_comprador+"'. ");	
					}

					if(valor_lance < product.valor_inicial){
						return res.send("o valor do lance deve ser maior que o valor inicial do leilão (R$"+product.valor_inicial+").");
					}

					Lance.findOne({"produto._id": ObjectId(id_produto)}).sort('-valor')
					.exec(function(err, lance){
						if(valor_lance <= lance.valor){
							console.log("Lance não autorizado");
							return res.send("o lance atual não pode ser menor/igual a um lance já realizado. <br> "+
								            "Valor do lance atual: R$"+lance.valor+" - "+lance.comprador.nome);	
						}
						else{
							lance = new Lance({
								data_hora : new Date(),
								valor     : valor_lance,
   	 							produto   : product, 
   		 						comprador : comprador
	  						});		

		  					lance.save(function(err){
  								if(err)
  									res.send(err);
  								else
			  						console.log("Lance criado");
			  						console.log(lance);
  							});
  							res.json(lance);	
						}
					});				
				}
			});
		}
	});
}