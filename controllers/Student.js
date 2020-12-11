var model = require('../db/models');

//Admins landing page
exports.student = function (req, res, next) {
    res.render('student',{user:req.user});
};



//logout
exports.logout = function (req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
};

