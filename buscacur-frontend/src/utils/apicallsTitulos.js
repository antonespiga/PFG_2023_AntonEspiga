import API from './api'

export {
    getTitulos,
    addTitulo,
    delTitulo,
    modTitulo,
    getTitulo
}

function getTitulos() {
    return API.get('/titulos')
        .then((response) => response.data)
        .catch((error) => error.response.data)
}

function getTitulo() {
    return API.get('/titulos/:id')
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

function addTitulo(curso) {
    return API.post('/titulos/', titulo)
        .then((response) => response.data)
        .catch((error) => error.response.data)
}

function delTitulo(titulo) {
    return API.delete('/titulos/' + titulo._id)
        .then((response) => response.data)
        .catch((error) => error.response.data)
}

function modTitulo(titulo) {
    return API.put('/titulos/' + titulo._id, titulo)
        .then((response) => response.data)
        .catch((error) => error.response.data)
}

