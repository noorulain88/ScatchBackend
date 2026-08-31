const express = require('express');
const router = express.Router();
const { registerUser, login } = require('../controllers/autoControllers.js');

router.get('/', function (req, res) {
    res.send('users router is working');
});

router.post('/register', registerUser);
router.post('/login', login);

module.exports = router;
