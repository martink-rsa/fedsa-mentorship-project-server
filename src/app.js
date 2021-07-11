const express = require('express');
// Routers
const project1Router = require('./routers/project-1');

const app = express();
app.use(express.json());

// Routers
app.use(project1Router);

module.exports = app;
