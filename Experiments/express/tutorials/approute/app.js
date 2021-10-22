var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('hello world');
})

app.route('/book')
	.get(function (req, res) {
		res.send('Get a random book');
	})
	.post(function (req, res) {
		res.send('Add a book');
	})
	.put(function (req, res) {
		res.send('Update the book');
	});


var server = app.listen(23023);
