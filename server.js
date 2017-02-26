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

app.use('/api/users', users);
app.use('/api/musicians', musicians);
app.use('/api/workshops', workshops);
app.use('/api/posts', posts);
app.use('/api/comments', comments);
app.use('/api/stages', stages);

app.listen(port, function () {
  console.log('Listening on port', port);
});
