// file: plugins/trin.js - created at 2015-01-22, 07:58
function gravarNoticiasHandler(json) {
  debug('gravar noticias Plugin');
  
  var Noticias = require('../models/noticias'),
      push = require("./push");
		Noticias
		.create( json ,function(err , noticias) {
			if(!err){
        debug(noticias);
				push();
			}
		});

}
module.exports = exports = gravarNoticiasHandler;
