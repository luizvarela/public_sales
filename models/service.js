var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Service', {
	categoria      : String,
	valor          : Number,
	nome           : String,
	tipo_pagamento : Number,
	inicio_servico : Date,
	duracao_dias   : Number,
	periodo        : String,
	vendedor       : Schema.Types.Mixed,
});