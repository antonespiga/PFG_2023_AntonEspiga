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
import {
    getNombres, getTipos, getTitulos, getSemestres, getDirectores,
    getProfesores, getTematicas, getCreditos, getImparticions
} from '../utils/apicallsData'
import { addVisualizacion, getVisualizacionMasFrecuente, modUsuarioCont } from '../utils/apicallsVisualizaciones'
import Perfil from '../components/Perfil'
import Error from "./Error"
import { getUsuarioById } from '../utils/apicallsUsuarios'
import './Socio.css'

export default function Consultas() {

    const [listado, setListado] = useState(false)
    const [afinidad, setAfinidad] = useState()
    const [user, setUser] = useState({})
    const [cursos, setCursos] = useState([])
    const [nombres, setNombres] = useState([])
    const [tipos, setTipos] = useState([])
    const [creditosD, setCreditosD] = useState([])
    const [profesores, setProfesores] = useState([])
    const [directores, setDirectores] = useState([])
    const [tematicas, setTematicas] = useState([])
    const [semestres, setSemestres] = useState([])
    const [titulos, setTitulos] = useState([])
    const [imparticions, setImparticions] = useState([])
    const [afinidades, setAfinidades] = useState(['Consultas más repetidas', 'Titulación'])

    const [tipoConsulta, setTipoConsulta] = useState()
    const [isOpenTematicas, setIsOpenTematicas] = useState(false)
    const [isOpenTipos, setIsOpenTipos] = useState(false)
    const [isOpenCreditos, setIsOpenCreditos] = useState(false)
    const [isOpenSemestres, setIsOpenSemestres] = useState(false)
    const [isOpenProfesores, setIsOpenProfesores] = useState(false)
    const [isOpenDirectores, setIsOpenDirectores] = useState(false)
    const [isOpenNombres, setIsOpenNombres] = useState(false)
    const [isOpenTitulos, setIsOpenTitulos] = useState(false)
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
    const toggleImparticions = () => setIsOpenImparticions(!isOpenImparticions)
    const toggleAfinidades = () => setIsOpenAfinidades(!isOpenAfinidades)

    const [logged, setLogged] = useState(sessionStorage.getItem('isLogged'))
    const [searchText, setSearchText] = useState('')
    const [parametros, setParametros] = useState({
        semestre: null, creditos: null, tipo: null, titulo: null, nombre: null, imparticion: null,
        tematica: null, profesor: null, director: null
    })
    const [campoConsultaMasFrec, setCampoConsultaMasFrec] = useState()
    const [campoConsultaTitulacionAfin, setcampoConsultaTitulacionAfin] = useState()
    const [campoConsulta, setCampoConsulta] = useState()

    // ******        Obtener los datos del ususario para mostar su perfil           *******//
    // ******        y los datos de los cursos para realizar las consultas          *******//

    useEffect(() => {
        getUsuarioById(sessionStorage.getItem('id'))
            .then(res => setUser(res))
    }, [])

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
        filtroTitulacion()
    }, [])

    // *********************   Consultas por atributos de los cursos   **********//
    // **********************                                          **********//

    const filtroTitulacion = () => {
        const claves = ['Licenciatura', 'Ingenieria', 'Máster', 'Medicina']
        if (claves.includes(user.titulacion)) {
            setcampoConsultaTitulacionAfin({ tipo: 'Reglado' })
        }
        else {
            setcampoConsultaTitulacionAfin({ tipo: 'Abierto' })
        }
    }

    const consMasFrecuente = () => {
        getCursosFilter(campoConsultaMasFrec).then((selCursos) => {
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

    const handleFind = () => {
        setParametros((prevParametros) => ({
            ...prevParametros,
            semestre: null, creditos: null, tipo: null, titulo: null, nombre: null, imparticion: null,
            tematica: null, profesor: null, director: null
        }))

        const filtro = ['', 'de', 'a', 'y', 'por', 'para', 'en']
        const searchWords = searchText.trim().split(' ').filter(word =>
            !filtro.includes(word));

        searchWords.forEach(element => {
            semestres.forEach(word => {
                if (word.toLowerCase().startsWith((element.toLowerCase()))) {
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        semestre: word
                    }))
                }
            })

            creditosD.forEach((word) => {
                if (String(word).toLowerCase().startsWith(String(element.toLowerCase()))) {
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        creditos: word
                    }))
                }
            })

            nombres.forEach(word => {
                if (word.toLowerCase().includes(String(element.toLowerCase()))) {
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        nombre: word
                    }))
                }
            })

            tipos.forEach(word => {
                if (word.toLowerCase().includes(String(element.toLowerCase()))) {
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        tipo: word
                    }))
                }
            })

            imparticions.forEach(word => {
                if (word.toLowerCase().includes(String(element.toLowerCase()))) {
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        imparticion: word
                    }))
                }
            })

            titulos.forEach(word => {
                if (word.toLowerCase().includes(String(element.toLowerCase()))) {
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        titulo: word
                    }))
                }
            })

            tematicas.forEach(word => {
                if (word.toLowerCase().includes(String(element.toLowerCase()))) {
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        tematica: word
                    }))
                }
            })

            directores.forEach(word => {
                if (word.toLowerCase().includes(String(element.toLowerCase()))) {
                    setParametros((prevParametros) => ({
                        ...prevParametros,
                        director: word
                    }))
                }
            })
        }
        )
    }

    //**        Consulta con los parametros obtenidos del texto  */    

    useEffect(() => {
        getCursosFilter(parametros)
            .then(cursos => {
                setCursos(cursos)
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
            campo: campoConsulta || campoConsultaMasFrec || campoConsultaTitulacionAfin,
            fecha: Date.now()
        }
        addVisualizacion(visualizacion)
            .then(() => {
                modUsuarioCont({ user, tipoConsulta })
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
                <Container>
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

