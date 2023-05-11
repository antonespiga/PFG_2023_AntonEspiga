import React, { useState, useEffect } from 'react'

import {
    Row, Col, Button, Container, Form, FormGroup, Label, Input, Card, CardBody, CardText,
    CardFooter, Dropdown, DropdownToggle, DropdownItem, DropdownMenu,
    Alert, Badge, Table, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Navbar
} from 'reactstrap'
import { FaTh, FaThLarge, FaThList } from 'react-icons/fa'
import { getCursos } from '../utils/apicallsCursos'
import { useParams, useNavigate } from 'react-router-dom'
import {
    getCursosByTematica, getCursosByTitulo, getCursosByDirector, getCursosByProfesor,
    getCursosBySemestre, getCursosByCreditos, getCursosByTipo, getCursosByNombre
} from '../utils/apicallsConsultas'
import '../components/BarraSelectores.css'
import Buscador from '../components/Buscador'
import ListadoTabla from '../components/ListadoTabla'
import ListadoCards from '../components/ListadoCards'
import { getNombres, getTipos, getTitulos, getSemestres, getDirectores, getProfesores, getTematicas, getCreditos} from '../utils/apicallsData'
import FormDetalleCurso from '../components/FormDetalleCurso'
import Perfil from '../components/Perfil'

export default function Consultas() {

    const [listado, setListado] = useState(false)
    const [onShowT, setOnShowT] = useState(false)
    const [onShowD, setOnShowD] = useState(false)
    const [onShowI, setOnShowI] = useState(false)
    const [nombre, setNombre] = useState()
    const [tematica, setTematica] = useState()
    const [tipo, setTipo] = useState()
    const [titulo, setTitulo] = useState()
    const [director, setDirector] = useState()
    const [profesor, setProfesor] = useState()
    const [semestre, setSemestre] = useState()
    const [creditos, setCreditos] = useState()

    const [cursos, setCursos] = useState([])
    const [nombres, setNombres] = useState([])
    const [tipos, setTipos] = useState([])
    const [creditosD, setCreditosD] = useState([])
    const [profesores, setProfesores] = useState([])
    const [directores, setDirectores] = useState([])
    const [tematicas, setTematicas] = useState([])
    const [semestres, setSemestres] = useState([])
    const [titulos, setTitulos] = useState([])
    const navigate = useNavigate()
    const [isOpenTematicas, setIsOpenTematicas] = useState(false)
    const [isOpenTipos, setIsOpenTipos] = useState(false)
    const [isOpenCreditos, setIsOpenCreditos] = useState(false)
    const [isOpenSemestres, setIsOpenSemestres] = useState(false)
    const [isOpenProfesores, setIsOpenProfesores] = useState(false)
    const [isOpenDirectores, setIsOpenDirectores] = useState(false)
    const [isOpenNombres, setIsOpenNombres] = useState(false)
    const [isOpenTitulos, setIsOpenTitulos] = useState(false)
    const toggleNombres = () => setIsOpenNombres(!isOpenNombres)
    const toggleTipos = () => setIsOpenTipos(!isOpenTipos)
    const toggleTematicas = () => setIsOpenTematicas(!isOpenTematicas)
    const toggleCreditos = () => setIsOpenCreditos(!isOpenCreditos)
    const toggleSemestres = () => setIsOpenSemestres(!isOpenSemestres)
    const toggleProfesores = () => setIsOpenProfesores(!isOpenProfesores)
    const toggleDirectores = () => setIsOpenDirectores(!isOpenDirectores)
    const toggleTitulos = () => setIsOpenTitulos(!isOpenTitulos)


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

    const consNombre = () => {
        getCursosByNombre(nombre).then((selCursos) => {
            setCursos(selCursos)
        })
    }

    useEffect(() => {
        consNombre()
    }, [])

    const consTematica = () => {
        getCursosByTematica(tematica).then((selCursos) => {
            setCursos(selCursos)
        })
    }

    useEffect(() => {
        consTematica()
    }, [])

    const consTipo = () => {
        getCursosByTipo(tipo).then((selCursos) => {
            setCursos(selCursos)
        })
    }

    useEffect(() => {
        consTipo()
    }, [])

    const consTitulo = () => {
        getCursosByTitulo(titulo).then((selCursos) => {
            setCursos(selCursos)
        })
    }

    useEffect(() => {
        consTitulo()
    }, [])

    const consDirector = () => {
        getCursosByDirector(director).then((selCursos) => {
            setCursos(selCursos)
        })
    }

    useEffect(() => {
        consDirector()
    }, [])

    const consProfesor = () => {
        getCursosByProfesor(profesor).then((selCursos) => {
            setCursos(selCursos)
        })
    }

    useEffect(() => {
        consProfesor()
    }, [])

    const consCreditos = () => {
        getCursosByCreditos(creditos).then((selCursos) => {
            setCursos(selCursos)
        })
    }

    useEffect(() => {
        consCreditos()
    }, [])

    const consSemestre = () => {
        getCursosBySemestre(semestre).then((selCursos) => {
            setCursos(selCursos)
        })
    }

    useEffect(() => {
        consSemestre()
    }, [])


    const handleClickConsultas = () => {

        if (semestre) {
            consSemestre();
            setSemestre('')
        }
        else if (nombre) {
            consNombre();
            setNombre('')
        }
        else if (tematica) {
            consTematica();
            setTematica('')
        }
        else if (creditos) {
            consCreditos();
            setCreditos('')
        }
        else if (profesor) {
            consProfesor();
            setProfesor('')
        }
        else if (director) {
            consDirector();
            setDirector('')
        }
        else if (tipo) {
            consTipo();
            setTipo('')
        }
        else if (titulo) {
            consTitulo();
            setTitulo('')
        }

    }


    return (
        <Container>
            <Container>
                <Row>
                    <Col md="10">
                        <Buscador />
                    </Col>
                    <Col md="2">
                        <Perfil usuario="socio"/>
                    </Col>
                </Row>
            </Container>
         
            <Navbar>
                <Dropdown isOpen={isOpenNombres} toggle={toggleNombres}>
                    <DropdownToggle caret>Nombre</DropdownToggle>
                    <DropdownMenu >
                        {nombres.map((nombres) => {
                            return (
                                <DropdownItem onClick={(e) => setNombre(nombres)}>
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
                                <DropdownItem onClick={(e) => setTipo(tipos)
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
                                <DropdownItem onClick={(e) => setCreditos(creditosD)}>
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
                                <DropdownItem onClick={(e) => setSemestre(semestres)}>
                                    {semestres}
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
                                <DropdownItem onClick={() => setTitulo(titulos)}>
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
                                <DropdownItem onClick={(e) => setTematica(tematicas)}>
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
                                <DropdownItem onClick={(e) => setProfesor(profesores)}>
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
                                <DropdownItem onClick={(e) => setDirector(directores)}>
                                    {directores}
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
                       <Row><Col><FaThLarge style={listado?{color:"grey"}:{color:"black"}} /></Col><Col><FaThList style={!listado?{color:"grey"}:{color:"black"}}/></Col></Row> 
                           
                        </Label>
                        <Input type="switch" checked={listado} onClick={() => setListado(!listado)}>
                        </Input>
                        
                    </FormGroup>
                </Col>
            </CardTitle>

            {listado && <ListadoTabla cursos={cursos} />}

            {!listado && <ListadoCards cursos={cursos} />}

        </Container>
    )
}

