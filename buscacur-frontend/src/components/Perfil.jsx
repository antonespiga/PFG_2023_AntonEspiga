import React, { useState, useEffect } from "react";
import {
    Col, Button, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
     Offcanvas, OffcanvasBody, OffcanvasHeader, Card, Label, Input
} from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaUserCog } from 'react-icons/fa'
import './Perfil.css'
import { getUsuarioById } from "../utils/apicallsUsuarios";
import FormModUsuario from './FormModUsuario'

export default function Perfil({ usuario }) {

    const [hidden, setHidden] = useState(true)
    const [mostrar, setMostrar] = useState(false)
    const [userId, setUserId] = useState(usuario)
    const [selUsuario, setSelUsuario] = useState({})
    const [readOnly, setReadOnly] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [rol, setRol] = useState(sessionStorage.getItem('rol'))
    const navigate = useNavigate()

    useEffect(() => {
        getUsuario(userId)
    }, [])

    const getUsuario = (userId) => {
        getUsuarioById(userId)
            .then((res) => setSelUsuario(res))
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
                </Col>
                <h6 id="nombre-perfil">{selUsuario.nombre}{' '}{selUsuario.apellido1}</h6>

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
                                        <Label id="form-label" for="titulacion">Titulación</Label>
                                        <Input type="text" placeHolder="titulación" readOnly={readOnly} value={selUsuario.titulacion}></Input>
                                    </DropdownItem> 
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