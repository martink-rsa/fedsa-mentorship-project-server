const express = require('express');
const path = require('path');
// Routers
const project1Router = require('./routers/project-1');

const dir = path.join(__dirname, 'public');

const app = express();
app.use(express.static(dir));
app.use(express.json());

// Routers
app.use(project1Router);

module.exports = app;
