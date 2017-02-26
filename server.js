'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

var port = process.env.PORT || 3000;

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const users = require('./routes/users');
const musicians = require('./routes/musicians');
const workshops = require('./routes/workshops');
const posts = require('./routes/posts');
const comments = require('./routes/comments');
const stages = require('./routes/stages');

// var allowCrossDomain = function (req, res, next) {
//   res.header('Allow-Control-Allow-Origin', '*');
//   res.header('Allow-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Allow-Control-Allow-Headers', 'Content-Type');
//   next();
// };
//
// app.use(allowCrossDomain);
app.use('/api/users', users);
app.use('/api/musicians', musicians);
app.use('/api/workshops', workshops);
app.use('/api/posts', posts);
app.use('/api/comments', comments);
app.use('/api/stages', stages);

app.listen(port, function () {
  console.log('Listening on port', port);
});
