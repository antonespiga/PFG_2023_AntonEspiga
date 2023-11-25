import React, { useState, useEffect } from "react";
import {
    Col, Button, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
    Offcanvas, OffcanvasBody, OffcanvasHeader, Card, Label, Input
} from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaUserCog } from 'react-icons/fa'
import './Perfil.css'
import { getUsuarioById } from "../utils/apicallsUsuarios";
import { getVisualizacionesUsuario } from "../utils/apicallsVisualizaciones";
import FormModUsuario from './FormModUsuario'

export default function Perfil({ usuario }) {

    const [mostrar, setMostrar] = useState(false)
    const [userId, setUserId] = useState(usuario)
    const [selUsuario, setSelUsuario] = useState({})
    const [readOnly, setReadOnly] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [rol, setRol] = useState(sessionStorage.getItem('rol'))
    const [visualizaciones, setVisualizaciones] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        getUsuario(userId)
    }, [])

    const getUsuario = (userId) => {
        getUsuarioById(userId)
            .then((res) => setSelUsuario(res))
    }

    useEffect(() => {
        getVisualizaciones(userId)
    },[])

    const getVisualizaciones= (userId) => {
        getVisualizacionesUsuario(userId)
        .then((res) => setVisualizaciones(res))
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const toggle = () => {
        setMostrar(!mostrar)
    }

    const logout = () => {
        sessionStorage.clear()
        toggle()
        navigate('/')
    }

    const handleModificarDatos = () => {
        openModal()
    }

    const dropdownToggle = () => {
        setDropdownOpen(!dropdownOpen)
    }

    return (
        <Container className="perfil">
            <Container>
                <Col className="perfil-col" >
                    
                    <Button id="btn-perfil" onClick={() => toggle()}>
                        {(rol === "Socio") || (rol === "socio") ? <FaUser /> : <FaUserCog />}
                    </Button>
                    <h6 id="nombre-perfil">{selUsuario.nombre}{' '}{selUsuario.apellido1}</h6>
                </Col>
                
            </Container>

            {mostrar ?
                <Offcanvas direction="end" isOpen={mostrar} toggle={toggle}>
                    <OffcanvasHeader toggle={toggle}>
                        Perfil
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <Card>
                            <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle} >
                                <DropdownToggle caret >Mis datos</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <Label id="form-label" for="nombre">Nombre</Label>
                                        <Input name="nombre" type="text" placeHolder="nombre" readOnly={readOnly} value={selUsuario.nombre}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="apellido1">Apellido1</Label>
                                        <Input name="apellido1" type="text" placeHolder="apellido1" readOnly={readOnly} value={selUsuario.apellido1}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="apellido2">Apellido2</Label>
                                        <Input type="text" placeHolder="apellido2" readOnly={readOnly} value={selUsuario.apellido2} ></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="email">E-mail</Label>
                                        <Input type="email" placeHolder="email" readOnly={readOnly} value={selUsuario.email}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="poblacion">Población</Label>
                                        <Input type="text" placeHolder="poblacion" readOnly={readOnly} value={selUsuario.poblacion}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="codigoPostal">Código postal</Label>
                                        <Input type="text" placeHolder="codigo postal" readOnly={readOnly} value={selUsuario.codigoPostal}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="titulacion-grado">Titulación: Grado</Label>
                                        <Input type="text" placeHolder="titulación-grado" readOnly={readOnly} value={selUsuario.titulacionUsuarioGrado}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="titulacion-especialidad">Titulación: Especialidad</Label>
                                        <Input type="text" placeHolder="titulación-especialidad" readOnly={readOnly} value={selUsuario.titulacionUsuarioEspecialidad}></Input>
                                    </DropdownItem>
                                    {(rol!=='admin') && <>
                                    <DropdownItem>
                                        <Label id="form-label" for="contador">Total consultas</Label>
                                        <Input type="text" placeHolder="contador" readOnly={readOnly} value={visualizaciones.length}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="contNombre">Por nombre</Label>
                                        <Input type="text" placeHolder="contador nombre" readOnly={readOnly} value={
                                                    visualizaciones.filter(view => {
                                                        return view.tipoConsulta === 'nombre'
                                                        }).length}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="contTipo">Por tipo</Label>
                                        <Input type="text" placeHolder="contTipo" readOnly={readOnly} value={
                                                    visualizaciones.filter(view => {
                                                        return view.tipoConsulta === 'tipo'
                                                        }).length}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="contCreditos">Por créditos</Label>
                                        <Input type="text" placeHolder="contCreditos" readOnly={readOnly} value={
                                                visualizaciones.filter(view => {
                                                    return view.tipoConsulta === 'creditos'
                                                    }).length}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="contSemestre">Por semestre</Label>
                                        <Input type="text" placeHolder="contSemestre" readOnly={readOnly} value={
                                               visualizaciones.filter(view => {
                                                return view.tipoConsulta === 'semestre'
                                                }).length}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="contImparticion">Por impartición</Label>
                                        <Input type="text" placeHolder="contImparticion" readOnly={readOnly} value={
                                               visualizaciones.filter(view => {
                                                return view.tipoConsulta === 'imparticion'
                                                }).length}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="contTitulo">Por título</Label>
                                        <Input type="text" placeHolder="contTitulo" readOnly={readOnly} value={
                                                visualizaciones.filter(view => {
                                                    return view.tipoConsulta === 'titulo'
                                                    }).length}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="contTematica">Por temática</Label>
                                        <Input type="text" placeHolder="contTematica" readOnly={readOnly} value={
                                               visualizaciones.filter(view => {
                                                return view.tipoConsulta === 'tematica'
                                                }).length}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="contDirector">Por director</Label>
                                        <Input type="text" placeHolder="contDirector" readOnly={readOnly} value={
                                                visualizaciones.filter(view => {
                                                    return view.tipoConsulta === 'director'
                                                    }).length}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="contProfesor">Por profesor</Label>
                                        <Input type="text" placeHolder="contProfesor" readOnly={readOnly} value={
                                               visualizaciones.filter(view => {
                                                return view.tipoConsulta === 'profesor'
                                                }).length}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="contAfinidad">Por afinidad</Label>
                                        <Input type="text" placeHolder="contAfinidad" readOnly={readOnly} value={
                                               visualizaciones.filter(view => {
                                                return view.tipoConsulta === 'afinidad'
                                                }).length}></Input>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Label id="form-label" for="contLibre">Por texto libre</Label>
                                        <Input type="text" placeHolder="ContLibre" readOnly={readOnly} value={
                                                visualizaciones.filter(view => {
                                                    return view.tipoConsulta === 'texto libre'
                                                    }).length}></Input>
                                    </DropdownItem>
                            </>}
                                </DropdownMenu>
                            </Dropdown>
                            <Button id="btnperfil" onClick={() => handleModificarDatos()} >Modificar datos de perfil</Button>
                            <Button id="btnperfil" onClick={() => logout()} >Logout</Button>
                        </Card>

                        {isOpen &&
                            <FormModUsuario
                                isOpen={isOpen}
                                closeModal={closeModal}
                                usuario={selUsuario}
                                setUsuario={setSelUsuario}
                                readOnly={!readOnly}
                            />}
                    </OffcanvasBody>
                </Offcanvas> : ''}
        </Container>
    )
}