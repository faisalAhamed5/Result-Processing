var express = require('express');
var router = express.Router();

var index = require('../controllers/index');
/* GET home page. */
router.get('/', index.index_get);
router.post('/', index.index_submit);

module.exports = router;
