// file: middlewares/contatosDocentes.js - created at 2015-02-06, 07:09
function contatosDocentesHandler(req, res, next) {
  'use strict';
  // start here with contatosDocentes.js
  debug('contados docents handler');

  var contatos = require('../models/contatosdocentes.json');

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
module.exports = exports = contatosDocentesHandler;
