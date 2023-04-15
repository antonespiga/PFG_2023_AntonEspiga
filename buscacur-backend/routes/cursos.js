const express = require('express');
const router = express.Router();

const { getCursos, getCursoById, addCurso, deleteCursoById, updateCursoById} = require ('../controllers/cursos');


router.get('/', getCursos);
router.get('/:_id', getCursoById);
router.post('/', addCurso);
router.delete('/:id', deleteCursoById);
router.put('/:id', updateCursoById);

module.exports = router;