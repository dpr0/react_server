require('babel-register');

// var result = require('./render').default;

var express = require('express');
var application = express();
var cors = require('cors');
var posts = require('./data').posts;
application.use(cors()) ;

application.get('/', function(req, res){
  // res.send(result);
  console.log(`[SERVER] => posts`);
  res.json(posts);
});

application.get('/post/:id', function(req, res){
  console.log(`[SERVER] => post #${req.params.id-1}`);
  res.json(posts[req.params.id-1]);
});

application.post('/post/:id/like', function(req, res){
  posts[req.params.id-1].like += 1;
  console.log(`[SERVER] => post #${req.params.id-1} => ${posts[req.params.id-1].like} likes`);
  res.json(posts[req.params.id-1].likes);
});

application.post('/post/:id/dislike', function(req, res){
  posts[req.params.id-1].dislike += 1;
  console.log(`[SERVER] => post #${req.params.id-1} => ${posts[req.params.id-1].dislike} dislikes`);
  res.json(posts[req.params.id-1].dislikes);
});

application.listen(3001, function() {
  console.log('[SERVER] => localhost:3001');
});
