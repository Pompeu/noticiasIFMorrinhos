// file: plugins/trin.js - created at 2015-01-22, 07:58
function trinHandler(text) {
   	/*
	Thx to W3c Schol for this algoritmn
	http://www.w3schools.com/jsref/jsref_trim_string.asp
	*/
	return text.replace(/^\s+|\s+$/gm,'');
}
module.exports = exports = trinHandler;
