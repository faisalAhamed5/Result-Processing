var express = require('express');
var router = express.Router();

var index = require('../controllers/Student');

//middleware
var { isLoggedIn,hasAuthStudent } = require('../middleware/hasAuth');


router.get('/',isLoggedIn,hasAuthStudent, index.student);


module.exports = router;