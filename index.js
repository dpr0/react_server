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
  res.json({items: posts, page: parseInt(req.query['page']), postsLength: posts.length});
});

application.post('/', function (req, res) {
  console.log('[SERVER] => posts page');
  const pageNum = parseInt(req.query['page']);
  const chunkedPosts = _.chunk(posts, 2);
  res.json({items: chunkedPosts ? chunkedPosts[pageNum] : posts, page: pageNum, postsLength: posts.length});
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
  const post = posts[req.query['id']];
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
