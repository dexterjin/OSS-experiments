var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); 

app.get('/', function(req, res) {  
	  res.render('index', { title: 'OSS Page' });
});

var server = app.listen(23023);
