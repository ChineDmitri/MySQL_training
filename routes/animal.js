const express = require('express');
const elevagedb = require('../mysql/db');
// import { getOne } from '../mysql/db.js';
// const getOne = require('../mysql/db');

const router = express.Router();

// router.get('/', async (req, res, next) => {
//     // res.status(200).json({ test: 'test OK'});
//     try {
//         let results = await elevagedb.all();
//         res.json(results);
//     } catch(error) {
//         console.log(error);
//         res.status(500).json({ error });
//     }
// });

router.get('/:espece', (req, res, next) => {
    elevagedb.getOne(req.params.espece)
    .then((animal) => {
        res.status(200).json(animal);    
    })
    .catch(() => {
        res.status(404).json({ error: "message" });
    }) 
});

router.get('/:espece/:sort', (req, res, next) => {
    elevagedb.getOneSortByDate(req.params.espece, req.params.sort)
    .then((animal) => {
        res.status(200).json(animal);    
    })
    .catch(() => {
        res.status(404).json({ error: "message" });
    }) 
});

module.exports = router;