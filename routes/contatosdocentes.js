var express = require('express'),
    controller  = require('../controllers/contatodocentes'),
    middlerware = require('../middlewares/contatodocentes'),
    router  = express.Router();
    
router.get('/',middlerware ,controller)
router.get('/',middlerware ,controller)

module.exports = router;
