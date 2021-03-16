
var createError = require('http-errors');

exports.isLoggedIn = function (req, res, next) {
    if (req.user)
        next();
    else
        next(createError(404, "Page does not exist.haha"));
};



exports.hasAuthTeacher = function (req, res, next) {
    if (req.user && req.user.role_id == "Teacher") {
         next();
    }
    else
       next(createError(404, "NOT Allowed"));
};

exports.hasAuthAdmin = function (req, res, next) {
    if (req.user && req.user.role_id == "Admin") {
         next();
    }
    else
       next(createError(404, "NOT Allowed"));
};

exports.hasAuthController = function (req, res, next) {
    if (req.user && req.user.role_id == "Controller") {
         next();
    }
    else
       next(createError(404, "NOT Allowed"));
};

exports.hasAuthStudent = function (req, res, next) {
    if (req.user && req.user.role_id == "Student") {
         next();
    }
    else
       next(createError(404, "NOT Allowed"));
};
exports.hasAuthExternal = function (req, res, next) {
    if (req.user && req.user.role_id == "External") {
         next();
    }
    else
       next(createError(404, "NOT Allowed"));
};