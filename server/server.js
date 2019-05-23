const express = require('express'),

     app = express(),
     
     logger = require('morgan'),
     
     userRoutes = require('./routes/user');

require('./config/connection');

app.use(logger('dev'))

app.use(express.urlencoded({extended: true}));

app.use(express.json());;

app.use('/users', userRoutes);

app.listen(process.env.PORT || 3001);

