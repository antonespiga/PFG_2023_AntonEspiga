const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const { getCursos, getCursosByAfinidad, getCursoById, getCursosByDirector ,
getCursosByNCreditos, getCursosByNombre, getCursosByProfesor, 
getCursosBySemestre, getCursosByTematica, getCursosByTipo, getNombres, getCursosByTitulo} = require ('../controllers/consultas')

const {getTipos, getSemestres, getCreditos, getTematicas, getProfesores, getDirectores, getTitulos} = require ('../controllers/consultas')

router.get('/', getCursos);
router.get('/:_id', auth, getCursoById);
router.get('/nombre/:nombre', auth, getCursosByNombre);
router.get('/data/nombres',auth, getNombres);
router.get('/semestre/:semestre', auth, getCursosBySemestre);
router.get('/data/semestres', auth, getSemestres);
router.get('/creditos/:creditos', auth, getCursosByNCreditos);
router.get('/data/creditos', auth, getCreditos);
router.get('/tematica/:tematica', auth, getCursosByTematica);
router.get('/data/tematicas', auth, getTematicas);
router.get('/profesor/:profesor', auth, getCursosByProfesor);
router.get('/data/profesores', auth, getProfesores);
router.get('/director/:director', auth, getCursosByDirector);
router.get('/data/directores', auth, getDirectores);
router.get('/tipo/:tipo', auth, getCursosByTipo);
router.get('/data/tipos', auth, getTipos);
router.get('/titulo/:titulo', auth, getCursosByTitulo);
router.get('/data/titulos',auth,  getTitulos)

module.exports = router;