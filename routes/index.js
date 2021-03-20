var express = require('express');
var router = express.Router();
//Controllers
var index = require('../controllers/index');


//middleware
var { isLoggedIn } = require('../middleware/hasAuth');

/* GET home page. */
router.get('/', index.index_get);


//login
router.get('/login', index.login);
router.post('/login', index.login_submit);

//logout
router.get('/logout', index.logout);
router.post('/logout', index.logout);

//Dashboard
router.get('/DashBoard', index.dashBoard);

router.get('/Controller',  index.controller);

router.get('/createAdmins', index.createAdmins);
router.post('/createAdmins',  index.createAdmins_submit);


router.get('/showAdmins', index.showAdmins);
router.post('/showAdmins/:user_id/delete_json', index.DeleteAdmins_json);

router.get('/createDept', index.createDept);
router.post('/createDept', index.Dept_submit);

router.get('/showDept',  index.showDept);
router.post('/showDept/:dept_id/delete', index.DeleteDept);

router.get('/createRole', index.createRole);
router.post('/createRole', index.Role_submit);

router.get('/showRole',  index.showRole);
router.post('/showRole/:role_id/delete', index.DeleteRole);

router.get('/createSession', index.createSession);
router.post('/createSession', index.createSession_submit);
router.get('/createdSessions', index.createdSessions);
router.post('/createdSessions/:sessionId/delete_json', index.DeleteSession_json);

//publish result
router.get('/selectForPublish', index.selectForPublish);
router.get('/selectForPublish/:deptID', index.selectForPublish_dept);
router.get('/selectForPublish/:deptID/:sessionID', index.selectForPublish_dept_session);
router.get('/selectForPublish/:deptID/:sessionID/:semester', index.selectForPublish_dept_session_semester);
router.post('/selectForPublish/:deptID/:sessionID/:semester/:sID', index.publish);

//print
router.get('/print', index.print);
router.post('/print/Result/', index.printResult);

//print marks
router.get('/printMarks', index.printMark);
router.get('/printMarks/:deptID', index.printMark_dept);
router.get('/printMarks/:deptID/:sessionID', index.printMark_dept_session);
router.get('/printMarks/:deptID/:sessionID/:semester', index.printMark_dept_session_semester);
router.get('/printMarks/:deptID/:sessionID/:semester/:subID', index.printMark_dept_session_semester_subject);


//print supply improve

router.get('/printSupplyImprove', index.printSupply);
router.post('/printSupplyImprove/Result', index.printSupplyResult);



//result archive
router.get('/resultArchive', index.resultArchive);
router.get('/resultArchive/:deptID', index.resultArchive_dept);
router.get('/resultArchive/:deptID/:batchID', index.resultArchive_dept_batch);
router.get('/resultArchive/:deptID/:batchID/:semester', index.resultArchive_dept_batch_semester);







module.exports = router;
