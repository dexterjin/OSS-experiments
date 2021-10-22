var express = require('express');
var app = express();

var session = require('express-session')

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))



app.get('/', function(req, res, next) {
	var sess = req.session;
	console.log(req.session);
	if (sess.views) {
		sess.views++;
		res.send("session Views " + sess.views);
		res.send();
	} else {
		req.session.views = 1;
		res.send("welcome to the session demo. refresh!");
		res.end();
	}
});

var server = app.listen(23023);
