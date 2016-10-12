var express = require('express');
var S = require('string');
var app = express();
var port = process.env.PORT || 3000;

app.get('/*', function (req, res) {
  var host = S(req.headers.host.split(':')[0]);
  var hostToString = host.toString();
  //todo regex
  console.log(hostToString);
  if(hostToString === "soupinsummer.co"){
    return res.redirect(302, 'https://about.terribledev.io');
  }
  if(hostToString === "tparnell.io"){
    return res.redirect(301, 'https://about.tparnell.io');
  }

  if(hostToString === "tommyparnell.com" || hostToString === "www.tommyparnell.com"){
    return res.redirect(301, 'https://about.tommyparnell.com');
  }
  if(hostToString === "terribledev.io"){
    return res.redirect(301, 'https://about.terribledev.io');
  }
  if(host.contains('github')){
    return res.redirect(301, 'https://github.com/TerribleDev');
  }
  if(host.contains('tower')){
    return res.redirect(302, 'http://www.tparnelltower.vpweb.com/');
  }
  if(host.contains('bitbucket')){
    return res.redirect(301,'https://bitbucket.org/TerribleDev/');
  }
  if(host.contains('blog')){
    return res.redirect(301,'http://blog.terribledev.io');
  }
  if(host.contains('resume')){
  return res.redirect(301,'http://resume.terribledev.io');
  }
  res.end("Redirect layer for tommyparnell.com, tparnell.io, and other domains :D");
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
