


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var indexRouter = require('./routes/index');
var admin = require('./routes/Admin');
var teacher = require('./routes/Teacher');
var student = require('./routes/Student');
var external = require('./routes/External');


require('./passport_setup')(passport);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');

app.use(flash());
//session
const TWO_HOURS = 1000 * 60 * 60 * 2;
const { Node_env = 'development',
  SESS_lifetime = TWO_HOURS,
  SESS_NAME = 'sid',
  SESS_SECRET='resultPros/All/'
} = process.env;
const IN_PROD = Node_env === 'production';
app.use(session({
  name: SESS_NAME,
  resave: false,
  saveUninitialized: false,
  secret: SESS_SECRET,
  createTableIfMissing: true,
  store: new (require('connect-pg-simple')(session))(),
  cookie: {
    maxAge: SESS_lifetime,
    sameSite: true,
    secure: IN_PROD,
  }
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/Admin', admin);
app.use('/Teacher', teacher);
app.use('/Student', student);
app.use('/External', external);

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


//perticles

module.exports = app;
