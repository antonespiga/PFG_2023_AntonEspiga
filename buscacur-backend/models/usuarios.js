const mongoose = require('mongoose')
require('mongoose-type-email')

const bcrypt = require('bcrypt')
const saltRounds = 10

const UsuarioSchema = new mongoose.Schema({
    email: { type: mongoose.SchemaTypes.Email, required: true },
    nombre: { type: String, required:true },
    apellido1: { type: String, required:true },
    apellido2: { type: String, required:true },
    poblacion: { type: String, required:true },
    codigoPostal: { type: Number, required: true },
    titulacion: { type: String, required:true },
    clave: { type: String, required: true },
    rol: { type: String, enum: ['Socio', 'Administrador'], default: "Socio", required:true },
})

UsuarioSchema.pre('save', function (next) {
    const user = this

    if (this.isModified("clave") || this.isNew) {
        bcrypt.genSalt(saltRounds, function (saltError, salt) {
            if (saltError) {
                return next(saltError)
            }
            else {
                bcrypt.hash(user.clave, salt, function (hashError, hash) {
                    if (hashError) {
                        return next(hashError)
                    }
                    user.clave = hash
                    next()
                })
            }
        })
    }
    else {
        return next()
    }
})

UsuarioSchema.methods.compareClave = function (candidata, result) {
    bcrypt.compare(candidata, this.clave, function (error, isMatch) {
        if (error) {
            return result(error)
        }
        else result(null, isMatch)
    }
    )
}


module.exports = mongoose.model('Usuario', UsuarioSchema);

