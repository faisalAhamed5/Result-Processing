var express = require('express');
var router = express.Router();

var index = require('../controllers/index');
/* GET home page. */
router.get('/', index.index_get);
router.post('/', index.index_submit);
router.get('/loginResultController', index.login_result_controller_get);
//router.post('/loginResultController', index.login_result_controller_submit);
router.get('/loginStudent', index.login_student_get);
//router.post('/loginStudent', index.login_student_submit);
router.get('/loginTeacher', index.login_teacher_get);
//router.post('/loginTeacher', index.login_teacher_submit);
router.get('/loginAdmin', index.login_admin_get);
//router.post('/loginAdmin', index.login_admin_submit);


module.exports = router;
