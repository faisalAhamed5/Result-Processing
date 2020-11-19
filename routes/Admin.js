var express = require('express');
var router = express.Router();

var admin = require('../controllers/Admin');

router.get('/', admin.admin);

module.exports = router;