const express = require('express');
const router = new express.Router();

const { getProject1Requests, getServerStartTime } = require('../logger/logger');

// Gets basic server stats
router.get('/info', async (req, res) => {
  try {
    res.status(200).send({
      serverStartTime: getServerStartTime(),
      project1Requests: getProject1Requests(),
    });
  } catch (error) {
    res.status(500).send({
      message: error?.message || 'Unknown server error',
    });
  }
});

module.exports = router;
