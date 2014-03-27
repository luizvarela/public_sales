var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Lance', {	
	data_hora : Date,
	valor     : Number,
	produto   : Schema.Types.Mixed,
	comprador : Schema.Types.Mixed
});