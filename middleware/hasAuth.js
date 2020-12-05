
var createError = require('http-errors');




exports.isLoggedIn = function (req, res, next) {
    if (req.user)
        next();
    else
        next(createError(404, "Page does not exist.haha"));
};

exports.hasAuthWebmaster = function (req, res, next) {
    if (req.user && req.user.role_id == "WebMaster") {
         next();
    }
    else
       next(createError(404, "NOT Allowed"));
};

