function atualizarnoticiasHandler() {
  // start here with atulizarnoticias.js
  var noticias = require('../models');
  //atualizando noticias cada 60 segundos
  setInterval(atualizar,6000);

  function atualizar () {
    debug('atualizar noticias');
    noticias.Morrinhos.atualizar();
    noticias.Goiania.atualizar();
  }
}

module.exports = exports = atualizarnoticiasHandler;