var Compra = require('../models/compra.js');
var Servico = require('../models/service.js');
var Usuario = require('../models/usuario.js');
var mongoose = require ('mongoose');
var ObjectId = mongoose.Types.ObjectId;

exports.incluir = function(req, res){
	id_servico = req.body.id_servico;
	id_comprador = req.body.id_comprador;

	compradorBusca = Usuario.findById(id_comprador, function(err, compradorBusca){
		if(err) 
			res.send(err);
		else{
			if(compradorBusca == null){
				console.log("Não foi possível localizar o usuario de id:'"+id_comprador+"'. ");
				return res.send("Não foi possível localizar o usuario de id:'"+id_comprador+"'. ");
			}
			servicoBusca = Servico.findById(id_servico, function(err, servicoBusca){
				if(servicoBusca == null){
					console.log("Não foi possível localizar o serviço de id:'"+id_servico+"'. ");
					return res.send("Não foi possível localizar o serviço de id:'"+id_servico+"'. ");
				}
				Compra.findOne({"itemDeVenda._id": ObjectId(id_servico)}).
				exec(function(err, compraBusca){
					if(compraBusca != null){
						console.log("O serviço de id '"+id_servico+"' já foi comprado pelo usuario '"+compraBusca.comprador.nome+"'.");						
						res.json("O serviço de id '"+id_servico+"' já foi comprado pelo usuario '"+compraBusca.comprador.nome+"'.");
					}else{
						compra = new Compra({
							data            : new Date(),
							valor           : servicoBusca.valor,
							tipoDePagamento : req.body.tipo_de_pagamento,
							tipoEntrega     : req.body.tipo_entrega,
							itemDeVenda     : servicoBusca,
							comprador       : compradorBusca,
						});

						compra.save(function(err){
							if(err)
								res.send(err);
							else
								console.log("Compra criada");
							console.log(compra);
						});
						res.json(compra);
					}
				});	
			});
}
});


};