const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message:"Get Tasks"})
})

router.post('/', (req, res) => {
    res.status(200).json({message:"Set Tasks"})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message:`Update task ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message:`Delete task ${req.params.id}`})
})

module.exports = router