var express = require('express'),
	router 	= express.Router(),
	jsdom 	= require('jsdom'),
	fs		= require('fs'),
	objToJson,
	jquery 	= fs.readFileSync("public/javascripts/jquery-min.js", "utf-8");

function atualizar(){
	 jsdom.env({
        url: "http://ifgoiano.edu.br/morrinhos/home/index.php",
        src: [jquery],
        done: function (errors, window) {
           	var $ = window.$;
           	objToJson = [ ];
           	var titulo = "";
           	$("h2:not(:last)").each(function (){
           		titulo = myTrim($(this).text());
           		objToJson.push({ "Titulo" : titulo });  
           	});
           	$("p:not(:last)" ).each(function (){
           	 	objToJson.push({ "Texto" : $(this).text() });  
           	});
		    fs.writeFile("noticias.json", JSON.stringify(objToJson) , function(err) {
		    	if(err) {
		        	throw err;
		    	} else {
		        	console.log("The file was saved!");
		    	}
			});
           	return objToJson;
        }
      });
}
//class="blog_more"
/*
	Thx to W3c Schol for this
	algoritmn
	http://www.w3schools.com/jsref/jsref_trim_string.asp
*/
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

var atualizarJson = function(time , callback, outer){

	outer();
	var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        
    }
    callback();
}
router.get('/' , function(req , res){
	
	var dados = fs.readFileSync('noticias.json');
	 
	atualizarJson(1000, atualizar, res.json(JSON.parse(dados)));
	
	
});
router.get('/json' , function(req , res){ 
	res.send(fs.readFileSync('noticias.json'))	
});

module.exports = router;
