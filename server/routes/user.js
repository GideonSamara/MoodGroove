const router = require('express').Router();

const {cookieCheck, signup,  login, logout} = require('../controller/user');

router.get('/authorized', cookieCheck);

router.post('/signup', signup);

router.post('/login', login);

router.get('/logout', logout);

module.exports = router;


