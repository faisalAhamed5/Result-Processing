var express = require('express');
var router = express.Router();
var Sequelize = require("sequelize");

var index = require('../controllers/Teacher');

//middleware
var { isLoggedIn,hasAuthTeacher } = require('../middleware/hasAuth');

router.get('/', isLoggedIn, hasAuthTeacher, index.teacher);

//upload 30% result select session
router.get('/uploadResult30', hasAuthTeacher, index.uploadResult_session_semester_subject30);
//upload 70% result select session
router.get('/uploadResult70', hasAuthTeacher, index.uploadResult_session_semester_subject70);

//upload 30 result select semester
router.get('/uploadResult30/:sessionID/:semesterID/:subjectID/', hasAuthTeacher, index.uploadResult_student30);
router.post('/uploadResult30/:sessionID/:semesterID/:subjectID/json/', hasAuthTeacher, index.uploadResult_student_submit30);
//upload 70 result select semester
router.get('/uploadResult70/:sessionID/:semesterID/:subjectID/', hasAuthTeacher, index.uploadResult_student70);
router.post('/uploadResult70/:sessionID/:semesterID/:subjectID/json/:id', hasAuthTeacher, index.uploadResult_student_submit70);


//show result to teacher to review and delete 30%
router.get('/reviewResult30', hasAuthTeacher, index.reviewResult30);
router.get('/reviewResult30/:sessionID/:semesterID/:subjectID/', hasAuthTeacher, index.reviewResultData30);
router.post('/reviewResult30/:resultID/delete_json', hasAuthTeacher, index.deleteResult30);
router.post('/reviewResult30/:resultID/update_json', hasAuthTeacher, index.updateResult30);

//show result to teacher to review and delete 70%
router.get('/reviewResult70', hasAuthTeacher, index.reviewResult70);
router.get('/reviewResult70/:sessionID/:semesterID/:subjectID/', hasAuthTeacher, index.reviewResultData70);
router.get('/reviewResult70/:sessionID/:semesterID/:subjectID/edit/:id', hasAuthTeacher, index.selectForEdit);
router.post('/reviewResult70/:sessionID/:semesterID/:subjectID/edit/json/:id', hasAuthTeacher, index.reviewResultData70edit);
//router.post('/reviewResult70/:resultID/delete_json', hasAuthTeacher, index.deleteResult70);

//supply & improvement
router.get('/uploadSupplyOrImprove', hasAuthTeacher, index.supply);
router.get('/uploadSupplyOrImprove/upload', hasAuthTeacher, index.input_supply);
router.post('/uploadSupplyOrImprove/upload', hasAuthTeacher, index.submitSupply);

//chairman
router.get('/chairman', hasAuthTeacher, index.chairman);
router.get('/chairman/:sessionID/:semester/', hasAuthTeacher, index.review);
//chairman Supply Improve
router.get('/chairman/supplyImprove/:sessionID/:semester/', hasAuthTeacher, index.reviewSupplyImprove);

//review before combine
router.get('/chairman/combineReview', hasAuthTeacher, index.combineReview);
router.get('/chairman/combineReview/:sessionID/:semesterID/', hasAuthTeacher, index.combineReviewSubject);
router.get('/chairman/combineReview/:sessionID/:semesterID/:subID', hasAuthTeacher, index.combinedView);


//combine 
router.get('/chairman/combine', hasAuthTeacher, index.combine);
router.get('/chairman/combine/:sessionID/:semesterID/', hasAuthTeacher, index.combineSubjectResult);
router.get('/chairman/combine/:sessionID/:semesterID/:subID/withEx', hasAuthTeacher, index.uploadCombinedResult);
router.get('/chairman/combine/:sessionID/:semesterID/:subID/withoutEx', hasAuthTeacher, index.uploadCombinedResultwithoutEx);
router.post('/chairman/combine/:sessionID/:semesterID/:subID/json/', hasAuthTeacher, index.uploadCombinedResult_submit);


//uploadCombinedResult_submit

//logout
router.get('/logout', index.logout);
router.post('/logout', index.logout);

module.exports = router;







