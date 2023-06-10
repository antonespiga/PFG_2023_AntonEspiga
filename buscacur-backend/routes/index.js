const express = require('express');
const router = express.Router();
const { loginUser, registroUser, privateUser } = require('../controllers/usuarios');
const { backupBd, configurar, getConfig, restart } = require('../controllers/sistema')
const auth = require('../middlewares/auth')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*  Login - registro usuarios  */
router.post('/login',  loginUser)
router.post('/registro', registroUser)
router.get('/private', auth, privateUser)
router.get('/backup', auth, backupBd) 
router.put('/configuracion', auth, configurar )
router.get('/configuracion', auth, getConfig)
router.post('/restart', auth, restart )

module.exports = router;
