import API from './api'

export {
    getNombres,
    getTipos,
    getProfesores,
    getDirectores,
    getTematicas,
    getSemestres,
    getCreditos,
    getTitulos,
    getImparticions
}

function getNombres() {
    return API.get('consultas/data/nombres')
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

function getTipos() {
    return API.get('consultas/data/tipos')
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

function getProfesores() {
    return API.get('consultas/data/profesores')
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

function getDirectores() {
    return API.get('consultas/data/directores')
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

function getTematicas() {
    return API.get('consultas/data/tematicas')
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

function getSemestres() {
    return API.get('consultas/data/semestres')
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

function getCreditos() {
    return API.get('consultas/data/creditos')
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

function getTitulos() {
    return API.get('consultas/data/titulos')
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}

function getImparticions() {
    return API.get('consultas/data/imparticions')
        .then((response) => (response.data))
        .catch((error) => error.response.data)
}