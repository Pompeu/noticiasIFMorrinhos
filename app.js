var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var noticias = require('./middlewares');

noticias.atulizarnoticias();

var routes = require('./routes/index');

var app = express();
function connectionHandler(err ,res) {
    debug( err || 'on mongolab');
};
function connectionHandlerLocal(err) {
    debug( err || 'on local');
};

var local = 'mongodb://localhost/noticias';
 
var mongolab = 'mongodb://pompeu:552525@ds049130.mongolab.com:49130/pompeuapi';

mongoose
    .connect(mongolab)
    .connection
    .on('connected', connectionHandler)
    .on('error',function() {
        mongoose
        .connect(local)
        .connection
        .on('connected', connectionHandlerLocal)
    });
 

// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + 'favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/views/app/dist/app')));

app.use('/',cors(),routes);
//atualizar noticias 


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;