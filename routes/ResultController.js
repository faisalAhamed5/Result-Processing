var express = require('express');
var router = express.Router();

var index = require('../controllers/ResultController');

router.get('/', index.ResultController);

module.exports = router;