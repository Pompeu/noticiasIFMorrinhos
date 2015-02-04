// file: middlewares/atulizarnoticias.js - created at 2015-01-15, 06:28
function atulizarnoticiasHandler() {
  // start here with atulizarnoticias.js
  	var noticias = require('../models');
	//atualizando noticias cada 10 segundos
	setInterval(function(){
		debug('atualizando noticias')
		noticias.Morrinhos.atualizar();
		noticias.Goiania.atualizar();
	},1000);
	
}
module.exports = exports = atulizarnoticiasHandler;
