var model = require('../db/models');

//Admins landing page
exports.ResultController = function (req, res, next) {
    res.render('resultController',{user:req.user});
};



//logout
exports.logout = function (req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
};



