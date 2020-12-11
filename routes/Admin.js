var express = require('express');
var router = express.Router();

var index = require('../controllers/Admin');

//middleware
var { isLoggedIn,hasAuthAdmin } = require('../middleware/hasAuth');

router.get('/',isLoggedIn,hasAuthAdmin, index.admin);




//logout
router.get('/logout', index.logout);
router.post('/logout', index.logout);

module.exports = router;
