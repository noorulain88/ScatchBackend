const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const ejs = require('ejs');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');
const { connection } = require('mongoose');
const usersRouter = require('./routes/usersRouter');
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productsRouter');
const indexRouter = require('./routes/indexRouter');
const db = require('./config/mongoose-connection');

require('dotenv').config();

app.use(
    session({

        secret: process.env.JWT_ENV,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(flash());

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieparser());

app.use('/owners', ownersRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);

app.listen(3000);
