const express = require('express')
const router = express.Router()
const list = require('../posts')

// index
router.get('/', function (req, res) {
    res.json(list);
});
// show
router.get('/:id', function (req, res) {
    const obj = list.find(post => post.id == req.params.id)
    res.json(obj);
});
// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});
// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});
// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});
// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});
module.exports = router;