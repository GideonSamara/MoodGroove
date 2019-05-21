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

async function checkPassword(someOtherPlainText) {

    try {

        let checkPassword = await bcrypt.compare(someOtherPlainText, hash);

        return checkPassword;

    }

    catch (err) {

        if (err) throw err;

    }
}

module.exports = {hashPassword, checkPassword};