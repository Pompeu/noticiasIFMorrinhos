var express = require('express'),
	noticiasController  = require('../controllers').noticias,
	noticiasMiddlerware = require('../middlewares').noticias,
	router 	= express.Router();
	

router.get('/' , function(req , res){
	res.render('index');	
});

//renderizando noticias com callback
router.get('/noticias',noticiasMiddlerware ,noticiasController)
	

module.exports = router;
