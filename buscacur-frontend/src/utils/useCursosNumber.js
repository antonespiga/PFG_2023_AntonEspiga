import { getCursosNumber } from "../utils/apicallsCursos"
import { useState, useEffect } from 'react'

export function useCursosNumber() {

    const [cursosNumber, setCursosNumber] = useState()
    useEffect(() => {
        const cursosNumber = () => {
            getCursosNumber()
                .then((response) => {
                    setCursosNumber(response)
                })
        }
        cursosNumber()
    }, []);
    return cursosNumber;
}