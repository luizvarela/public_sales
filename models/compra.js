var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Compra', {
	data_inicial   : Date,
	valor          : Number,
	tipo_pagamento : Number,
	tipo_entrega   : String,
	usuario        : Schema.Types.Mixed,
	item_de_venda  : Schema.Types.Mixed,

});