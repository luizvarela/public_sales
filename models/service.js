var mongoose = require('mongoose');

module.exports = mongoose.model('Service', {
	nome           : String,
	valor          : Number,
	descricao      : String,
	tipo_pagamento : Number,
	categoria      : String,
	inicio_servico : Date,
	duracao_dias   : Number,
	periodo        : Number,
});