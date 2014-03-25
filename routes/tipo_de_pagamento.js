exports.list = function(req, res){
  	var tipos_de_pagamento = [
  								{nome:'Dinheiro'},
  								{nome:'Master Card - 1x'},
  								{nome:'Master Card - 2x'},
  								{nome:'Master Card - 3x'},
  								{nome:'Master Card - 4x'},
  								{nome:'Master Card - 5x'},
  								{nome:'Master Card - 6x'},
  								{nome:'Master Card - 7x'},
  								{nome:'Master Card - 8x'},
  								{nome:'Master Card - 9x'},
  								{nome:'Master Card - 10x'},
  								{nome:'Visa - 1x'},
  								{nome:'Visa - 2x'},
  								{nome:'Visa - 3x'},
  								{nome:'Visa - 4x'},
  								{nome:'Visa - 5x'},
  								{nome:'Visa - 6x'},
  								{nome:'Visa - 7x'},
  								{nome:'Visa - 8x'},
  								{nome:'Visa - 9x'},
  								{nome:'Visa - 10x'},
  							];
	res.json(tipos_de_pagamento);  							
};