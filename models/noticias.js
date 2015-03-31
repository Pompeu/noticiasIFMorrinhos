// file: models/noticias.js - created at 2015-01-15, 02:18
function noticiasHandler() {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var schema = null;

  schema = new Schema({
    titulo : { type: String , unique: true , required : true},
    texto : { type: String , trim : true ,required : true },
    instituicao : { type: String , required : true},
    data : { type : Date , default : Date.now},
    lerMais : {type: String , trim : true ,required : true}
  });

  return mongoose.model('Noticias', schema);
}
module.exports = exports = noticiasHandler();
