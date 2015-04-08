// file: middlewares/contatosDocentes.js - created at 2015-02-06, 07:09
function contatosDocentesHandler(req, res, next) {
  // start here with contatosDocentes.js
  var contatos = require('../models/contatosdocentes.json');
 
  res.locals.out = { err : null , contatos : contatos || null , status : false };
  
  next();  
}
module.exports = exports = contatosDocentesHandler;
