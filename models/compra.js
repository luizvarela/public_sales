var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Compra',{
	data            : Date,
	valor           : Number,
	tipoDePagamento : Number,
	tipoEntrega     : String,
	itemDeVenda     : Schema.Types.Mixed,
	comprador       : Schema.Types.Mixed,
})