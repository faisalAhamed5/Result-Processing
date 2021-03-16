var express = require('express');
var router = express.Router();


var index = require('../controllers/Student');

//middleware
var { isLoggedIn,hasAuthStudent } = require('../middleware/hasAuth');


router.get('/', isLoggedIn, hasAuthStudent, index.student);



//show gpa
router.get('/gpa',isLoggedIn,hasAuthStudent, index.gpa);
router.get('/gpa/:semester/:sID',isLoggedIn,hasAuthStudent, index.gpaShown);
//cgpa
router.get('/cgpa',isLoggedIn,hasAuthStudent, index.cgpa);

module.exports = router;