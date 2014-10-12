var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   res.sendfile('index.html', { root: './public' });
// });

app.get('*', function(req, res) {
	res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port);
console.log("App listening on port " + port);