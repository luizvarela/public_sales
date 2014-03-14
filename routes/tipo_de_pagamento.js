exports.list = function(req, res){
  	var tipos_de_pagamento = [
  								{nome:'Dinheiro',parcela:'1'},
  								{nome:'Master Card',parcela:'1'},
  								{nome:'Master Card',parcela:'2'},
  								{nome:'Master Card',parcela:'3'},
  								{nome:'Master Card',parcela:'4'},
  								{nome:'Master Card',parcela:'5'},
  								{nome:'Master Card',parcela:'6'},
  								{nome:'Master Card',parcela:'7'},
  								{nome:'Master Card',parcela:'8'},
  								{nome:'Master Card',parcela:'9'},
  								{nome:'Master Card',parcela:'10'},
  								{nome:'Visa',parcela:'1'},
  								{nome:'Visa',parcela:'2'},
  								{nome:'Visa',parcela:'3'},
  								{nome:'Visa',parcela:'4'},
  								{nome:'Visa',parcela:'5'},
  								{nome:'Visa',parcela:'6'},
  								{nome:'Visa',parcela:'7'},
  								{nome:'Visa',parcela:'8'},
  								{nome:'Visa',parcela:'9'},
  								{nome:'Visa',parcela:'10'},
  							];
	res.json(tipos_de_pagamento);  							
};