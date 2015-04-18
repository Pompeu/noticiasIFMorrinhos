var	request = require('request'),
	cheerio = require('cheerio'),
	plugins = require('../plugins'),
	fs 		= require('fs'),objToJson,
	target = "http://ifgoiano.edu.br/morrinhos/home/index.php";

exports.atualizar = function(){

	request(target, function(err, response, body){
		if(!err && response.statusCode === 200){
			$ = cheerio.load(body);
			objToJson = new Array();
			$(".contentpaneopen ").each(function(index,artigos){
				var titulo = $(artigos).find('h2');
				var texto 	= $(artigos).find('p');
				var data 	= $(artigos).find('.createdate');
				var lerMais = $(artigos).find('a');

				objToJson.push({
								"titulo" : plugins.trim($(titulo).text()) ,
					 			"texto" : plugins.trim($(texto).text()),
					 			"instituicao" : "Morrinhos" ,
					 			"lerMais" : "http://ifgoiano.edu.br"+lerMais.attr('href')
					 		}); 		
			});
		}		
	});
	
	if(objToJson !== 'undefined'){
		plugins.gravarnoticias(objToJson);
	}
	
};

