var express = require('express'),
    path = require('path'),
    clientDir = path.join(__dirname, '../views/app/dist/app'),
  	noticiasController  = require('../controllers').noticias,
  	noticiasMiddlerware = require('../middlewares').noticias,
  	router 	= express.Router();

router.get('/' , function(req , res){
  res.sendFile(path.join(clientDir, 'index.html'))
});

router.get('/noticias',noticiasMiddlerware ,noticiasController)

module.exports = router;
