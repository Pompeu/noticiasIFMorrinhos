var	request = require('request'),
	cheerio = require('cheerio'),
	plugins = require('../plugins'),
	fs 		= require('fs'),objToJson,
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
								"titulo" : plugins.trim($(titulo).text()) ,
					 			"texto" : plugins.trim($(texto).text()),
					 			"instituicao" : "Goiania" ,
					 			"lerMais" : lerMais.attr('href')
					 		}); 		
			});
			$("#complementaresquerda").each(function(index,artigos){
				var titulo = $(artigos).find('.titulo');
				var texto 	= $(artigos).find('.entry');
				var lerMais = $(artigos).find('a');
				
				objToJson.push({
								"titulo" : plugins.trim($(titulo).text()) ,
					 			"texto" : plugins.trim($(texto).text()),
					 			"instituicao" : "Goiania",
					 			"lerMais" : lerMais.attr('href')
					 		});		
			});
			$("#complementardireita").each(function(index,artigos){
				var titulo = $(artigos).find('.titulo');
				var texto 	= $(artigos).find('.entry');
				var lerMais = $(artigos).find('a');

				objToJson.push({
								"titulo" : plugins.trim($(titulo).text()),
					 			"texto" : plugins.trim($(texto).text()),
					 			"instituicao" : "Goiania" ,
					 			"lerMais" : lerMais.attr('href')
					 		});		
			});
		}		
	});
	
	if(objToJson !== 'undefined'){
		plugins.gravarnoticias(objToJson);
	}
	
};

