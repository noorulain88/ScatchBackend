const express = require('express');
const ownerModel = require('../models/owner-model');
const router = express.Router();

router.get('/admin', function (req, res) {
    res.send('admin panel is working is working');
});

if (process.env.NODE_ENV === 'development') {
    router.post('/create', async function (req, res) {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res.status(502).send('You don’t have permission to create owner ');
        }
        let { fullname, email, password } = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        });
        res.status(201).send(createdOwner);
    });
}

module.exports = router;
