var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Tyler",
    added: new Date()
  }, 
  {
    text: "Good morning!",
    user: "Jason",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', (req, res, next) => {
  messages.push({text: req.body.messageText, user: req.body.authorText, added: new Date()});
  res.redirect('/');
});

module.exports = router;
