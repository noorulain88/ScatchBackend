const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');
module.exports.registerUser = async function (req, res) {
    try {
        let { email, fullname, password } = req.body;
        let user = await userModel.findOne({ email });
        if (user) return res.status(401).send('already have account ');
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullname,
                    });
                    let token = generateToken(user);
                    res.cookie('token', token);
                    console.log(generateToken);
                    res.send('user created successfully');
                }
            });
        });
    } catch (error) {
        console.error('An error occurred:', error.message);
        res.status(500).send('Unable to register user');
    }
};
module.exports.login = async function (req, res) {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) return res.send('not found email and password');
    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            let token = generateToken(user);
            res.cookie('token', token);
            res.send('successful ');
        } else {
            res.status(401).send('u password incorrect ');
        }
    });
};
