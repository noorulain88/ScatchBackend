const express = require('express');
const isLoggin = require('../middlewares/isLoggin');
const router = express.Router();
router.get('/', function (req, res) {
    let error=req.flash("error")
    res.send("error",{error})
});

router.get('/shop', function (req, res) {
    res.send('this is shop router ');
});
module.exports = router;
