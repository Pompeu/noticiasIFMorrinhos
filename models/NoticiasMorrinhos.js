var	request = require('request'),
	cheerio = require('cheerio'),
	trim = require('../plugins').trin,
	Noticias = require('./noticias'),
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
				var lerMais = $(artigos).find('a');
				
				objToJson.push(
								{"titulo" : trim($(titulos).text()) ,
					 			"texto" : trim($(texto).text()),
					 			"instituicao" : "Morrinhos" ,
					 			"lerMais" : "http://ifgoiano.edu.br/"+lerMais.attr('href')}); 		
			});
		}		
	});
	if(objToJson !== 'undefined')
		gravarNoticias(objToJson);
	
}

function gravarNoticias(json){
	debug('gravar noticias morrinhos');
	Noticias
		.create( json ,function(err , noticias) {
			console.log(err || noticias );
		})
}
