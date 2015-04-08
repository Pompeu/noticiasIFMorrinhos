var express = require('express'),
  	controller  = require('../controllers/contatos'),
  	middlerware = require('../middlewares/contatos'),
  	router 	= express.Router();
    
router.get('/',middlerware ,controller);

module.exports = router;
