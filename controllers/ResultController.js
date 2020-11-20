var model = require('../db/models');

exports.ResultController = function (req, res, next) {
    res.render('ResultController');
};

exports.ResultController_adminCreate_get= function (req, res, next) {
    res.render('adminCreate');
};

exports.ResultController_adminCreate_submit = function (req, res, next) {
    return model.admin_db.create({
        admin_name: req.body.name,
        admin_email: req.body.email,
        admin_pass: req.body.password,
        dept_id: req.body.dept
    }).then(admin => {
        res.render('adminCreate');
    });
    
};





