import { getCursosFiltrados } from "../utils/apicallsCursos"
import { useState, useEffect } from 'react'

export function useListaFiltrada(page) {

    const [cursosFiltrados, setCursosFiltrados] = useState([])
    // let offset =  ((page - 1) * perPage);
    //let limit = (perPage);
    
    

    useEffect(() => {
        const cursosFiltrados = (page) => {
            getCursosFiltrados(page)
                .then((response) => {setCursosFiltrados(response)})
        }
        cursosFiltrados(page)
}, []);

return cursosFiltrados;
}