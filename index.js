require('babel-register');

// var result = require('./render').default;

var express = require('express');
var application = express();
var cors = require('cors');
var posts = require('./data').posts;
application.use(cors()) ;

application.get('/', function(req, res){
  // res.send(result);
  res.json(posts);
});

application.listen(3001, function() {
  console.log('[SERVER] => localhost:3001');
});
