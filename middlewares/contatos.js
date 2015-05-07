// file: middlewares/contatos.js - created at 2015-02-06, 07:09
function contatosHandler(req, res, next) {
  // start here with contatos.js
  var contatos = require('../models/contato.json');
 
  res.locals.out = { err : null , contatos : [] , status : false };

  return function contatosHandler() {
    if(contatos){
      res.locals.out.contatos = contatos;
      res.locals.out.status = true;
    }else{
      res.locals.out.status = true;
      res.locals.out.err = "nenhum contado";
    }
    next();
  };  

}
module.exports = exports = contatosHandler;
