const User = require('../models/User');

module.exports = {

    login: function(req,res) {
        res.send('login successful');
        // res.redirect('/userx/authorized');
    },

    logout: function(req,res) {
        User.deleteMany({}, (err) =>{
        console.log('you are logged out');
        }
    )},

    signup: async function(req,res) {

        try {

            let user = User.create(req.body);
            res.send('signup successful');
            // res.redirect('/users/authorized');

        }

        catch (err) {

            if (err) throw err;

        }
      
        
    },

};

