var express = require('express'),
	router 	= express.Router()
	fs 		= require('fs'),
	noticias = require('../models/noticias.js');

var not = function(){
	noticias.atualizar();
}  

router.get('/' , function(req , res){
	res.json(JSON.parse(fs.readFileSync('noticias.json','utf8')));
});

router.get('/json' , function(req , res){
	not();	
  	res.jsonp(JSON.parse(fs.readFileSync('noticias.json','utf8')));
});

router.get('/dl' , function(req , res){ 
	res.download('noticias.json');	
});

module.exports = router;
