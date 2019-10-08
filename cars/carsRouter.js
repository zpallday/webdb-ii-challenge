const express = require('express');
const db = require('data/dbConfig')
const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars)
    })
    .catch (error => {
        res.status(500).json({ message: 'Failed'})
    })
})

router.get('/:id', (req,res) => {
    const { id } = req.params;
    db('cars')
    .where({id}).first()
    .then(cars => {
        res.json(cars)
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed cars'})
    })
})

router.post('/', (req,res) => {
    const carData = req.body;
    db('cars').insert(carData)
    .then(ids => {
        db('cars')
        .where({ id: id[0]})
        .then(newCarEntry => {
            res.status(201).json(newCarEntry)
        })
    })
    .catch(error => {
        res.status(500).json({ message: "Filed post"})
    })
})

router.put('/:id', (req,res) => {
    const { id } = req.params;
    const changes = req.body;
     db('cars')
    .where({ id })
    .update(changes)
    .then( count => {
        if (count) {
            res.json({update: count});
        } else {
            res.status(404).json({ message: "failed the put"})
        }
    })
})

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    db('cars')
    .where({ id })
    .del()
    .then( count => {
        if (count) {
            res.json({del: count});
        } else {
            res.status(404).json({ message: "failed the del"})
        }
    })
    .catch(error => {
        res.status(500).json({message: 'failed the del'})
    })
})

module.exports = router;