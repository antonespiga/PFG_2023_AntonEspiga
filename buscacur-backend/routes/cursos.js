const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const { getCursos, getCursoById, addCurso, deleteCursoById, updateCursoById} = require ('../controllers/cursos');


router.get('/', getCursos);
router.get('/:_id', auth, getCursoById);
router.post('/', auth, addCurso);
router.delete('/:id', auth, deleteCursoById);
router.put('/:id', auth, updateCursoById);

module.exports = router;