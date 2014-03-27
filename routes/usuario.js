var Usuario = require('../models/usuario.js');

exports.incluir = function(req, res){
	usuario = new Usuario({
    	nome     : req.body.nome,		
		cpfCnpj  : req.body.cpfCnpj.replace('.', '').replace('.','').replace('/', '').replace('-',''),
		endereco : req.body.endereco,
		email    : req.body.email,
		telefone : req.body.telefone,
    });

    usuario.save(function (err) {
    	if (err)
      		res.send(err);
    	else
    		console.log("created");
  	});

 	res.json(usuario);
}