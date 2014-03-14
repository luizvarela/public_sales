var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
	nome           : String,
	valor          : Number,
	descricao      : String,
	tipo_pagamento : Number,
	categoria      : String,
	valor_inicial  : Number,
	valor_final    : Number,
	tempo_leilao   : Date, 
	data_inicial   : Date,
});