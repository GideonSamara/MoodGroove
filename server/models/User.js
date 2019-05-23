const mongoose = require('mongoose');

const {checkPassword, hashPassword} = require('../utilities/passwordService');

const UserSchema = new mongoose.Schema({

    username: String,
    password: String,
    email: String,

});

UserSchema.pre('save', async function(next) {

    let user = this;

    if (!user.isModified('password')) return next();

    try {
        
        let hash = await hashPassword(this.password);

        this.password = hash;

        next ();

    }

    catch (err) {

        if (err) throw err;
    }
});

UserSchema.method.compare = async function(candidatePassword) {

    try {

    let match = await checkPassword(candidatePassword, this.password)

    return match;

    }

    catch (err) {

        if (err) throw err;

    }
}


module.exports = mongoose.model('User', UserSchema);