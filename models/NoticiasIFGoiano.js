var	request = require('request'),
	cheerio = require('cheerio'),
	trim = require('../plugins').trin,
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
				var titulos = $(artigos).find('.titulo');
				var texto 	= $(artigos).find('.entry');
				objToJson.push({"Titulo" : trim($(titulos).text()) ,
					 			"Texto" : trim($(texto).text()),
					 			"Goiania" : "Goiania" }); 		
			});
			$("#complementaresquerda").each(function(index,artigos){
				var titulos = $(artigos).find('.titulo');
				var texto 	= $(artigos).find('.entry');
				objToJson.push({"Titulo" : trim($(titulos).text()) ,
					 			"Texto" : trim($(texto).text()),
					 			"Goiania" : "Goiania" });		
			});
			$("#complementardireita").each(function(index,artigos){
				var titulos = $(artigos).find('.titulo');
				var texto 	= $(artigos).find('.entry');
				objToJson.push({"Titulo" : trim($(titulos).text()) ,
					 			"Texto" : trim($(texto).text()),
					 			"Goiania" : "Goiania" });		
			});
		}		
	});
	if(objToJson !== 'undefined')
		gravarNoticias(objToJson);
		
}

function gravarNoticias(json){
	fs.writeFile("noticiasIF.json", JSON.stringify(json));
}
