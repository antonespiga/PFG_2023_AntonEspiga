import API from './api'

export {
    getCursoById,
    getCursosFilter
}

function getCursosFilter(params) {
    return API.get('/consultas/filter/', { params: { params } })
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

function getCursoById() {
    return API.get('/cursos/:id')
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

