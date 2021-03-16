var express = require('express');
var router = express.Router();
//Controllers
var index = require('../controllers/index');


//middleware
var { isLoggedIn,hasAuthController } = require('../middleware/hasAuth');

/* GET home page. */
router.get('/', index.index_get);


//login
router.get('/login', index.login);
router.post('/login', index.login_submit);

//logout
router.get('/logout', index.logout);
router.post('/logout', index.logout);

//Dashboard
router.get('/DashBoard',isLoggedIn, index.dashBoard);

router.get('/Controller',hasAuthController,  index.controller);

router.get('/createAdmins',hasAuthController, index.createAdmins);
router.post('/createAdmins',hasAuthController,  index.createAdmins_submit);


router.get('/showAdmins',hasAuthController, index.showAdmins);
router.post('/showAdmins/:user_id/delete_json',hasAuthController, index.DeleteAdmins_json);

router.get('/createDept',hasAuthController, index.createDept);
router.post('/createDept',hasAuthController, index.Dept_submit);

router.get('/showDept',hasAuthController,  index.showDept);
router.post('/showDept/:dept_id/delete',hasAuthController, index.DeleteDept);

router.get('/createRole',hasAuthController, index.createRole);
router.post('/createRole',hasAuthController, index.Role_submit);

router.get('/showRole',hasAuthController,  index.showRole);
router.post('/showRole/:role_id/delete',hasAuthController, index.DeleteRole);

router.get('/createSession',hasAuthController, index.createSession);
router.post('/createSession',hasAuthController, index.createSession_submit);
router.get('/createdSessions',hasAuthController, index.createdSessions);
router.post('/createdSessions/:sessionId/delete_json',hasAuthController, index.DeleteSession_json);

//publish result
router.get('/selectForPublish',hasAuthController, index.selectForPublish);
router.get('/selectForPublish/:deptID',hasAuthController, index.selectForPublish_dept);
router.get('/selectForPublish/:deptID/:sessionID',hasAuthController, index.selectForPublish_dept_session);
router.get('/selectForPublish/:deptID/:sessionID/:semester',hasAuthController, index.selectForPublish_dept_session_semester);
router.post('/selectForPublish/:deptID/:sessionID/:semester/:sID',hasAuthController, index.publish);

//print
router.get('/print',hasAuthController, index.print);
router.post('/print/Result/', hasAuthController, index.printResult);

//print marks
router.get('/printMarks',hasAuthController, index.printMark);
router.get('/printMarks/:deptID',hasAuthController, index.printMark_dept);
router.get('/printMarks/:deptID/:sessionID',hasAuthController, index.printMark_dept_session);
router.get('/printMarks/:deptID/:sessionID/:semester', hasAuthController, index.printMark_dept_session_semester);
router.get('/printMarks/:deptID/:sessionID/:semester/:subID',hasAuthController, index.printMark_dept_session_semester_subject);


//print supply improve

router.get('/printSupplyImprove',hasAuthController, index.printSupply);
router.post('/printSupplyImprove/Result',hasAuthController, index.printSupplyResult);



//result archive
router.get('/resultArchive',hasAuthController, index.resultArchive);
router.get('/resultArchive/:deptID',hasAuthController, index.resultArchive_dept);
router.get('/resultArchive/:deptID/:batchID',hasAuthController, index.resultArchive_dept_batch);
router.get('/resultArchive/:deptID/:batchID/:semester',hasAuthController, index.resultArchive_dept_batch_semester);







module.exports = router;
