import API from './api'

export {
    getCursoById,
    getCursosFilter
}

function getCursosFilter(params, tipo, yQuery) {
    return API.get('/consultas/filter/', { params: { params, tipo, yQuery } })
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

function getCursoById() {
    return API.get('/cursos/:id')
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

