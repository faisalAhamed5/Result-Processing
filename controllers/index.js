var model = require('../db/models');
exports.index_get = function (req, res, next) {
    res.render('index', { title: 'GONO UNIVERSITY' });
};
/*//exports.index_submit = function (req, res, next) {
    
//};
exports.login_result_controller_get = function (req, res, next) {
    res.render('login');
};

//exports.login_result_controller_submit = function (req, res, next) {
    
//};

exports.login_student_get = function (req, res, next) {
     res.render('login');
};

//exports.login_student_submit = function (req, res, next) {
  
//};

exports.login_teacher_get = function (req, res, next) {
     res.render('login');
};

//exports.login_teacher_submit = function (req, res, next) {
  
//};

exports.login_admin_get = function (req, res, next) {
    res.render('login');
};

//exports.login_admin_submit = function (req, res, next) {
    
//};

*/
