var express = require('express');
var router = express.Router();

var index = require('../controllers/Student');

router.get('/', index.Student);

module.exports = router;