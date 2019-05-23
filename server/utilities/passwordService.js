const bcrypt = require('bcrypt');

const saltRounds = process.env.SALTROUNDS || 10;

async function hashPassword(myPlaintextPassword) {

    try {

        let hashPassword = await bcrypt.hash(myPlaintextPassword, saltRounds);

        return hashPassword;

    }
    
    catch(err) {

        if (err) throw err;
    }
}

async function comparePassword(someOtherPlainText) {

    try {

        let match = await bcrypt.compare(someOtherPlainText, hash);

        return match;

    }

    catch (err) {

        if (err) throw err;

    }
}

module.exports = {hashPassword, comparePassword};