// file: plugins/unirNoticias.js - created at 2015-02-04, 02:45
function unirNoticiasHandler(array) {
	if(Array.isArray(array)) 
 		return array;
 	else 
 		return new Error('need array of noticias here');  
}
module.exports = exports = unirNoticiasHandler;
