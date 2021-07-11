const express = require('express');
const router = new express.Router();

const { products } = require('../data/project-1/data');

// Gets all products
router.get('/project-1/products', async (req, res) => {
  res.status(200).send(products);
});

module.exports = router;
