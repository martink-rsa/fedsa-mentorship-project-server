const express = require('express');
const router = new express.Router();

const Logger = require('../logger/logger');

const { products } = require('../data/project-1/data');

// Gets all products
router.get('/project-1/products', async (req, res) => {
  try {
    res.status(200).send(products);
    Logger.addProject1Request();
  } catch (error) {
    res.status(500).send({ message: error?.message || 'Unknown server error' });
  }
});

module.exports = { router };
