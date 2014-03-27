var mongoose = require('mongoose');

module.exports = mongoose.model('Usuario', {
	nome     : String,
	cpfCnpj  : String,
	endereco : String,
	email    : String,
	telefone : String,
});