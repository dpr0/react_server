require('babel-register');
const _ = require('lodash');
// var result = require('./render').default;

var express = require('express');
var application = express();
var cors = require('cors');
var posts = require('./data').posts;
application.use(cors());

application.get('/', function (req, res) {
  // res.send(result);
  console.log('[SERVER] => posts');
  res.json(posts);
});

application.get('/chart', function (req, res) {
  console.log('[SERVER] => posts');
  res.json(posts);
});

application.get('/post/:id', function (req, res) {
  posts = _.keyBy(posts, 'id');
  console.log(`[SERVER] GET => post #${req.params.id}`);
  res.json(posts[req.params.id]);
});

application.post('/post/:id', function (req, res) {
  const id = req.query['id'], post = posts[id];
  switch (req.query['type']) {
    case 'like':
      post.like += 1;
      break;
    case 'dislike':
      post.dislike += 1;
      break;
  }
  console.log(`[SERVER] POST => id: ${post.id}, like: ${post.like}, dislike: ${post.dislike}`);
  res.json(post);
});

application.listen(3001, function () {
  console.log('[SERVER] => localhost:3001');
});
