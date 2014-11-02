var express = require('express'),
	router 	= express.Router(),
	jsdom 	= require('jsdom'),
	fs		= require('fs'),
	jquery 	= fs.readFileSync("public/javascripts/jquery.js", "utf-8");
/* GET home page. */
router.get('/', function(req, res) {
 	
 	  jsdom.env({
        url: "http://ifgoiano.edu.br/morrinhos/home/index.php",
        src: [jquery],
        done: function (errors, window) {
           var $ = window.$;
           var objToJson = [ ];
           var titulo = "";
           $("h2:not(:last)").each(function (){
           		titulo = myTrim($(this).text());
           		objToJson.push({ "Titulo" : titulo });  
           });
           $("p:not(:last)" ).each(function (){
           	 	objToJson.push({ "Texto" : $(this).text() });  
           });
           return res.json(objToJson);
        }
      });      
	 
});
/*
	Thx to W3c Schol for this
	algoritmn
	http://www.w3schools.com/jsref/jsref_trim_string.asp
*/
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

module.exports = router;
