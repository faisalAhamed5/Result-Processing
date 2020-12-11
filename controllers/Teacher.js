var model = require('../db/models');

//Teachers landing page
exports.teacher = function (req, res, next) {
    res.render('teacher',{user:req.user});
};



//logout
exports.logout = function (req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
};

