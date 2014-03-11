var express  = require('express');
var routes   = require('./routes');
var product     = require('./routes/product');
var http     = require('http');
var path     = require('path');
var mongoose = require('mongoose');
var database = require('./config/database'); 

var app = express();

mongoose.connect(database.url); 

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/products', product.list);
app.get('/teste', product.teste);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
