var model = require('../db/models');
var bcrypt = require('bcrypt');
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);

//hash
const generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//index page
exports.index_get = function (req, res, next) {
    res.render('index', { title: 'GONO UNIVERSITY' });
};

//DashBoard
exports.dashBoard = function (req, res, next) {
    res.render('dashboard', { user:req.user });
};

//webmaster index page
exports.webmaster = function (req, res, next) {
    res.render('webmaster',{user:req.user});
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
        pass: generateHash(req.body.password),
        dept_id: req.body.dept,
        role_id: req.body.role
    }).then(user => {
        res.redirect('showUsers');
    });
};

//show Users
exports.showUsers= function (req, res, next) {
    return model.user_db.findAll().then(users => {
        res.render('showUsers', { users: users });
    });
};

//Delete Users
exports.DeleteUsers= function (req, res, next) {
    return model.user_db.destroy({
        where: {
			id: req.params.user_id
        }
    }).then(users => {
        res.redirect('/showUsers');
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

//Delete depts
exports.DeleteDept= function (req, res, next) {
    return model.dept_db.destroy({
        where: {
			id: req.params.dept_id
        }
    }).then(depts => {
        res.redirect('/showDept');
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

//Delete Roles
exports.DeleteRole= function (req, res, next) {
    return model.role_db.destroy({
        where: {
			id: req.params.role_id
        }
    }).then(roles => {
        res.redirect('/showRole');
    });
};

//login page
exports.login = function (req, res, next) {
    res.render('login.pug');
};
exports.login_submit = function (req, res, next) {
    passport.authenticate('local', {
        successRedirect: "/DashBoard",
        failureRedirect: "/login",
        failureFlash: true
    })(req, res, next);
};

//logout
exports.logout = function (req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
};


















