const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const { getVisualizaciones,addVisualizacion, getVisualizacionesByNombre, getVisualizacionesByDirector,
    getVisualizacionesByCreditos, getVisualizacionesByTipo, getVisualizacionesBySemestre,
getVisualizacionesUsuario, getVisualizacionesByTematica, getVisualizacionesByImparticion,
getVisualizacionesByProfesor, getVisualizacionesByTitulo, getVisualizacionMasFrecuente,
updateUserCont} = require('../controllers/visualizaciones');


router.get('/', auth, getVisualizaciones);
router.post('/', auth, addVisualizacion)
router.get('/nombre', auth, getVisualizacionesByNombre);
router.get('/semestre', auth, getVisualizacionesBySemestre);
router.get('/creditos', auth, getVisualizacionesByCreditos);
router.get('/tematica', auth, getVisualizacionesByTematica);
router.get('/imparticion', auth, getVisualizacionesByImparticion);
router.get('/profesor', auth, getVisualizacionesByProfesor);
router.get('/director', auth, getVisualizacionesByDirector);
router.get('/tipo', auth, getVisualizacionesByTipo);
router.get('/titulo', auth, getVisualizacionesByTitulo);
router.get('/frec/:id', getVisualizacionMasFrecuente)
router.get('/:id', getVisualizacionesUsuario)
router.put('/:id', auth, updateUserCont)



module.exports = router;
