const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const { getUsers, getUserById, addUser, updateUser, deleteUser,
        loginUser, registroUser, getUserIdFromToken } = require('../controllers/usuarios');

/* CRUD usuarios  */
router.get('/', auth, getUsers);
router.get('/:_id', auth, getUserById)
router.post('/', auth, addUser)
router.put('/:id', auth, updateUser)
router.delete('/:id', auth, deleteUser)



module.exports = router;
