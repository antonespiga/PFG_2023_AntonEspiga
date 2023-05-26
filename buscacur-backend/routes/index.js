const express = require('express');
const router = express.Router();
const { loginUser, registroUser } = require('../controllers/usuarios');
const auth = require('../middlewares/auth')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*  Login - registro usuarios  */
router.post('/login',  loginUser)
router.post('/registro', registroUser)
router.get ('/private', auth, (req,res) => {
  
  res.status(200).json({message: 'Tienes acceso'}) })


module.exports = router;
