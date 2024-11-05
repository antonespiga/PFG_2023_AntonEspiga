import API from './api'

export {
    getCursos,
    getCursosFiltrados,
    addCurso,
    delCurso,
    modCurso,
    getCursosNumber,
}

 function getCursos() {
    return API.get('/cursos')
        .then((response) => response.data)
        .catch((error) => error.response.data)
}


function getCursosFiltrados(page) {
    return API.get('/cursos/page/' , {params: {page}} )
        .then((response) => response.data)
        .catch((error) => error.response.data)
}

function getCursosNumber() {
    return API.get('/cursos/count')
    .then((response) => response.data)
    .catch((error) => error.response.data)
}

function addCurso(curso) {
    return API.post('/cursos/', curso)
        .then((response) => response.data)
        .catch((error) => error.response.data)
}

function delCurso(curso) {
    return API.delete('/cursos/' + curso._id)
        .then((response) => response.data)
        .catch((error) => error.response.data)
}

function modCurso(curso) {
    return API.put('/cursos/' + curso._id, curso)
        .then((response) => response.data)
        .catch((error) => error.response.data)
}

