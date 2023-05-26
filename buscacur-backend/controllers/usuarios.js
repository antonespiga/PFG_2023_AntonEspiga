const User = require('../models/usuarios')
const services = require('../services')

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
    try {
        const nuevoUsuario = new User(req.body)
        await User.create(nuevoUsuario)
        res.status(200).json({message:'Usuario añadido'})
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
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

exports.loginUser = async(req, res, next) => {
    let reqEmail = req.body.email
    let reqClave = req.body.clave
    try {
        const user = await User.findOne( {email: reqEmail});
        if(!user) { return res.status(404).json({message:'No encontrado'})}
        if(!eq(reqClave,user.clave))  {return res.status(401).json({message:"Credenciales incorrectas"}) }
        if (eq(reqClave,user.clave)) return res.status(200).json({
            message:"Login correcto",
            user,
            token: services.createToken(user)})
    } 
    catch(error) {
        return res.status(500).json({message:'Error en el servidor'})
    }
}

function eq(clave1,clave2) {
    return(clave1===clave2)
}
    


exports.registroUser = async(req, res, next) => {
    let reqEmail = req.body.email
    try {
    const user = await User.findOne( {email:reqEmail })
   if(!user) {console.log("no user")
        const newUser = new User(req.body)
        await User.create(newUser)
        return res.status(200).json({message:"Registro de usuario realizado"})}
    else
        return res.status(500).json({message: `usuario ya registrado: ${user.email}`})
    }
    catch(error){
        return res.status(500).json({message:"Error en el servidor"})

    }
    }
    


       
