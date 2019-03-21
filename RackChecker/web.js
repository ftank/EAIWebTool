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

app.get('/downloadbuild/eq0210*', function (req, res) {

  console.log(req.params[0])
  //child = shell.exec('/home/fscaranellotank/Desktop/downloadbuild.sh ' + rackname + req.params[0], { async: true });
  //child.stdout.on('data', function (data) {
  //  res.send(data);
 // });
});


/*
app.get('/index/eq0210*', function (req, res) {

  var rackname = "eq0210"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/getter/eq0210*', function (req, res) {

  var rackname = "eq0210"
  child = shell.exec('/home/fscaranellotank/Desktop/getter.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/downloadbuild/eq0210*', function (req, res) {

  var rackname = "eq0210"
  child = shell.exec('/home/fscaranellotank/Desktop/downloadbuild.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});






app.get('/index/eq0211*', function (req, res) {

  var rackname = "eq0211"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/getter/eq0211*', function (req, res) {

  var rackname = "eq0211"
  child = shell.exec('/home/fscaranellotank/Desktop/getter.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/downloadbuild/eq0211*', function (req, res) {

  var rackname = "eq0211"
  child = shell.exec('/home/fscaranellotank/Desktop/downloadbuild.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});






app.get('/index/eq0212*', function (req, res) {

  var rackname = "eq0212"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});


app.get('/index/getter/eq0212*', function (req, res) {

  var rackname = "eq0212"
  child = shell.exec('/home/fscaranellotank/Desktop/getter.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});


app.get('/index/downloadbuild/eq0212*', function (req, res) {

  var rackname = "eq0212"
  child = shell.exec('/home/fscaranellotank/Desktop/downloadbuild.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});






app.get('/index/eq0214*', function (req, res) {

  var rackname = "eq0214"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/getter/eq0214*', function (req, res) {

  var rackname = "eq0214"
  child = shell.exec('/home/fscaranellotank/Desktop/getter.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});


app.get('/index/downloadbuild/eq0214*', function (req, res) {

  var rackname = "eq0214"
  child = shell.exec('/home/fscaranellotank/Desktop/downloadbuild.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});






app.get('/index/eq0215*', function (req, res) {

  var rackname = "eq0215"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/getter/eq0215*', function (req, res) {

  var rackname = "eq0215"
  child = shell.exec('/home/fscaranellotank/Desktop/getter.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});


app.get('/index/downloadbuild/eq0215*', function (req, res) {

  var rackname = "eq0215"
  child = shell.exec('/home/fscaranellotank/Desktop/downloadbuild.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});







app.get('/index/eq0216*', function (req, res) {

  var rackname = "eq0216"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/eq0217*', function (req, res) {

  var rackname = "eq0217"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/eq0307*', function (req, res) {

  var rackname = "eq0307"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/eq0308*', function (req, res) {

  var rackname = "eq0308"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/getter/eq0308*', function (req, res) {

  var rackname = "eq0308"
  child = shell.exec('/home/fscaranellotank/Desktop/getter.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});


app.get('/index/eq0309*', function (req, res) {

  var rackname = "eq0309"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/eq0317*', function (req, res) {

  var rackname = "eq0317"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/eq0318*', function (req, res) {

  var rackname = "eq0318"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/eq0319*', function (req, res) {

  var rackname = "eq0319"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/eq0320*', function (req, res) {

  var rackname = "eq0320"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/e05*', function (req, res) {

  var rackname = "e05"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/e06*', function (req, res) {

  var rackname = "e06"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/e07*', function (req, res) {

  var rackname = "e07"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/f02*', function (req, res) {

  var rackname = "f02"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/f03*', function (req, res) {

  var rackname = "f03"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/f04*', function (req, res) {

  var rackname = "f04"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/f05*', function (req, res) {

  var rackname = "f05"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/f07*', function (req, res) {

  var rackname = "f07"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

app.get('/index/f08*', function (req, res) {

  var rackname = "f08"
  child = shell.exec('/home/fscaranellotank/Desktop/test.sh ' + rackname + req.params[0], { async: true });
  child.stdout.on('data', function (data) {
    res.send(data);
  });
});

*/

console.log("Server Started!!");
