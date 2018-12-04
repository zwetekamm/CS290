var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 5508);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET request
app.get('/', function(req, res){
	var qParams = [];
	for (var p in req.query) {
		qParams.push({'name': p, 'value': req.query[p]});
	}
	var context = {};
	context.dataList = qParams;
	res.render('get', context);
});

// POST request
app.post('/', function(req, res){
	var qParams = [];
	for (var p in req.body){
	qParams.push({'name':p,'value':req.body[p]})
	}
	console.log(qParams);
	console.log(req.body);
	var context = {};
	context.dataList = qParams;
	res.render('post', context);
});

app.use(function(req, res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.log(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on port 5508');
});
