const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');


router.get('/', usersController.home)
router.get('/profile', usersController.profile);
router.get('/posts', usersController.posts);
router.get('/sign-in', usersController.singin);
router.get('/sign-up', usersController.signup);
router.post('/create', usersController.create);
//use passport as a middleware to authenticate:
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'}
), usersController.createSession);
module.exports = router;