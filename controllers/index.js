exports.index_get = function (req, res, next) {
    res.render('index', { title: 'Express' });
};
exports.index_submit = function (req, res, next) {
    console.log("s-email:", req.body.s_email);
    res.redirect('/');
};

