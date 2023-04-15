const User = require('../models/usuarios')

exports.getUsers = async(req, res, next) => {
    await User.find({})
    .then((listUsers) => {
        res.status(200).json(listUsers)})
    .catch(next)
}

exports.getUserById = async(req, res, next) => {
    await User.findById({'_id': req.params._id})
    .then( function(listUser)  {
        res.status(200).json(listUser)})
        .catch(next)
}

exports.addUser = async(req, res, next) => {
    const nuevoUsuario = new User(req.body)
    await User.create(nuevoUsuario)
    .then(() => res.status(200).json('Usuario añadido'))
    .catch(next)
}

exports.deleteUser = async(req, res, next) => {
    await User.findByIdAndDelete( {'_id': req.params.id} )
    .then(() => res.status(200).json('Usuario eliminado:'+req.params.id))
    .catch(next)
}

exports.updateUser = async(req, res, next) => {
    await User.findByIdAndUpdate( req.params.id, req.body, {new: true} )
    .then(() => res.status(200).json(`Usuario ${req.params.id} modificado`))
    .catch(next)
}