var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello! Closet Server demo! Demonstration\n');
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Your nodejs app is listening at port %s',  port);
});
