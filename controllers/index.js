exports.index_get = function (req, res, next) {
    res.render('index', { title: 'GONO UNIVERSITY' });
};
exports.index_submit = function (req, res, next) {
    console.log("Email:", req.body.email);
    console.log("Password:", req.body.password);
    res.redirect('/');
};

