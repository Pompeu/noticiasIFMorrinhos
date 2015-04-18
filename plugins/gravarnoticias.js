// file: plugins/trin.js - created at 2015-01-22, 07:58
function gravarNoticiasHandler(json) {
  debug('gravar noticias Plugin');
  
  Noticias = require('../models/noticias'),
  push = require("../middlewares/push");
	
		Noticias
		.create( json ,function(err , noticias) {
			//debug(err || noticias);
			if(!err && noticias){
				push();
			}
		});

}
module.exports = exports = gravarNoticiasHandler;
