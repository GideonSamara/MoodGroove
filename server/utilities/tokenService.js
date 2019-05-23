require('dotenv').config();

const { SECRET } = process.env;

const webToken = require('jsonwebtoken');

function createToken(user) {

  return webToken.sign ( {

    exp: Math.floor(Date.now() / 1000) + (60 * 60),

    data: user

  }, SECRET);

}

async function validToken(token) {

  try {

    var decoded = await jwt.verify(token, SECRET);

    return decoded;

  } 

  catch (err) {

    if (err) throw err;

  }
}

module.exports = {createToken, validToken}