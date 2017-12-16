require('babel-register');

// var result = require('./render').default;

var express = require('express');
var application = express();
var cors = require('cors');
var posts = require('./data').posts;
application.use(cors()) ;

application.get('/', function(req, res){
  // res.send(result);
  console.log('[SERVER] => posts');
  res.json(posts);
});

application.get('/chart', function(req, res){
  console.log('[SERVER] => posts');
  res.json(posts);
});

application.get('/post/:id', function(req, res){
  console.log(`[SERVER] => post #${req.params.id-1}`);
  res.json(posts[req.params.id-1]);
});

application.post('/post/:id/like', function(req, res){
  const id = req.params.id, post = posts[id-1];
  post.like += 1;
  console.log(`[SERVER] => post #${id-1} => ${post.like} likes`);
  res.json({count: post.like});
});

application.post('/post/:id/dislike', function(req, res){
  const id = req.params.id, post = posts[id-1];
  post.dislike += 1;
  console.log(`[SERVER] => post #${id-1} => ${post.dislike} dislikes`);
  res.json({count: post.dislike});
});

application.listen(3001, function() {
  console.log('[SERVER] => localhost:3001');
});
