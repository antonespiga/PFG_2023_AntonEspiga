import {useState} from 'react'
import { getVisualizacionMasFrecuente } from '../utils/apicallsVisualizaciones'

export const useConsultaMasFrecuente = (userId) => {
const [conMasFreq, setConsMasFreq] = useState()
const temp = getVisualizacionMasFrecuente(userId)
setConsMasFreq(temp)
return conMasFreq
}