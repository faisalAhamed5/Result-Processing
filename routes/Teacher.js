var express = require('express');
var router = express.Router();

var index = require('../controllers/Teacher');

router.get('/', index.Teacher);

module.exports = router;