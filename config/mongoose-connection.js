const mongoose = require('mongoose');
const config = require('config');

const dbgr = require('debug')('development:mongoose');
mongoose
    .connect(`${config.get('MONGODB_URI')}`)
    .then(function () {
        dbgr('mongoose connection connected successfully ');
    })
    .catch(function (err) {
        dbgr(' mongoose connection failed', err);
    });
module.exports = mongoose.connection;

// "MONGODB_URI": "mongodb://127.0.0.1:27017"