// nodejs modules
var shell = require('shelljs')

var express = require('express'),
  app = express()
port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.static(__dirname));
app.listen(port);

app.get('/index/*', function (req, res) {
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });

});

app.get('/stoptests/*', function (req, res) {
  child = shell.exec('/home/fscaranellotank/Desktop/stoptests.sh ' + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/downloadbuild/*', function (req, res) {
  console.log(req.params[0])
  child = shell.exec('/home/fscaranellotank/Desktop/downloadbuild.sh ' + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/upgradestb/*', function (req, res) {

  console.log(req.params[0])
  child = shell.exec('/home/fscaranellotank/Desktop/upgradestb.sh ' + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });


});

console.log("Server Started!!");
