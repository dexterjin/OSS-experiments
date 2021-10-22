var express = require('express');
var app = express();

// The routing path matches requests to /about
app.get('/about', function (req, res) {
	res.send('about')
})

// The routing path matches requests to /random.text
app.get('/random.text', function (req, res) {
	res.send('random.text')
})

// This route path matches abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', function (req, res) {
	res.send('ab*cd')
})

var server = app.listen(23023);
