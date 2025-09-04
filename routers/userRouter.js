const express = require('express');

const router = express.Router();
const Model = require('../models/userModel');

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

// getall
router.get('/getall', (req, res) => {
   Model.find()
   .then((result) => {
   res.status(200).json(result);
}).catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});

//url parameter
router.delete('/getbycity', (req, res) => {
    console.log(req.params.city);
    res.send('getbycity respnse from user');
});
// getbyid
router.get('/getbyid/:id', (req, res) => {
    res.send('getbyid respnse from user');
});


// delete
router.delete('/getdelete', (req, res) => {
    res.send('getdelete respnse from user');
});


// update
router.put('/getupdate', (req, res) => {
    res.send('getupdate respnse from user');
});

module.exports = router;