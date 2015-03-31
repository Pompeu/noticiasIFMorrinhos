var	request = require('request'),
	cheerio = require('cheerio'),
	trim = require('../plugins').trin,
	Noticias = require('./noticias'),
	fs 		= require('fs'),
	objToJson,
	target = "http://www.ifgoiano.edu.br/home/";

/**	
	#noticias
	#complementaresquerda
	#complementardireita
**/
exports.atualizar = function(){
	request(target, function(err, response, body){
		if(!err && response.statusCode === 200){
			$ = cheerio.load(body);
			objToJson = new Array();
			$("#noticias").each(function(index,artigos){
				var titulo = $(artigos).find('.titulo');
				var texto 	= $(artigos).find('.entry');
				var lerMais = $(artigos).find('a');
				
				objToJson.push({
								"titulo" : trim($(titulo).text()) ,
					 			"texto" : trim($(texto).text()),
					 			"instituicao" : "Goiania" ,
					 			"lerMais" : lerMais.attr('href')
					 		}); 		
			});
			$("#complementaresquerda").each(function(index,artigos){
				var titulo = $(artigos).find('.titulo');
				var texto 	= $(artigos).find('.entry');
				var lerMais = $(artigos).find('a');
				
				objToJson.push({
								"titulo" : trim($(titulo).text()) ,
					 			"texto" : trim($(texto).text()),
					 			"instituicao" : "Goiania",
					 			"lerMais" : lerMais.attr('href')
					 		});		
			});
			$("#complementardireita").each(function(index,artigos){
				var titulo = $(artigos).find('.titulo');
				var texto 	= $(artigos).find('.entry');
				var lerMais = $(artigos).find('a');

				objToJson.push({
								"titulo" : trim($(titulo).text()),
					 			"texto" : trim($(texto).text()),
					 			"instituicao" : "Goiania" ,
					 			"lerMais" : lerMais.attr('href')
					 		});		
			});
		}		
	});
	if(objToJson !== 'undefined')
		gravarNoticias(objToJson);
		
}

function gravarNoticias(json){
	debug('gravar noticias goiania')
	Noticias
		.create( json ,function(err , noticias) {
			debug(err || noticias );
		})
}
