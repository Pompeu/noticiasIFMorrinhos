var express = require('express'),
  	noticiasController  = require('../controllers').noticias,
  	noticiasMiddlerware = require('../middlewares').noticias,
  	router 	= express.Router();

router.get('/',noticiasMiddlerware ,noticiasController)

module.exports = router;
