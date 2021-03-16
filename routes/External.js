var express = require('express');
var router = express.Router();
var Sequelize = require("sequelize");

var index = require('../controllers/external');

//middleware
var { isLoggedIn,hasAuthExternal } = require('../middleware/hasAuth');

router.get('/', isLoggedIn, hasAuthExternal, index.external);

//upload result select session
router.get('/uploadResult', hasAuthExternal, index.uploadResult_session_semester_subject);


//upload result select semester
router.get('/uploadResult/:sessionID/:semesterID/:subjectID/', hasAuthExternal, index.uploadResult_student);

router.post('/uploadResult/:sessionID/:semesterID/:subjectID/json/', hasAuthExternal, index.uploadResult_student_submit);

//show result to external to review and edit
router.get('/reviewResult70', hasAuthExternal, index.reviewResult70);
router.get('/reviewResult70/:sessionID/:semesterID/:subjectID/', hasAuthExternal, index.reviewResultData70);
router.get('/reviewResult70/:sessionID/:semesterID/:subjectID/edit/:id', hasAuthExternal, index.selectForEdit);
router.post('/reviewResult70/:sessionID/:semesterID/:subjectID/edit/json/:id', hasAuthExternal, index.reviewResultData70edit);

/*
//supply & improvement
router.get('/uploadSupplyOrImprove', hasAuthExternal, index.supply);
router.get('/uploadSupplyOrImprove/upload', hasAuthExternal, index.input_supply);
router.post('/uploadSupplyOrImprove/upload', hasAuthExternal, index.submitSupply);

*/


//logout
router.get('/logout', index.logout);
router.post('/logout', index.logout);

module.exports = router;







