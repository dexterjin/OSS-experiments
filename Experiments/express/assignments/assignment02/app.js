var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session')

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var users = new Array();

app.get('/login', function (req, res) {
	// users 배열에서 찾도록 처리 해야 함
	// admin 여부를 확인하여 체크
	// req.body.id : ID
	// req.body.name : 패스워드
	
	res.send("Login");
});

app.get('/logout', function (req, res) {
	// Logout
	// 세션 유효 여부를 체크하고 세션 Delete
	req.session.userId = null;
	res.send("LogOut");

});

var auth = function (req, res, next) {
	// Session Check
	// 어드민 여부 체크 필요
	if (req.session.userId != null)
		next();
	else
		res.send("Error");

};
app.get('/user/:userId', auth,function (req, res) {
	// get User Information
	res.send("OK");
});

// 사용자 추가 시에 admin 여부도 추가해야 함

var server = app.listen(80);
