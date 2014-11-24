var	request = require('request'),
	cheerio = require('cheerio'),
	fs 		= require('fs'),
	objToJson,
	target = "http://ifgoiano.edu.br/morrinhos/home/index.php",
	inicio,fim;


exports.atualizar = function(){
	request(target, function(err, response, body){
		if(!err && response.statusCode === 200){
			$ = cheerio.load(body);
			objToJson = [ ];
			$(".contentpaneopen ").each(function(index,artigos){
				var titulos = $(artigos).find('h2');
				var texto 	= $(artigos).find('p');
				objToJson.push({"Titulo" : myTrim($(titulos).text()) ,
					 			"Texto" : myTrim($(texto).text()) }); 		
			});
		}		
	});
	gravarNoticias(objToJson);
		inicio = new Date();
}
/*
	Thx to W3c Schol for this algoritmn
	http://www.w3schools.com/jsref/jsref_trim_string.asp
*/
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

function gravarNoticias(json){
	fim = new Date();
	fs.writeFileSync("noticias.json", JSON.stringify(json));
	console.log(Math.abs(inicio - fim));
}