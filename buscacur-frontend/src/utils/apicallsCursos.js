import API from './api'

export {
    getCursos,
    addCurso,
    delCurso,
    modCurso,
}

function getCursos() {
    return API.get('/cursos')
        .then((response) => response.data)
        .catch((error) => error.response.data )
}

function addCurso(curso) {
    return API.post('/cursos/', curso )
    .then((response) => response.data)
    .catch((error) => error.response.data )
}

function delCurso(curso) {
    return API.delete('/cursos/'+ curso._id)
    .then((response) => response.data)
    .catch((error) => error.response.data )
}

function modCurso(curso) {
    return API.put('/cursos/'+ curso._id, curso)
    .then((response) => response.data)
    .catch((error) => error.response.data )
}