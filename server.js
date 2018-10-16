var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

router.get('/sample', function(req, res){
	console.log(req);
	res.json(req.body);
});
var bodyParser = require('body-parser');
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var http = require('http').createServer(app);

http.listen(3000, '0.0.0.0');