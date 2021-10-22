var express = require('express');
var app = express();
var birds = require('./birds');


app.get('/', function (req, res) {
	res.send('hello world');
})

app.use('/birds',birds);
var server = app.listen(23023);
