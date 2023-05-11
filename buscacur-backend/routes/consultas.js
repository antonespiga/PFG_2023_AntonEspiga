const express = require('express');
const router = express.Router();

const { getCursos, getCursosByAfinidad, getCursoById, getCursosByDirector ,
getCursosByNCreditos, getCursosByNombre, getCursosByProfesor, 
getCursosBySemestre, getCursosByTematica, getCursosByTipo, getNombres, getCursosByTitulo} = require ('../controllers/consultas')

const {getTipos, getSemestres, getCreditos, getTematicas, getProfesores, getDirectores, getTitulos} = require ('../controllers/consultas')

router.get('/', getCursos);
router.get('/:_id', getCursoById);
router.get('/nombre/:nombre', getCursosByNombre);
router.get('/data/nombres', getNombres);
router.get('/semestre/:semestre', getCursosBySemestre);
router.get('/data/semestres', getSemestres);
router.get('/creditos/:creditos', getCursosByNCreditos);
router.get('/data/creditos', getCreditos);
router.get('/tematica/:tematica', getCursosByTematica);
router.get('/data/tematicas', getTematicas);
router.get('/profesor/:profesor', getCursosByProfesor);
router.get('/data/profesores', getProfesores);
router.get('/director/:director', getCursosByDirector);
router.get('/data/directores', getDirectores);
router.get('/tipo/:tipo', getCursosByTipo);
router.get('/data/tipos', getTipos);
router.get('/titulo/:titulo', getCursosByTitulo);
router.get('/data/titulos', getTitulos)

module.exports = router;