// file: controllers/noticias.js - created at 2015-02-05, 12:44

function noticiasHandler(req, res) {
	debug('noticas handler conroller');
	res.send(res.locals.out);
}
module.exports = exports = noticiasHandler;
