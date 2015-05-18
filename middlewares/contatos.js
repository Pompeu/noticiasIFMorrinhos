// file: middlewares/contatos.js - created at 2015-02-06, 07:09
function contatosHandler(req, res, next) {
  // start here with contatos.js
  'use strict';
  debug('contados handler');
  var contatos = require('../models/contato.json');
 
  res.locals.out = { err : null , contatos : [] , status : false };

  return (function resposeHandler() {
    debug('contados sucess handler');
    
    if(contatos){
      res.locals.out.contatos = contatos;
      res.locals.out.status = true;
      next();
    }else{
      res.locals.out.status = false;
      res.locals.out.err = "Erro nos contatos";
      next();
    }    
  })();
  
}
module.exports = exports = contatosHandler;
