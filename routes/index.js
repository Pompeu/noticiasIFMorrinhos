var express = require('express'),
	router 	= express.Router();
	

router.get('/' , function(req , res){
	res.render('index');	
});

//renderizando noticias com callback
router.get('/json' , function(req , res){
	res.json(require('../noticias.json'));
});

//renderizando noticias com callback
router.get('/jsonif' , function(req , res){
	res.json(require('../noticiasIF.json'));
});



module.exports = router;
