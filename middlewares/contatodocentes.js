// file: middlewares/contatosDocentes.js - created at 2015-02-06, 07:09
function contatosDocentesHandler(req, res, next) {
  // start here with contatosDocentes.js
  var contatos = require('../models/contatosdocentes.json');

  res.locals.out = { err : null , contatos : [] , status : false };
  
  function contatosHandler() {
    if(contatos){
      res.locals.out.contatos = contatos;
      res.locals.out.status = true;
    }else{
      res.locals.out.status = true;
      res.locals.out.err = "nenhum contado";
    }
    next();
  }
  
  return contatosHandler();   
}
module.exports = exports = contatosDocentesHandler;
