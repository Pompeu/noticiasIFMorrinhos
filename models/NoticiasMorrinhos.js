var	request = require('request'),
	cheerio = require('cheerio'),
	fs 		= require('fs'),
	objToJson,
	target = "http://ifgoiano.edu.br/morrinhos/home/index.php";


exports.atualizar = function(){
	request(target, function(err, response, body){
		if(!err && response.statusCode === 200){
			$ = cheerio.load(body);
			objToJson = [ ];
			$(".contentpaneopen ").each(function(index,artigos){
				var titulos = $(artigos).find('h2');
				var texto 	= $(artigos).find('p');
				var data 	= $(artigos).find('.createdate');		
				objToJson.push({"Titulo" : myTrim($(titulos).text()) ,
					 			"Texto" : myTrim($(texto).text()),
					 			"Data" : myTrim($(data).text())}); 		
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
	fs.writeFile("noticias.json", JSON.stringify(json));
}
