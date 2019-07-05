const express = require('express');
const router  = express.Router();
const List    = require('../models/List');

router.get('/', async (req, res) => {
    await res.send('Home Page');
});
router.get('/all', async (req, res) => {
    await List.find()
        .then(result => res.send(result))
        .catch(err => console.log(err))
});
router.get('/user/:id', async (req, res) => {
    let _id = req.params.id
    await List.findById(_id)
        .then(result => res.send(result))
        .catch(err => console.log(err))
});
router.post('/add',async (req, res) => {
    let newList = new List({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        phone : req.body.phone
    })
    await newList.save()
        .then(result => res.send(result))
        .catch(err => console.log(err))
});
router.put('/update/:id', async (req, res) => {
    let _id = req.params.id;
    let list = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        phone : req.body.phone
    }
    await List.findByIdAndUpdate(_id, list)
        .then(result => res.send('OK'))
        .catch(err => console.log(err))

});
router.delete('/remove/:id', async (req, res) => {
    let _id = req.params.id;
    
    await List.findByIdAndRemove(_id)
        .then(result => res.send('OK'))
        .catch(err => console.log(err))

});

module.exports = router;