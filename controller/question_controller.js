const express = require('express');
var router = express.Router();



var Questions = require('../routes/questions');
router.post('/ask', Questions.askQuestion);
router.post('/edit', Questions.editQuestion);

router.get('/get', Questions.getQuestion);
router.get('/getAll', Questions.getQuestions);
router.get('/getUnanswered', Questions.getUnansweredQuestions);



module.exports = router;