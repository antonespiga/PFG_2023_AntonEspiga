import API from './api'

export {
    crearCopia,
    configurarSistema,
    getConfig,
    restart
}

function crearCopia() {
    return API.get('/backup')
        .then((response) => response.data)
        .catch((error) => error.response.data)
}

function configurarSistema(configData) {
    return API.put('/configuracion', configData)
        .then((response) => response.data)
        .catch((error) => error.response.data)
}

function getConfig() {
    return API.get('/configuracion')
        .then((response) => response.data)
        .catch((error) => error.response.data)
}

function restart() {
    return API.post('/restart')
        .then((response) => response.data)
        .catch((error) => error.response.data)
}
