var express = require('express'),
	router 	= express.Router()
	fs 		= require('fs'),
	noticias = require('../models/noticias.js');


router.get('/' , function(req , res){
	res.render('index');
});
//renderizando noticias com callback
router.get('/json' , function(req , res){
	fs.readFile('noticias.json',function(err,noticias){
		if(err){
			noticias.atualizar();
			throw err;	
		}
		res.jsonp(JSON.parse(noticias));
	});
  	
});
//disponibilizando json para dl
router.get('/dl' , function(req , res){ 
	res.download('noticias.json');	
});
//atualizando noticias cada 3 minutos
setInterval(noticias.atualizar,1800000);

module.exports = router;
