function atulizarnoticiasHandler() {
  // start here with atulizarnoticias.js
    var noticias = require('../models');
    //atualizando noticias cada 60 segundos
  setInterval(function(){
    debug('atualizando noticias');
    noticias.Morrinhos.atualizar();
    noticias.Goiania.atualizar();
  },60000);
}

module.exports = exports = atulizarnoticiasHandler;