const express = require('express');

const app = express();

const logger = require('morgan');

const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

app.use(logger('dev'))

app.use(express.urlencoded({extended: true}));

app.use(express.json());;

mongoose.connect(process.env.DATABASEURL || 'mongodb://localhost/MoodGroove',  {useNewUrlParser: true});

mongoose.set('debug', true);

app.use('/users', userRoutes);

app.listen(process.env.PORT || 3001);

