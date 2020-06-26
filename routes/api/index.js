const express = require('express');

const todoRoute = require('./todo');

const router = express.Router();

router.use('/todo', todoRoute);


module.exports = router;