var express = require('express');
var S = require('string');
var app = express();


app.get('/*', function (req, res) {
  var host = S(req.headers.host);
  
  if(host.contains('github')){
    return res.redirect(301, 'https://github.com/tparnell8');
  }
  if(host.contains('blog')){
    return res.redirect(301,'http://blog.tparnell.io');
  }
  if(host.contains('resume')){
  return res.redirect(301,'http://resume.tparnell.io');
  }
  res.end();
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});