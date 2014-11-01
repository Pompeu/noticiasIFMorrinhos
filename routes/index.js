var express = require('express'),
	router 	= express.Router(),
	jsdom 	= require('jsdom'),
	fs		= require('fs'),
	texto 	= '',
	jquery 	= fs.readFileSync("public/javascripts/jquery.js", "utf-8");;
/* GET home page. */
router.get('/', function(req, res) {
 
 	  jsdom.env({
        url: "http://ifgoiano.edu.br/morrinhos/home/index.php",
        src: [jquery],
        done: function (errors, window) {
           texto = window.$("div.contentpaneopen").text();
        }
      }); 
	  res.end(texto);
});

router.get('/noticias', function(req, res) {
  	  jsdom.env({
        url: "http://ifgoiano.edu.br/morrinhos/home/index.php",
        src: [jquery],
        done: function (errors, window) {
           texto = window.$("div.contentpaneopen").text();
        }
      }); 
	  res.render('index', { title: texto });
});

module.exports = router;
