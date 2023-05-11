const express = require('express');
const router = express.Router();

const { getUsers, getUserById, addUser, updateUser, deleteUser,
        loginUser, registroUser } = require('../controllers/usuarios');

/* CRUD usuarios  */
router.get('/', getUsers);
router.get('/:_id', getUserById)
router.post('/', addUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router;
