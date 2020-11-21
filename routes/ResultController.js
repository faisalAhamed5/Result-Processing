var express = require('express');
var router = express.Router();

var index = require('../controllers/ResultController');

router.get('/', index.ResultController);
router.get('/AdminCreate', index.ResultController_adminCreate_get);
router.post('/AdminCreate', index.ResultController_adminCreate_submit);
router.get('/Admins', index.ShowAdmins);

module.exports = router;