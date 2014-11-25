var	request = require('request'),
	cheerio = require('cheerio'),
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
			objToJson = [ ];
			$("#noticias").each(function(index,artigos){
				var titulos = $(artigos).find('.titulo');
				var texto 	= $(artigos).find('.entry');
				objToJson.push({"Titulo" : myTrim($(titulos).text()) ,
					 			"Texto" : myTrim($(texto).text()) }); 		
			});
			$("#complementaresquerda").each(function(index,artigos){
				var titulos = $(artigos).find('.titulo');
				var texto 	= $(artigos).find('.entry');
				objToJson.push({"Titulo" : myTrim($(titulos).text()) ,
					 			"Texto" : myTrim($(texto).text()) }); 		
			});
			$("#complementardireita").each(function(index,artigos){
				var titulos = $(artigos).find('.titulo');
				var texto 	= $(artigos).find('.entry');
				objToJson.push({"Titulo" : myTrim($(titulos).text()) ,
					 			"Texto" : myTrim($(texto).text()) }); 		
			});
		}		
	});
	gravarNoticias(objToJson);
		
}
/*
	Thx to W3c Schol for this algoritmn
	http://www.w3schools.com/jsref/jsref_trim_string.asp
*/
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

function gravarNoticias(json){
	fs.writeFile("noticiasIF.json", JSON.stringify(json));
}
