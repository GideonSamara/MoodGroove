const router = require('express').Router();

const {logout, login, signup} = require('../controller/user');

router.get('/logout', logout);

router.post('/login', login);

router.post('/signup', signup);

module.exports = router;


