'use strict'

const router = require('express').Router();

router.get('/', async (require, response) => {

  return response.json({ msg: 'pong' });

});

module.exports = router;
