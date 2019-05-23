const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASEURL || 'mongodb://localhost/MoodGroove',  {
    
    useNewUrlParser: true,

    useCreateIndex: true,

});

mongoose.set('debug', true);