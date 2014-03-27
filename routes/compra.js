var Compra = require('../models/compra.js');

exports.create = function(req, res){
  
  var compra = JSON.parse(req.params('compra'))
  

  compra = new Compra({
  
  data_inicial   : new Date(),
  valor          : compra.valor,
  tipo_pagamento : compra.tipo_pagamento,
  tipo_entrega   : compra.tipo_entrega,
  usuario        : compra.usuario,
  item_de_venda  : compra.item_de_venda,

  });

  Compra.save(function (err) {
    if (err)
      res.send(err);
    else
      console.log("created");
  });
  res.json(compra);
}

exports.list = function(req, res){
  Compra.find({lance.usuario},function(err, compra) {
    if (err)
      res.send(err)
    if(compra.usuario == usuario.session)
    res.json(compras);
  });
};