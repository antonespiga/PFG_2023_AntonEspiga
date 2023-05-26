const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const { getCursos, getCursoById, addCurso, deleteCursoById, updateCursoById} = require ('../controllers/cursos');


router.get('/', getCursos);
router.get('/:_id', auth, getCursoById);
router.post('/', addCurso);
router.delete('/:id', deleteCursoById);
router.put('/:id', updateCursoById);

module.exports = router;