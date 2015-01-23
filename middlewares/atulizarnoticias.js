// file: middlewares/atulizarnoticias.js - created at 2015-01-15, 06:28
function atulizarnoticiasHandler() {
  // start here with atulizarnoticias.js
  	noticias 	= require('../models/NoticiasMorrinhos.js'),
	noticiasIF 	= require('../models/NoticiasIFGoiano.js');

	//atualizando noticias cada 10 minutos

	setInterval(function(){
		debug('atualizando noticias')
		noticias.atualizar();
		noticiasIF.atualizar();
	},25000);
	
}
module.exports = exports = atulizarnoticiasHandler;
