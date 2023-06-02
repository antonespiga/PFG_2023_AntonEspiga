import API from './api'

export {
   addVisualizacion,
   getVisualizaciones,
   getVisualizacionesByCreditos,
   getVisualizacionesByProfesor,
   getVisualizacionesByDirector,
   getVisualizacionesBySemestre,
   getVisualizacionesByTematica,
   getVisualizacionesByTipo,
   getVisualizacionesByTitulo,
   getVisualizacionesByNombre,
   getVisualizacionesUsuario,
   modUsuarioCont,
   getVisualizacionesByImparticion
}



function addVisualizacion(visualizacion) {
    return API.post('/visualizaciones/', visualizacion )
    .then((response) => response.data)
    .catch((error) => error.response.data)
}

function getVisualizaciones() {
    return API.get('/visualizaciones')
    .then((response) => response.data)
    .catch((error) => error.response.data)
}

function getVisualizacionesByNombre() {
    return API.get('/visualizaciones/nombre')
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getVisualizacionesByTipo() {
    return API.get('/visualizaciones/tipo')
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getVisualizacionesByTematica() {
    return API.get('/visualizaciones/tematica')
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}


function getVisualizacionesByTitulo() {
    return API.get('/visualizaciones/titulo')
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getVisualizacionesByDirector() {
    return API.get('/visualizaciones/director')
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getVisualizacionesByProfesor() {
    return API.get('/visualizaciones/profesor')
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getVisualizacionesBySemestre() {
    return API.get('/visualizaciones/semestre')
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getVisualizacionesByCreditos() {
    return API.get('/visualizaciones/creditos')
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}


function getVisualizacionesByImparticion() {
    return API.get('/visualizaciones/imparticion')
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getVisualizacionesUsuario(usuario) {
    return API.get('visualizaciones/:id' + usuario)
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function modUsuarioCont(usuario) {
    return API.put('/visualizaciones/'+ usuario._id, usuario)
    .then((response) => response.data)
    .catch((error) => error.response.data )
}