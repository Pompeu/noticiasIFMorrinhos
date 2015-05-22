var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    noticias = require('./middlewares'),
    dburl = require('./configs/index').db;

noticias.atualizarnoticias();


var routes = require('./routes/index'),
    contatos = require('./routes/contatos'),
    contatosdocentes = require('./routes/contatosdocentes');


var app = express();

function connectionHandler(err ,res) {
    debug(arguments);
}

mongoose
    .connect(dburl)
    .connection
    .on('connected', connectionHandler);
    
 

// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + 'favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/views/app/dist/app')));
app.use(cors());



app.use('/noticias', routes);
app.use('/contatosdepartamentos', contatos);
app.use('/contatosdocentes',contatosdocentes);

app.use('/',function (req , res) {
  res.send("Api noticias IF Morrinhos"+
                " use /noticias  /contatosdepartamentos /contatosdocentes");
});

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