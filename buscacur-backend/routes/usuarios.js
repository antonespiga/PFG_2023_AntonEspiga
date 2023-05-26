const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const { getUsers, getUserById, addUser, updateUser, deleteUser,
        loginUser, registroUser } = require('../controllers/usuarios');

/* CRUD usuarios  */
router.get('/', getUsers);
router.get('/:_id', auth, getUserById)
router.post('/', addUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router;
