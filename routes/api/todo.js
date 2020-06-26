const express = require('express');

const db = require('./../../database');

const router = express.Router();

router.get('/', (req, res) => {
    db.select().from('todo').then(data => {
        res.send(data);
    });
});

router.post('/', (req, res) => {
    db.insert(req.body).returning('*').into('todo').then(data => {
        res.send(data);
    });
});

module.exports = router;