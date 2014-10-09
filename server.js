var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendfile('index.html', { root: './public' });
});

app.listen(port);
console.log("App listening on port " + port);