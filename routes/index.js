var express = require('express');
var router = express.Router();

var index = require('../controllers/index');
/* GET home page. */
router.get('/', index.index_get);

router.get('/login', index.login);
router.post('/login', index.login_submit);

router.get('/webmaster', index.webmaster);

router.get('/createUsers', index.createUsers);
router.post('/createUsers', index.createUsers_submit);

router.get('/showUsers', index.showUsers);

router.get('/createDept', index.createDept);
router.post('/createDept', index.Dept_submit);

router.get('/showDept', index.showDept);

router.get('/createRole', index.createRole);
router.post('/createRole', index.Role_submit);

router.get('/showRole', index.showRole);

/*
router.get('/createTeacher', index.createTeacher);
router.post('/createTeacher', index.createTeacher);
router.get('/createAdmin', index.createAdmin);
router.post('/createAdmin', index.createAdmin);
router.get('/createStudent', index.createStudent);
router.post('/createStudent', index.createStudent);
router.get('/createResultCon', index.createResultCon);
router.post('/createResultCon', index.createResultCon);

*/
module.exports = router;
