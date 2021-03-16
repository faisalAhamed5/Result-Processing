var express = require('express');
var router = express.Router();

var index = require('../controllers/Admin');

//middleware
var { hasAuthAdmin } = require('../middleware/hasAuth');

router.get('/',hasAuthAdmin, index.admin);

router.get('/createUsers', index.createUsers);
router.post('/createUsers',  index.createUsers_submit);

router.get('/showUsers', index.showUsers);
router.post('/showUsers/:user_id/delete_json', index.DeleteUsers_json);

router.get('/createSubject',hasAuthAdmin, index.createSubject);
router.post('/createSubject', index.createSubject_submit);

router.get('/Subjects',hasAuthAdmin, index.Subjects);
router.post('/Subjects/:subID/delete_json',hasAuthAdmin, index.DeleteSubjects_json);

router.get('/assignSubject',hasAuthAdmin, index.assignSubject);
router.post('/assignSubject',hasAuthAdmin, index.assignSubject_submit);
router.get('/assignedSubjects',hasAuthAdmin, index.assignedSubjects);
router.post('/assignedSubjects/:assignId/delete_json',hasAuthAdmin, index.DeleteAssignedSubjects_json);

router.get('/createChairman', hasAuthAdmin, index.createChairman);
router.post('/createChairman', hasAuthAdmin, index.createChairman_submit);
router.get('/showChairmans', hasAuthAdmin, index.showChairmans);
router.post('/showChairmans/:ID/delete_json',hasAuthAdmin, index.DeleteChairmans_json);

router.get('/studentData', hasAuthAdmin, index.studentData);
router.post('/studentData', hasAuthAdmin, index.studentData_submit);
router.get('/showStudentData', hasAuthAdmin, index.showStudentData);
router.post('/showStudentData/:ID/Delete_json', hasAuthAdmin, index.DeleteStudentData_json);

router.get('/semesterUpgrade', hasAuthAdmin, index.semesterUpgrade);
router.get('/semesterUpgrade/:semID', hasAuthAdmin, index.semesters);
router.post('/semesterUpgrade/:semID/json/:sem', hasAuthAdmin, index.semesterUpgrade_json);

//logout
router.get('/logout', index.logout);
router.post('/logout', index.logout);

module.exports = router;
