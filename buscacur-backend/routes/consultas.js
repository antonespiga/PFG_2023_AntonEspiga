const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const { getCursos, getCursosFilter, getCursoById, getTitulacionCursos, getTitulacionUniversitarias } = require ('../controllers/consultas')

const {getTipos, getSemestres, getCreditos, getTematicas, getProfesores,
     getDirectores, getTitulos, getImparticions, getNombres } = require ('../controllers/consultas')

//router.get('/', getCursos);
router.get('/filter/', auth, getCursosFilter)
router.get('/:_id', auth, getCursoById);
router.get('/data/nombres',auth, getNombres);
router.get('/data/semestres', auth, getSemestres);
router.get('/data/creditos', auth, getCreditos);
router.get('/data/tematicas', auth, getTematicas);
router.get('/data/profesores', auth, getProfesores);
router.get('/data/directores', auth, getDirectores);
router.get('/data/tipos', auth, getTipos);
router.get('/data/titulos',auth, getTitulos)
router.get('/data/imparticions',auth, getImparticions)
router.get('/data/titulacionCursos',auth, getTitulacionCursos)


module.exports = router;