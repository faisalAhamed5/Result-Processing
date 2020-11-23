var model = require('../db/models');
const role_db = require('../db/models/role_db');

//index page

exports.index_get = function (req, res, next) {
    res.render('index', { title: 'GONO UNIVERSITY' });
};

//login page

exports.login = function (req, res, next) {
    res.render('login');
};
exports.login_submit = function (req, res, next) {
    res.render('login');
};

//webmaster index page

exports.webmaster = function (req, res, next) {
    res.render('webmaster');
};

//create users page

exports.createUsers = function (req, res, next) {
    
    model.dept_db.findAll().then(depts => 
        model.role_db.findAll().then(roles => {
        res.render('createUsers', { roles: roles,depts:depts });
     })
     );
     
    
};
exports.createUsers_submit = function (req, res, next) {
    return model.user_db.create({
        username: req.body.name,
        email: req.body.email,
        pass: req.body.password,
        dept_id: req.body.dept,
        role_id: req.body.role
    }).then(admin => {
        res.redirect('/showUsers');
    });
};

//show Users
exports.showUsers= function (req, res, next) {
    return model.user_db.findAll().then(users => {
        res.render('showUsers', { users: users });
    });
};

//create dept page

exports.createDept= function (req, res, next) {
    res.render('createDept');
};
exports.Dept_submit= function (req, res, next) {
     return model.dept_db.create({
        dept_id: req.body.dept_id,
        dept_name: req.body.dept_name,
        degree: req.body.degree
    }).then(dept => {
        res.redirect('/showDept');
    });
};

//show dept

exports.showDept= function (req, res, next) {
    return model.dept_db.findAll().then(depts => {
        res.render('showDept', { depts: depts });
    });
};

//Create Roles

exports.createRole= function (req, res, next) {
    res.render('createRole');
};
exports.Role_submit= function (req, res, next) {
     return model.role_db.create({
        role_id: req.body.role_id,
        role: req.body.role
    }).then(role => {
        res.redirect('/showRole');
    });
};

//show Roles

exports.showRole= function (req, res, next) {
    return model.role_db.findAll().then(roles => {
        res.render('showRole', { roles: roles });
    });
};