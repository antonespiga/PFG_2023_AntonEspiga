import { getCursosFiltrados } from "../utils/apicallsCursos"
import { useState, useEffect } from 'react'

export function useListaFiltrada(offset, limit) {

    const [cursosFiltrados, setCursosFiltrados] = useState([])
    useEffect(() => {
        const listCursosFiltrados = () => {
            getCursosFiltrados(offset, limit)
                .then((response) => {
                    setCursosFiltrados(response)
                })
        }
        listCursosFiltrados()
    }, []);
    return cursosFiltrados;
}