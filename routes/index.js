var express = require('express');
var router = express.Router();
//Controllers
var index = require('../controllers/index');


//middleware
var { isLoggedIn,hasAuthWebmaster } = require('../middleware/hasAuth');

/* GET home page. */
router.get('/', index.index_get);


//login
router.get('/login', index.login);
router.post('/login', index.login_submit);

//logout
router.get('/logout', index.logout);
router.post('/logout', index.logout);


router.get('/webmaster',isLoggedIn,hasAuthWebmaster, index.webmaster);

router.get('/createUsers',hasAuthWebmaster, index.createUsers);
router.post('/createUsers',hasAuthWebmaster, index.createUsers_submit);

router.get('/showUsers',hasAuthWebmaster, index.showUsers);

router.get('/createDept',hasAuthWebmaster, index.createDept);
router.post('/createDept',hasAuthWebmaster, index.Dept_submit);

router.get('/showDept',hasAuthWebmaster, index.showDept);

router.get('/createRole',hasAuthWebmaster, index.createRole);
router.post('/createRole',hasAuthWebmaster, index.Role_submit);

router.get('/showRole',hasAuthWebmaster, index.showRole);


module.exports = router;
