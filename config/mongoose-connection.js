const mongoose = require('mongoose');
require('dotenv').config();

const dbgr = require('debug')('development:mongoose');
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
    dbgr('MONGODB_URI is not defined in environment variables');
} else {
    mongoose
        .connect(mongoUri)
        .then(function () {
            dbgr('mongoose connection connected successfully');
        })
        .catch(function (err) {
            dbgr('mongoose connection failed', err);
        });
}

module.exports = mongoose.connection;
