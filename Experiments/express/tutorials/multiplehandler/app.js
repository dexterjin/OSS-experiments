var express = require('express');
var app = express();

app.get('/b', function (req, res, next) {
	console.log('the response will be sent by the next function ...')
	next()
}, function (req, res) {
	res.send('Hello from B!')
})

var cb0 = function (req, res, next) {
	console.log("call by cb0");
	next()
}
var cb1 = function (req, res, next) {
	console.log("call by cb1");
	res.send('Hello from C!')
}
app.get('/c', [cb0, cb1])

var server = app.listen(23023);
