var createError = require('http-errors');
var cookieSession = require('cookie-session');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var booking = require('./routes/booking');
var admindashboard = require('./routes/admindashboard');
var demo = require('./routes/demo');
var success = require('./routes/success');
var state = require('./routes/state');
var demo1 = require('./routes/demo1');
var ShowBooking = require('./routes/ShowBooking');

//var facebooklogin = require('./routes/facebooklogin');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieSession({
  name: 'session',
  keys: ['kaushal'],
 
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


app.use("/", indexRouter);
app.use("/booking", booking);
app.use("/admindashboard", admindashboard);
app.use("/demo", demo);
app.use("/success", success);
app.use("/state", state);
app.use("/demo1", demo1);
app.use("/ShowBooking", ShowBooking);


//app.use('/facebooklogin',facebooklogin);
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