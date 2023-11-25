import React, { useState, useEffect } from 'react'
import {
    Row, Col, Button, Container, FormGroup, Label, Input,
    Dropdown, DropdownToggle, DropdownItem, DropdownMenu, InputGroup,
    Badge, CardTitle, Navbar
} from 'reactstrap'
import { FaThLarge, FaThList, FaSearch } from 'react-icons/fa'
import { getCursos } from '../utils/apicallsCursos'
import { getCursosFilter } from '../utils/apicallsConsultas'
import ListadoTabla from '../components/ListadoTabla'
import ListadoCards from '../components/ListadoCards'
import { filtrarTitulacion } from '../utils/filtrarTitulacion'
import {
    getNombres, getTipos, getTitulos, getSemestres, getDirectores,
    getProfesores, getTematicas, getCreditos, getImparticions, getTitulacionCursos, getTitulacionUniversitarias
} from '../utils/apicallsData'
import { addVisualizacion, getVisualizacionMasFrecuente, getVisualizacionMasFrecuenteTextoLibre, modUsuarioCont } from '../utils/apicallsVisualizaciones'
import Perfil from '../components/Perfil'
import Error from "./Error"
import { getUsuarioById } from '../utils/apicallsUsuarios'
import { normalizarTexto } from '../utils/normalizarTexto'
import './Socio.css'

export default function Consultas() {

    const [listado, setListado] = useState(true)
    const [afinidad, setAfinidad] = useState()
    const [usuario, setUsuario] = useState({})
    const [grado, setGrado] = useState()
    const [cursos, setCursos] = useState([])
    const [nombres, setNombres] = useState([])
    const [tipos, setTipos] = useState([])
    const [creditosD, setCreditosD] = useState([])
    const [profesores, setProfesores] = useState([])
    const [directores, setDirectores] = useState([])
    const [tematicas, setTematicas] = useState([])
    const [semestres, setSemestres] = useState([])
    const [titulos, setTitulos] = useState([])
    const [titulacionCursos, setTitulacionCursos] = useState([])
    const [imparticions, setImparticions] = useState([])
    const [afinidades, setAfinidades] = useState(['Consultas más repetidas', 'Consultas más repetidas en texto libre', 'Titulación'])
    const [claves, setClaves] = useState(['FP Grado Medio', 'FP Grado Superior', 'Grado', 'Máster', 'Otro'])

    const [tipoConsulta, setTipoConsulta] = useState()
    const [isOpenTematicas, setIsOpenTematicas] = useState(false)
    const [isOpenTipos, setIsOpenTipos] = useState(false)
    const [isOpenCreditos, setIsOpenCreditos] = useState(false)
    const [isOpenSemestres, setIsOpenSemestres] = useState(false)
    const [isOpenProfesores, setIsOpenProfesores] = useState(false)
    const [isOpenDirectores, setIsOpenDirectores] = useState(false)
    const [isOpenNombres, setIsOpenNombres] = useState(false)
    const [isOpenTitulos, setIsOpenTitulos] = useState(false)
    const [isOpenTitulacions, setIsOpenTitulacions] = useState(false)
    const [isOpenImparticions, setIsOpenImparticions] = useState(false)
    const [isOpenAfinidades, setIsOpenAfinidades] = useState(false)

    const toggleNombres = () => setIsOpenNombres(!isOpenNombres)
    const toggleTipos = () => setIsOpenTipos(!isOpenTipos)
    const toggleTematicas = () => setIsOpenTematicas(!isOpenTematicas)
    const toggleCreditos = () => setIsOpenCreditos(!isOpenCreditos)
    const toggleSemestres = () => setIsOpenSemestres(!isOpenSemestres)
    const toggleProfesores = () => setIsOpenProfesores(!isOpenProfesores)
    const toggleDirectores = () => setIsOpenDirectores(!isOpenDirectores)
    const toggleTitulos = () => setIsOpenTitulos(!isOpenTitulos)
    const toggleTitulacions = () => setIsOpenTitulacions(!isOpenTitulacions)
    const toggleImparticions = () => setIsOpenImparticions(!isOpenImparticions)
    const toggleAfinidades = () => setIsOpenAfinidades(!isOpenAfinidades)

    const [logged, setLogged] = useState(sessionStorage.getItem('isLogged'))
    const [searchText, setSearchText] = useState('')
    const [parametros, setParametros] = useState({
        semestre: null, creditos: null, tipo: null, titulo: null, titulacionCurso: null, nombre: null, imparticion: null,
        tematica: null, profesor: null, director: null
    })
    const [campoConsultaMasFrec, setCampoConsultaMasFrec] = useState()
    const [campoConsultaMasFrecTextoLibre, setCampoConsultaMasFrecTextoLibre] = useState()
    const [campoConsultaTitulacionAfin, setcampoConsultaTitulacionAfin] = useState([])
    const [campoConsulta, setCampoConsulta] = useState()
    const [yQuery, setYQuery] = useState(false)

    const normalizarTexto = (texto) =>  {
        return texto
        .normalize('NFD')
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
        .normalize()
    }

    // ******        Obtener los datos del ususario para mostar su perfil           *******//
    // ******        y los datos de los cursos para realizar las consultas          *******//

    useEffect(() => {
        getUsuarioById(sessionStorage.getItem('id'))
            .then(res => {setUsuario(res);
            setGrado(res.titulacionUsuarioGrado)})
    }, [sessionStorage.getItem('id')])

    useEffect(() => {
        getCursos()
            .then((cursos) => {
                setCursos(cursos)
            })
    }, [])


    useEffect(() => {
        getNombres()
            .then((allnombres) => {
                setNombres(allnombres)
            })
    }, [])

    useEffect(() => {
        getTipos()
            .then((alltipos) => {
                setTipos(alltipos)
            })
    }, [])

    useEffect(() => {
        getTematicas()
            .then((alltematicas) => {
                setTematicas(alltematicas)
            })
    }, [])

    useEffect(() => {
        getSemestres()
            .then((allsemestres) => {
                setSemestres(allsemestres)
            })
    }, [])

    useEffect(() => {
        getProfesores()
            .then((allprofesores) => {
                setProfesores(allprofesores)
            })
    }, [])

    useEffect(() => {
        getDirectores()
            .then((alldirectores) => {
                setDirectores(alldirectores)
            })
    }, [])

    useEffect(() => {
        getCreditos()
            .then((allcreditos) => {
                setCreditosD(allcreditos)
            })
    }, [])

    useEffect(() => {
        getTitulos()
            .then((alltitulos) => {
                setTitulos(alltitulos)
            })
    }, [])

    useEffect(() => {
        getTitulacionCursos()
            .then((alltitulacionCursos) => {
                setTitulacionCursos(alltitulacionCursos)
            })
    }, [])

    useEffect(() => {
        getImparticions()
            .then((allimparticions) => {
                setImparticions(allimparticions)
            })
    }, [])

    useEffect(() => {
        getVisualizacionMasFrecuente(sessionStorage.getItem('id'))
            .then((campo) => setCampoConsultaMasFrec(campo))
    }, [])

    useEffect(() => {
        getVisualizacionMasFrecuenteTextoLibre(sessionStorage.getItem('id'))
            .then((campo) => setCampoConsultaMasFrecTextoLibre(campo))
    }, [])

    useEffect(() => {
        filtroTitulacion()
    }, [usuario])

    // *********************   Consultas por atributos de los cursos   **********//
    // **********************                                          **********//

    const filtroTitulacion = () => {
           setcampoConsultaTitulacionAfin(filtrarTitulacion(grado, claves))
        }
       
    const consMasFrecuente = () => {
        getCursosFilter(campoConsultaMasFrec).then((selCursos) => {
            setCursos(selCursos)
        })
    }

    const consMasFrecuenteTextoLibre = () => {
        getCursosFilter(campoConsultaMasFrecTextoLibre).then((selCursos) => {
            setCursos(selCursos)
        })
    }

    const consAfinTitulo = () => {
        getCursosFilter(campoConsultaTitulacionAfin).then((selCursos) => {
            setCursos(selCursos)
        })
    }

    //**          Manejadores del cuadro de búsqueda por texto libre           */  

    //**          handleInputChange recoge el texto introducido                */

    const handleInputChange = (e) => {
        setSearchText(e.target.value)
    }
    //**          handleFind se encarga de comparar el texto libre introducido          */
    //**          con los valores de los atributos de los cursos para crear un filtro   */
    //**          de búsqueda                                                           */
    //**          Divide el texto en palabras y compara cada palabra con los valores de */
    //**          los atributos y creando unos parametros de búsqueda                   */

useEffect(() => {
    setParametros((prevParametros) => ({
        ...prevParametros,
        semestre: null, creditos: null, tipo: null, titulo: null, titulacionCurso: null,  nombre: null, imparticion: null,
        tematica: null, profesor: null, director: null
    }))

},[searchText])

   

    const handleFind = () => {
        setParametros((prevParametros) => ({
            ...prevParametros,
            semestre: null, creditos: null, tipo: null, titulo: [], titulacionCurso: null, nombre: null, imparticion: null,
            tematica: null, profesor: null, director: null
        }))
       
        const filtro = ['', 'de', 'a', 'y', 'por', 'para', 'en', 'del', 'e', 'o']
        const searchWords = searchText.trim().split(' ').filter(word =>
            !filtro.includes(word));
        if(searchWords.includes('&')) setYQuery(true); else setYQuery(false)
        searchWords.forEach(element => {
            semestres.forEach(word => {
                if (normalizarTexto(word).toLowerCase().includes(normalizarTexto(element.toLowerCase()))) {
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        semestre: word
                    }))
                }
            })
            const qCreditos = []
            creditosD.forEach((word) => {
                if (normalizarTexto(String(word)).toLowerCase().includes(normalizarTexto(String(element.toLowerCase())))) {
                    qCreditos.push(word)
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        creditos: qCreditos
                    }))
                }
            })
            const qNombres = []
            nombres.forEach(word => {
                if (normalizarTexto(word).toLowerCase().includes(normalizarTexto(String(element.toLowerCase())))) {
                    qNombres.push(word)
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        nombre: qNombres
                    }))
                }
            })

            const qTitulacionCursos = []
            titulacionCursos.forEach(word => {
                if (normalizarTexto(word).toLowerCase().includes(normalizarTexto(String(element.toLowerCase())))) {
                    qTitulacionCursos.push(word)
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        titulacionCurso: qTitulacionCursos
                    }))
                }
            })

            const qTipos = []
            tipos.forEach(word => {
                if (normalizarTexto(word).toLowerCase().includes(normalizarTexto(String(element.toLowerCase())))) {
                    qTipos.push(word)
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        tipo: qTipos
                    }))
                }
            })

            const qImparticion = []
            imparticions.forEach(word => {
                if (normalizarTexto(word).toLowerCase().includes(normalizarTexto(String(element.toLowerCase())))) {
                    qImparticion.push(word)
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        imparticion: qImparticion
                    }))
                }
            })

            const qTitulo = []
            titulos.forEach(word => {
                if (normalizarTexto(word).toLowerCase().includes(normalizarTexto(String(element.toLowerCase())))) {
                    qTitulo.push(word)
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        titulo: qTitulo
                    }))
                }
            })

            const qTematica = []
            tematicas.forEach(word => {
                if (normalizarTexto(word).toLowerCase().includes(normalizarTexto(String(element.toLowerCase())))) {
                    qTematica.push(word)
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        tematica: qTematica
                    }))
                }
            })

            const qProfesor = []
            profesores.forEach(word => {
                if (normalizarTexto(word).toLowerCase().includes(normalizarTexto(String(element.toLowerCase())))) {
                    qProfesor.push(word)
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        profesor: qProfesor
                    }))
                }
            })

            const qDirector = []
            directores.forEach(word => {
                if (normalizarTexto(word).toLowerCase().includes(normalizarTexto(String(element.toLowerCase())))) {
                    qDirector.push(word)
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        director: qDirector
                    }))
                }
            })
        }
        )
        getCursosFilter(parametros, 'texto libre', yQuery)
        .then(cursos => { setCursos(cursos)
            const visualizacion = {
                usuario: sessionStorage.getItem('id'),
                tipoConsulta: 'texto libre',
                campo: parametros,
                fecha: Date.now()
            }
            if(!(visualizacion.campo.creditos===null &&
                visualizacion.campo.tipo===null &&
                visualizacion.campo.semestre===null &&
                visualizacion.campo.imparticion===null &&
                visualizacion.campo.titulacionCurso===null &&
                visualizacion.campo.titulo===null &&
                visualizacion.campo.profesor===null &&
                visualizacion.campo.director===null &&
                visualizacion.campo.tematica===null &&
                visualizacion.campo.nombre===null 
                                    )) {
            addVisualizacion(visualizacion)
                .then((res) => {
                    if(res.message!=='Visualizacion añadida') alert ('Error al agregar consulta')
                })
            setCursos(cursos)
            }})                    
    }

    //**        Consulta con los parametros obtenidos del texto  */    

    useEffect(() => {
        
        getCursosFilter(parametros, 'texto libre', yQuery)
            .then(cursos => {
                const visualizacion = {
                    usuario: sessionStorage.getItem('id'),
                    tipoConsulta: 'texto libre',
                    campo: parametros,
                    fecha: Date.now()
                }
                if(!(visualizacion.campo.creditos===null &&
                    visualizacion.campo.tipo===null &&
                    visualizacion.campo.semestre===null &&
                    visualizacion.campo.imparticion===null &&
                    visualizacion.campo.titulacionCurso===null &&
                    visualizacion.campo.titulo===null &&
                    visualizacion.campo.profesor===null &&
                    visualizacion.campo.director===null &&
                    visualizacion.campo.tematica===null &&
                    visualizacion.campo.nombre===null 
                                        )) {
                addVisualizacion(visualizacion)
                    .then((res) => {
                        if(res.message!=='Visualizacion añadida') alert ('Error al agregar consulta')
                    })
                setCursos(cursos)
                                        }
            })
    }, [parametros])

    useEffect(() => {
        setTipoConsulta(tipoConsulta)
    }, [tipoConsulta])

    //**         Manejador de las consultas por atributos       */    

    const handleClickConsultas = () => {

        if (afinidad === afinidades[0]) {
            //setTipoConsulta('afinidad')
            consMasFrecuente()
            setAfinidad('')
        }
        else if (afinidad === afinidades[1]) {
            // setTipoConsulta('afinidad')
            consMasFrecuenteTextoLibre()
            setAfinidad('')
        }
        else if (afinidad === afinidades[2]) {
            // setTipoConsulta('afinidad')
            consAfinTitulo()
            setAfinidad('')
        }
        else {
            getCursosFilter(campoConsulta).then((selCursos) => {
                setCursos(selCursos)
            })
        }

        //**        Creacion de una visualización y grabado en la base de datos   */        
        const visualizacion = {
            usuario: sessionStorage.getItem('id'),
            tipoConsulta: tipoConsulta,
            campo: campoConsulta || campoConsultaMasFrec || campoConsultaTitulacionAfin || campoConsultaMasFrecTextoLibre,
            fecha: Date.now()
        }
        if(tipoConsulta)
        addVisualizacion(visualizacion)
            .then((res) => {
               if(res.message!=='Visualizacion añadida') alert ('Error al agregar consulta')
            })

    }

    //**        Si el usuario no está logado se redirige una página de error         */
    //**        Si está logado se muestra la página de inicio de socio               */
    //**        Bajo la cabecera tenemos el cuadro de búsqueda en texto libre        */
    //**        Junto al cuadro de búsqueda, un icono que representa el perfil del   */
    //**        usuario y bajo éste, el nombre y apellido. Clickando en el icono se  */
    //**        despliega un menú de opciones.                                       */
    //**        Debajo se muestra una batería de filtros para seleccionar el valor   */
    //**        del atributo por el que quiere filtrar la consulta                   */

    if (!logged) return (<Error error={"Usuario no logado"} />)
    else
        return (
            <Container>
                <Container id="buscador-texto">
                    <Row>
                        <Col md="10">
                            <InputGroup className="input-group mb-9">
                                <Input type="search" className="input-group" placeholder="Introduzca el texto a buscar"
                                    onChange={handleInputChange} value={searchText} />
                                <Button onClick={() => handleFind()} className="btn btn-search input-group-append-icon" type="button" id="button-addon-2"><FaSearch /></Button>
                            </InputGroup>
                        </Col>
                        <Col md="2">
                            <Perfil usuario={sessionStorage.getItem('id')} />
                        </Col>
                    </Row>
                </Container>
                <Navbar>
                    <Dropdown isOpen={isOpenNombres} toggle={toggleNombres}>
                        <DropdownToggle caret>Nombre</DropdownToggle>
                        <DropdownMenu >
                            {nombres.map((nombres) => {
                                return (
                                    <DropdownItem onClick={(e) => {
                                        setCampoConsulta({ nombre: nombres })
                                        setTipoConsulta('nombre')
                                    }}>
                                        {nombres}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={isOpenTipos} toggle={toggleTipos}>
                        <DropdownToggle caret>Tipo</DropdownToggle>
                        <DropdownMenu>
                            {tipos.map((tipos) => {
                                return (
                                    <DropdownItem onClick={(e) => {
                                        setCampoConsulta({ tipo: tipos })
                                        setTipoConsulta('tipo')
                                    }
                                    }>
                                        {tipos}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={isOpenCreditos} toggle={toggleCreditos}>
                        <DropdownToggle caret>Creditos</DropdownToggle>
                        <DropdownMenu>
                            {creditosD.map((creditosD) => {
                                return (
                                    <DropdownItem onClick={(e) => {
                                        setCampoConsulta({ creditos: creditosD })
                                        setTipoConsulta('creditos')
                                    }}>
                                        {creditosD}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={isOpenSemestres} toggle={toggleSemestres}>
                        <DropdownToggle caret>Semestre</DropdownToggle>
                        <DropdownMenu>
                            {semestres.map((semestres) => {
                                return (
                                    <DropdownItem onClick={(e) => {
                                        setCampoConsulta({ semestre: semestres })
                                        setTipoConsulta('semestre')
                                    }}>
                                        {semestres}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={isOpenImparticions} toggle={toggleImparticions}>
                        <DropdownToggle caret>Impartición</DropdownToggle>
                        <DropdownMenu>
                            {imparticions.map((imparticions) => {
                                return (
                                    <DropdownItem onClick={(e) => {
                                        setCampoConsulta({ imparticion: imparticions })
                                        setTipoConsulta('imparticion')
                                    }}>
                                        {imparticions}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </Navbar>
                <Navbar>
                <Dropdown isOpen={isOpenTitulacions} toggle={toggleTitulacions}>
                        <DropdownToggle caret>Titulación</DropdownToggle>
                        <DropdownMenu>
                            {titulacionCursos.map((titulacionCursos) => {
                                return (
                                    <DropdownItem onClick={() => {
                                        setCampoConsulta({ titulacionCurso: titulacionCursos })
                                        setTipoConsulta('titulacionCurso')
                                    }}>
                                        {titulacionCursos}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={isOpenTitulos} toggle={toggleTitulos}>
                        <DropdownToggle caret>Titulo</DropdownToggle>
                        <DropdownMenu>
                            {titulos.map((titulos) => {
                                return (
                                    <DropdownItem onClick={() => {
                                        setCampoConsulta({ titulo: titulos })
                                        setTipoConsulta('titulo')
                                    }}>
                                        {titulos}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={isOpenTematicas} toggle={toggleTematicas}>
                        <DropdownToggle caret>Temática</DropdownToggle>
                        <DropdownMenu>
                            {tematicas.map((tematicas) => {
                                return (
                                    <DropdownItem onClick={(e) => {
                                        setCampoConsulta({ tematica: tematicas })
                                        setTipoConsulta('tematica')
                                    }}>
                                        {tematicas}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={isOpenProfesores} toggle={toggleProfesores}>
                        <DropdownToggle caret>Profesor</DropdownToggle>
                        <DropdownMenu>
                            {profesores.map((profesores) => {
                                return (
                                    <DropdownItem onClick={(e) => {
                                        setCampoConsulta({ profesor: profesores })
                                        setTipoConsulta('profesor')
                                    }}>
                                        {profesores}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={isOpenDirectores} toggle={toggleDirectores}>
                        <DropdownToggle caret>Director</DropdownToggle>
                        <DropdownMenu>
                            {directores.map((directores) => {
                                return (
                                    <DropdownItem onClick={(e) => {
                                        setCampoConsulta({ director: directores })
                                        setTipoConsulta('director')
                                    }}>
                                        {directores}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={isOpenAfinidades} toggle={toggleAfinidades}>
                        <DropdownToggle caret>Afinidad</DropdownToggle>
                        <DropdownMenu>
                            {afinidades.map((afinidades) => {
                                return (
                                    <DropdownItem onClick={(e) => {
                                        setAfinidad(afinidades)
                                        setTipoConsulta('afinidad')
                                    }
                                    }>
                                        {afinidades}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </Navbar>
                <Container >
                    <Row>
                        <Button onClick={() => handleClickConsultas()}>Enviar consulta</Button>
                    </Row>
                </Container>
                <CardTitle id="ttl">
                    < Col sm="8">
                        <span>Cursos encontrados </span><Badge pill>{cursos.length}</Badge></Col>
                    <Col sm="2">
                        <FormGroup className="form-check justify-content-around" switch>
                            <Label check>
                                <Row><Col><FaThLarge style={listado ? { color: "grey" } : { color: "black" }} /></Col><Col><FaThList style={!listado ? { color: "grey" } : { color: "black" }} /></Col></Row>
                            </Label>
                            <Input type="switch" checked={listado} onClick={() => setListado(!listado)}>
                            </Input>
                        </FormGroup>
                    </Col>
                </CardTitle>

                {listado && <ListadoTabla cursos={cursos} opt={"ver"} />}

                {!listado && <ListadoCards cursos={cursos} />}
            </Container>
        )
}

