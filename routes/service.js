var Service = require('../models/service.js');
var Usuario = require('../models/usuario.js');

exports.create = function(req, res){
  var id_vendedor = req.body.id_vendedor;  

  Usuario.findById(id_vendedor, function(err, vendedorBusca){
    if(err)
      res.send(err)
    else{
      if(vendedorBusca == null){
        return res.send("Não foi possível localizar o usuario de id:'"+id_vendedor+"'. ");
      }

      service = new Service({
        categoria      : req.body.categoria,
        valor          : req.body.valor,
        nome           : req.body.nome,
        tipo_pagamento : req.body.tipo_pagamento,    
        inicio_servico : req.body.inicio_servico,
        duracao_dias   : req.body.duracao_dias,
        periodo        : req.body.periodo,
        vendedor       : vendedorBusca
      });

      service.save(function (err) {
        if (err)
          res.send(err);
        else
          console.log("Serviço criado com sucesso!");
      });
      res.json(service);    
    }
  });
}

exports.list = function(req, res){
  Service.find(function(err, services) {
    if (err)
      res.send(err)
    res.json(services);
  });
};

exports.comprar = function(req, res){

};
