// file: middlewares/noticias.js - created at 2015-02-06, 07:09
function noticiasHandler(req, res, next) {
  // start here with noticias.js
  var noticias = require('../models/noticias');

  res.locals.out = { err : null , noticias : [] , status : false };
  noticias
    .find({}, null, {sort: {data: -1}},
    function (err, noticias) {
    if(err){
        res.locals.out.err = err;
      }else{
        res.locals.out.noticias = noticias;
        res.locals.out.status = true;
      }
      next();
  });
  /*noticias
  	.find({},function(err , noticias) {
  			
  	})*/
  
}
module.exports = exports = noticiasHandler;
