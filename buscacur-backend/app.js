var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
const config = require('./config')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usuarios');
var cursosRouter = require('./routes/cursos');
var consultasRouter = require('./routes/consultas');
var visualizacionesRouter = require('./routes/visualizaciones')
var titulosRouter = require('./routes/titulos')
const { default: mongoose } = require('mongoose');

//mongoose.connect(config.db )
// config.db = mongodb://127.0.0.1:27017/dbCursos
mongoose.connect ('mongodb+srv://anton:EspiMin%40LoSus%231969@cluster0.wkdq7.mongodb.net/dbCursos')
.then(() => console.log(`Conectado a la base de datos: ${mongoose.connection.host}:${mongoose.connection.port}/${mongoose.connection.name}`))
.catch((err) => console.error(err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
//app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

app.use('/', indexRouter);
app.use('/usuarios', usersRouter);
app.use('/cursos', cursosRouter);
app.use('/consultas', consultasRouter);
app.use('/visualizaciones', visualizacionesRouter)
app.use('/titulos', titulosRouter);
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
  res.json({message:err.message, error:err});
});

module.exports = app;
