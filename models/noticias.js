// file: models/noticias.js - created at 2015-01-15, 02:18
function noticiasHandler() {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var schema = null;

  schema = new Schema({
    // start with schema here
  });

  return mongoose.model('Noticias', schema);
}
module.exports = exports = noticiasHandler();
