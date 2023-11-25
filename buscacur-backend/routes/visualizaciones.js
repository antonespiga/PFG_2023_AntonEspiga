const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const { getVisualizaciones,addVisualizacion,getVisualizacionesUsuario, getVisualizacionMasFrecuente,
     getVisualizacionMasFrecuenteTextoLibre, } = require('../controllers/visualizaciones');

router.get('/', auth, getVisualizaciones);
router.post('/', auth, addVisualizacion)
router.get('/frec/:id',  getVisualizacionMasFrecuente)
router.get('/frec/libre/:id', auth, getVisualizacionMasFrecuenteTextoLibre)
router.get('/:id', auth, getVisualizacionesUsuario)




module.exports = router;
