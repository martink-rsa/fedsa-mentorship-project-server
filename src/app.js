const express = require('express');
const path = require('path');
// Routers
const { router: project1Router } = require('./routers/project-1');
const infoRouter = require('./routers/info');

const dir = path.join(__dirname, 'public');

const app = express();
app.use(express.static(dir));
app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Routers
app.use(project1Router);
app.use(infoRouter);

module.exports = app;
