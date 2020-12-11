var model = require('../db/models');

//Admins landing page
exports.admin = function (req, res, next) {
    res.render('admin',{user:req.user});
};



//logout
exports.logout = function (req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
};

