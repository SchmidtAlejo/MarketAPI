var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var categoriasRouter = require('./src/routes/categorias');
var tiposUsuariosRouter = require('./src/routes/tiposUsuarios');
var productosRouter = require('./src/routes/productos');
var carritosRouter = require('./src/routes/carritos');
var carritosItemsRouter = require('./src/routes/carritosItems');
var direccionesRouter = require('./src/routes/direcciones');
var comprasRouter = require('./src/routes/compras');
var productosDeseadosRouter = require('./src/routes/productosDeseados');
var seedRouter = require('./src/routes/seed');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/tiposUsuarios', tiposUsuariosRouter);
app.use('/api/categorias', categoriasRouter);
app.use('/api/productos', productosRouter);
app.use('/api/carritos', carritosRouter);
app.use('/api/carritosItems', carritosItemsRouter);
app.use('/api/direcciones', direccionesRouter);
app.use('/api/compras', comprasRouter);
app.use('/api/productosDeseados', productosDeseadosRouter);
app.use('/api/seed', seedRouter);

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
