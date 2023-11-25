 

export {
    filtrarTitulacion
}

function filtrarTitulacion(grado,claves) {
   
        if (grado === claves[0]) {
            return{ titulacionCurso: {$in:[ 'Diploma de experto profesional','Diploma de experto universitario'] }}
        }
        else if (grado === claves[1]) {
            return{titulacionCurso: 'Máster de formación permanente'} 
        }
        else if (grado === claves[2]) {
            return{$or:[{titulacionCurso: ['Máster Universitario']},{tipo: ['Reglado']}]}
        }
        else if (grado === claves[3]) {
            return{ titulacionCurso: 'Máster Universitario' } 
        }
       else {
            return{ titulacionCurso: 'Certificado de enseñanza abierta' }
        }
    }
