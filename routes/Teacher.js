var express = require('express');
var router = express.Router();

var index = require('../controllers/Teacher');

//middleware
var { isLoggedIn,hasAuthTeacher } = require('../middleware/hasAuth');

router.get('/',isLoggedIn,hasAuthTeacher, index.teacher);




//logout
router.get('/logout', index.logout);
router.post('/logout', index.logout);

module.exports = router;







