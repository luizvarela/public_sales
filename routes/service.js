var Service = require('../models/service.js');

exports.create = function(req, res){
  service = new Service({
  nome           : req.body.nome,
  valor          : req.body.valor,
  descricao      : req.body.descricao,
  tipo_pagamento : req.body.tipo_pagamento,
  categoria      : req.body.categoria,
  inicio_servico : req.body.inicio_servico,
  duracao_dias   : req.body.duracao_dias,
  periodo        : req.body.periodo 

  });
  service.save(function (err) {
    if (err)
      res.send(err);
    else
      console.log("created");
  });
  res.json(service);
}

exports.list = function(req, res){
  Service.find(function(err, services) {
    if (err)
      res.send(err)
    res.json(services);
  });
};
