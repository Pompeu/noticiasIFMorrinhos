var express = require('express'),
    controller  = require('../controllers/contatodocentes'),
    middlewares = require('../middlewares/contatodocentes'),
    router  = express.Router();
    
router.get('/',middlewares ,controller);

module.exports = router;
