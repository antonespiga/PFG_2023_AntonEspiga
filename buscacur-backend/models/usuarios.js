const mongoose = require('mongoose')
require('mongoose-type-email')

const bcrypt = require ('bcrypt')
const saltRounds = 10



const UsuarioSchema = new mongoose.Schema({
    email:{type:mongoose.SchemaTypes.Email, required:true},
    nombre: String,
    apellido1: String,
    apellido2: String,
    poblacion: String,
    codigoPostal: Number,
    titulacion: String,
    clave: { type: String, required:true},
    rol:{ type: String, enum: ['Socio','Administrador'], default: "Socio"},
    cont:{type:Number, default:0}
})

UsuarioSchema.pre('save', function(next) {
    const user = this

    if(this.isModified("clave") || this.isNew) {
        bcrypt.genSalt(saltRounds, function (saltError, salt) {
            if(saltError) {
                return next(saltError)
            }
            else {
                bcrypt.hash(user.clave, salt, function(hashError, hash) {
                    if(hashError)
                    {
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

UsuarioSchema.methods.compareClave = function(candidata, result) {
    bcrypt.compare(candidata, this.clave, function(error, isMatch) {
        if(error) {
            return result(error)
        }
        else result(null, isMatch)
    }
    )
}


module.exports = mongoose.model('Usuario', UsuarioSchema);

