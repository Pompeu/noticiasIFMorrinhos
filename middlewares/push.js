function pushHandler () {
	debug("middlerware push Handler");

	var pushbots = require('pushbots');

	var Pushbots = new pushbots.api({
	  id:'552e15af17795960748b458d',
	  secret:'e69072fa8b8471813ac219b64e5bc63c'
	});

	Pushbots.setMessage("Novas Noticias Ok" ,1);

};

module.exports = exports = pushHandler;


  