const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages_controller');

router.get('/person1', messagesController.person1);
router.get('/person2', messagesController.person2);
router.get('/', messagesController.person1);
module.exports = router;
