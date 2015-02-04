var	request = require('request'),
	cheerio = require('cheerio'),
	trim = require('../plugins').trin,
	fs 		= require('fs'),
	objToJson,
	target = "http://ifgoiano.edu.br/morrinhos/home/index.php";


exports.atualizar = function(){
	request(target, function(err, response, body){
		if(!err && response.statusCode === 200){
			$ = cheerio.load(body);
			objToJson = new Array();
			$(".contentpaneopen ").each(function(index,artigos){
				var titulos = $(artigos).find('h2');
				var texto 	= $(artigos).find('p');
				var data 	= $(artigos).find('.createdate');		
				objToJson.push({"Titulo" : trim($(titulos).text()) ,
					 			"Texto" : trim($(texto).text()),
					 			"Data" : trim($(data).text()),
					 			"Morrinhos" : "Morrinhos"}); 		
			});
		}		
	});
	if(objToJson !== 'undefined')
		gravarNoticias(objToJson);
	
}

function gravarNoticias(json){
	fs.writeFile("noticias.json", JSON.stringify(json));
}
