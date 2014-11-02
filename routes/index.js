var express = require('express'),
	router 	= express.Router(),
	jsdom 	= require('jsdom'),
	fs		= require('fs'),
	objToJson,
	jquery 	= fs.readFileSync("public/javascripts/jquery.js", "utf-8");
/* GET home page. */
/*router.get('/heoaheoaheohahehaehahehae12391237129837', function(req, res) {
 	
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
		        	console.log(err);
		    	} else {
		        	console.log("The file was saved!");
		    	}
			});
           	return res.json(objToJson);
        }
      });      
});*/
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

router.get('/' , function(req , res){
	
	var a = new Date();
	
	if(a.getMinutes() == 15 || a.getHours() == 45 ){
		atualizar();
		return res.json(objToJson);
		
	}
	var dados = fs.readFileSync('noticias.json');
	 	return res.json(JSON.parse(dados));
		
	
});
 

module.exports = router;
