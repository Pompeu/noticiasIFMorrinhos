// file: middlewares/contatos.js - created at 2015-02-06, 07:09
function contatosHandler(req, res, next) {
  // start here with contatos.js
  var contatos = require('../models/contato.json');
 
  res.locals.out = { err : null , contatos : contatos || null , status : false };
  
  next();  
}
module.exports = exports = contatosHandler;
