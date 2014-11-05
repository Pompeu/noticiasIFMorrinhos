var express = require('express'),
	router 	= express.Router(),
	request = require('request'),
	cheerio = require('cheerio'),
	fs 		= require('fs'),
	objToJson,
	target = "http://ifgoiano.edu.br/morrinhos/home/index.php";

function atualizar(){
	request(target, function(err, response, body){

		if(!err && response.statusCode === 200){
			$ = cheerio.load(body);
			objToJson = [ ];
			$(".contentpaneopen ").each(function(index,artigos){
				var titulos = $(artigos).find('h2');
				var texto = $(artigos).find('p');
				
				objToJson.push({ "Titulo" : myTrim($(titulos).text()) ,
					 "Texto" : myTrim($(texto).text()) }); 		
				
			});
		}
		fs.writeFile("noticias.json", JSON.stringify(objToJson) , function(err) {
			if(err) {
				throw err;
			} else {
				console.log("The file was saved!");
			}
		});
		
	});	
}

/*
	Thx to W3c Schol for this algoritmn
	http://www.w3schools.com/jsref/jsref_trim_string.asp
*/
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

router.get('/' , function(req , res){
	atualizar();
	var dados = fs.readFileSync('noticias.json');	 
	res.json(JSON.parse(dados));
});

router.get('/json' , function(req , res , next){ 
	res.jsonp(JSON.parse(fs.readFileSync('noticias.json')));
});

router.get('/dl' , function(req , res){ 
	res.download('noticias.json');	
});

module.exports = router;
