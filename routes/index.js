var express = require('express'),
  	noticiasController  = require('../controllers').noticias,
  	noticiasMiddleware = require('../middlewares').noticias,
  	router 	= express.Router();

router.get('/',noticiasMiddleware ,noticiasController);

module.exports = router;
