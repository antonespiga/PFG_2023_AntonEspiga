const jwt = require('jsonwebtoken')
const config = require ('../config.js')
const moment = require('moment')


function createToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        clave: user.clave
    }

    return token = jwt.sign(payload, config.SECRET_TOKEN, {
        expiresIn:60*60*24*7
    })
}

function verificarToken(token)  {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.verify(token, config.SECRET_TOKEN)
            if (payload.exp < moment().unix()) {
                reject({
                    status:500,
                    message: 'El token ya ha expirado'
                })
            }
            resolve(payload)
            } catch(err) {
                reject({
                    status:500,
                    message:'Token no válido'
                })
            }
        })
      
            return decoded
        }
    


module.exports = {
    createToken,
    verificarToken
}