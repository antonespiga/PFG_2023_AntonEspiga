var express = require('express');
var router = express.Router();
const { loginUser, registroUser } = require('../controllers/usuarios');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*  Login - registro usuarios  */
router.post('/login', loginUser)
router.post('/registro', registroUser)


module.exports = router;
