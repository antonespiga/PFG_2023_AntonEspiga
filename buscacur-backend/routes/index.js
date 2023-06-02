const express = require('express');
const router = express.Router();
const { loginUser, registroUser, privateUser } = require('../controllers/usuarios');
const auth = require('../middlewares/auth')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*  Login - registro usuarios  */
router.post('/login',  loginUser)
router.post('/registro', registroUser)
router.get ('/private', auth, privateUser)
 

module.exports = router;
