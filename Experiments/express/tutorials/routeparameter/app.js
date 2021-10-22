var express = require('express');
var app = express();

app.get('/users/:userId/books/:bookId', function (req, res) {
	  res.send(req.params);
})

var server = app.listen(23023);
