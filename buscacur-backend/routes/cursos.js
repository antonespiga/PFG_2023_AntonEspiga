const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const { getCursos, getCursosFiltrados, getCursoById, addCurso, deleteCursoById, updateCursoById, getCursosNumber} = require ('../controllers/cursos');

router.get('/', getCursos);
router.get('/count', getCursosNumber)
router.get('/page/', getCursosFiltrados)
router.get('/:_id', auth, getCursoById);
router.post('/', auth, addCurso);
router.delete('/:id', auth, deleteCursoById);
router.put('/:id', auth, updateCursoById);


module.exports = router;