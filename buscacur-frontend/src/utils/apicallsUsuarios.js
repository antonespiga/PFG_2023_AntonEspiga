import API from './api'

export {
   getUsuarioById, 
   getUsuarios,
   addUsuario,
   delUsuario,
   modUsuario,
   loginUsuario,
   registroUsuario, 
}

function getUsuarioById(id) {
    return API.get('/usuarios/'+ id)
    .then((response) =>(response.data) )
    .catch((error) => error.response.data )
}

function addUsuario(usuario) {
    return API.post('/usuarios/', usuario )
    .then((response) => response.data)
    .catch((error) => error.response.data)
}

function delUsuario(usuario) {
    return API.delete('/usuarios/'+ usuario._id)
    .then((response) => response.data)
    .catch((error) => error.response.data )
}

function modUsuario(usuario) {
    return API.put('/usuarios/'+ usuario._id, usuario)
    .then((response) => response.data)
    .catch((error) => error.response.data )
}

function getUsuarios() {
    return API.get('/usuarios')
    .then((response) => response.data)
    .catch((error) => error.response.data )
}

function loginUsuario({email, clave}) {
    return API.post('/login', {email, clave})
    .then((response) => response.data)
    .catch((error) => error.response.data)
}

function registroUsuario(usuario) {
    return API.post('/registro', usuario)
    .then((response) => response.data)
    .catch((error) => error.response.data)
}