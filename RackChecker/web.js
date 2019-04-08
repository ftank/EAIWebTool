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

app.get('/index/*', function (req, res){
  
    rackname = req.params[0].split(" ")
    STB = req.params[0].split(" ")
    child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname[0] + ' ' + STB[1], { async: true });
    child.stdout.on('data', function (data) {
      res.send(data);
    });

});

app.get('/getter/*', function (req, res) {

  rackname = req.params[0].split(" ")
  STB = req.params[0].split(" ")
  child = shell.exec('/home/fscaranellotank/Desktop/getter.sh ' + rackname[0] + ' ' + STB[1], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/downloadbuild/*', function (req, res) {
  
  rackname = req.params[0].split(" ")
  build = req.params[0].split(" ")
  command = rackname[0] + " " + build[1]
  if (build[1] == "-r") { 
    command = rackname[0] + " -r " + build[2];
    console.log(command)
    child = shell.exec('/home/fscaranellotank/Desktop/downloadbuild.sh ' + command, { async: true });
    child.stdout.on('data', function (data) {
    res.send(data);
    });
  }
  else {
    console.log(command)
    child = shell.exec('/home/fscaranellotank/Desktop/downloadbuild.sh ' + command, { async: true });
    child.stdout.on('data', function (data) {
    res.send(data);
    });
  }
});


console.log("Server Started!!");
