const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const { getTitulos, getTitulo, addTitulo, deleteTitulo, updateTitulo, getArrayTitulos } = require ('../controllers/titulos');

router.get('/list/', getArrayTitulos)
router.get('/', getTitulos);
router.get('/:id', getTitulo);
router.post('/', auth, addTitulo);
router.delete('/:id', auth, deleteTitulo);
router.put('/:id', auth, updateTitulo);


module.exports = router;