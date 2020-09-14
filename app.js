var createError = require('http-errors'); // Package for handle the error
var express = require('express'); // Require express 
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser = require("body-parser"); // Package for allow the body parse
var indexRouter = require('./routes/index'); // Include the router file
var app = express(); 


app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/', indexRouter); // Map the url form the router


// Set header 
app.use(function (req, res, next) {
  res.header("access-control-allow-methods", "GET, POST, PUT");
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use((req, res, next) => {
  const err = new Error("Not Found fffff");
  err.status = 404;
  next(err);
});


//all other requests are not implemented.
app.use((err, req, res, next) => {
  res.status(err.status || 501);
  res.json({
    error: {
      status: false,
      code: err.status || 501,
      message: err.message
    }
  });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
