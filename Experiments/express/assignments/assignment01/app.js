var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var books = new Array();

app.get('/books/:bookId', function (req, res) {
	var bookId = req.params.bookId;
    console.log(books[bookId]);
    res.send(books[bookId]);
});

/*
 * json representation of book object
{
	"id" : 2,
	"name" : "book2",
	"price" : 2000,
	"author" : "jin"
}
*/
app.post('/books', function (req, res) {
	// Create book information
	books[req.body.id] = [req.body.id, req.body.name, req.body.price, req.body.author];
	res.send(books[req.body.id]);
})

app.put('/books', function (req, res) {
	// Update book information

})


app.delete('/books/:bookId', function (req, res) {
	// Delete book information

})
var server = app.listen(80);
	console.log(books);
