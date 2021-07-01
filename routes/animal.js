const express = require('express');
const elevagedb = require('../mysql/db');

const router = express.Router();

router.get('/', async (req, res, next) => {
    // res.status(200).json({ test: 'test OK'});
    try {
        let results = await elevagedb.all();
        res.json(results);
    } catch(error) {
        console.log(error);
        res.status(501).json({ error });
    }
});

router.get('/:espece', async (req, res, next) => {
    // res.status(200).json({ test: 'test OK'});
    try {
        let results = await elevagedb.one(req.params.espece);
        res.json(results);
    } catch(error) {
        console.log(error);
        res.status(501).json({ error });
    }
});

module.exports = router;