var express = require('express');
var router = express.Router();

var index = require('../controllers/ResultController');

//middleware
var { isLoggedIn,hasAuthResultController } = require('../middleware/hasAuth');


router.get('/',isLoggedIn,hasAuthResultController, index.ResultController);


module.exports = router;