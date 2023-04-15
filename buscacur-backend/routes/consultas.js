const express = require('express');
const router = express.Router();

const { getCursos, getCursosByAfinidad, getCursoById, getCursosByDirector ,
getCursosByNCreditos, getCursosByNombre, getCursosByProfesor, 
getCursosBySemestre, getCursosByTematica} = require ('../controllers/consultas')

//router.get('/', getCursos);
//router.get('/:_id', getCursoById);
router.get('/nombre/:nombre', getCursosByNombre);
router.get('/semestre/:semestre', getCursosBySemestre);
router.get('/creditos/:creditos', getCursosByNCreditos);
router.get('/tematica/:tematica', getCursosByTematica);
router.get('/profesor/:profesor', getCursosByProfesor);
router.get('/director/:director', getCursosByDirector);

module.exports = router;