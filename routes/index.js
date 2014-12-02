var express = require('express'),
	router 	= express.Router(),
	fs 		= require('fs'),
	noticias = require('../models/NoticiasMorrinhos.js'),
	noticiasIF = require('../models/NoticiasIFGoiano.js');

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
//renderizando noticias com callback
router.get('/jsonif' , function(req , res){
	fs.readFile('noticiasIF.json',function(err,noticiasIF){
		if(err){
			noticiasIF.atualizar();
			throw err;	
		}
		res.jsonp(JSON.parse(noticiasIF));
	});
	
});
//disponibilizando json para dl
router.get('/dl' , function(req , res){ 
	res.download('noticias.json');	
});
//atualizando noticias cada 30 minutos
setInterval(function(){
	noticias.atualizar();
	noticiasIF.atualizar();
	console.log(new Date().getSeconds());
},15000);



module.exports = router;
