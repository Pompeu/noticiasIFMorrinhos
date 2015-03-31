var express = require('express'),
  	noticiasController  = require('../controllers').noticias,
  	noticiasMiddlerware = require('../middlewares').noticias,
  	router 	= express.Router();

router.get('/noticias',noticiasMiddlerware ,noticiasController)

module.exports = router;
