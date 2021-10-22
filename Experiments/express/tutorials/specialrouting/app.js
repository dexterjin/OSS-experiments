var express = require('express');
var app = express();

app.all('/', function (req, res, next) {
	console.log('Accessing the secret section ...')
	next() // pass control to the next handler
})

app.get('/', function (req, res) {
	res.send('hello world');
})

app.post('/', function (req, res) {
	res.send('POST request to the homepage')
})

var server = app.listen(23023);
