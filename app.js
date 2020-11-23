var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var passport = require('passport');
//var session = ('express-session');

var indexRouter = require('./routes/index');
var ResultController = require('./routes/ResultController');
var admin = require('./routes/Admin');
var teacher = require('./routes/Teacher');
var student = require('./routes/Student');

//require('./passport_setup')(passport);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(session({ secret: 'our new session' }));
//app.use(passport.initialize());
//app.use(passport.session());


app.use('/', indexRouter);
app.use('/ResultController', ResultController);
app.use('/Admin', admin);
app.use('/Teacher', teacher);
app.use('/Student', student);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
