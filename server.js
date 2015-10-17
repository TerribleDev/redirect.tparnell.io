var express = require('express');
var S = require('string');
var app = express();
var port = process.env.PORT || 3000;

app.get('/*', function (req, res) {
  var host = S(req.headers.host);

  if(host.contains('github')){
    return res.redirect(301, 'https://github.com/tparnell8');
  }
  if(host.contains('bitbucket')){
    return res.redirect(301,'https://bitbucket.org/tparnell8/');
  }
  if(host.contains('blog')){
    return res.redirect(301,'http://blog.tparnell.io');
  }
  if(host.contains('resume')){
  return res.redirect(301,'http://resume.tparnell.io');
  }
  res.end("Redirect layer for tommyparnell.com, tparnell.io, and other domains :D");
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
