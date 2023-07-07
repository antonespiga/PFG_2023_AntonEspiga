import API from './api'

export {
    getCursoById,
    getCursosByTematica,
    getCursosByTipo,
    getCursosByTitulo,
    getCursosBySemestre,
    getCursosByCreditos,
    getCursosByProfesor,
    getCursosByDirector,
    getCursosByNombre,
    getCursosByImparticion,
    getCursosFilter
   }

   function getCursosFilter(params) {
    return API.get('/consultas/filter/' , {params:{params}})
    .then((response) =>(response.data) )
    .catch((error) => error.response.data )
   }

   function getCursoById() {
    return API.get('/cursos/:id')
    .then((response) =>(response.data) )
    .catch((error) => error.response.data )
}

function getCursosByNombre(parNombre) {
    return API.get('/consultas/nombre/' + parNombre)
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getCursosByTipo(parTipo) {
    return API.get('/consultas/tipo/' + parTipo)
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getCursosByTematica(parTematica) {
    return API.get('/consultas/tematica/'+ parTematica)
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}


function getCursosByTitulo(parTitulo) {
    return API.get('/consultas/titulo/' + parTitulo)
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getCursosByDirector(parDirector) {
    return API.get('/consultas/director/' + parDirector)
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getCursosByProfesor(parProfesor) {
    return API.get('/consultas/profesor/' + parProfesor)
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getCursosBySemestre(parSemestre) {
    return API.get('/consultas/semestre/'+ parSemestre)
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getCursosByCreditos(parCreditos) {
    return API.get('/consultas/creditos/'+ parCreditos)
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

function getCursosByImparticion(parImparticion) {
    return API.get('/consultas/imparticion/'+ parImparticion)
    .then((response) => (response.data))
    .catch((error) => error.response.data )
}

