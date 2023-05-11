import React, { useState, useEffect } from "react";
import { Col, Row, Button, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
     UncontrolledDropdown, Offcanvas, OffcanvasBody, OffcanvasHeader,
    FormGroup, Label, Input } from 'reactstrap'
import { FaUser, FaUserCog } from 'react-icons/fa'
import './Buscador.css'
import { getUsuarioById } from "../utils/apicallsUsuarios";

export default function Perfil() {
    const [hidden, setHidden] = useState(true)
    const [mostrar, setMostrar] = useState(false)
    const [selUsuario, setSelUsuario] = useState()

    
    const toggle = () => {
        setMostrar(!mostrar)
    }

    useEffect(() => {
        const userId = sessionStorage.getItem('id')
        
        setSelUsuario(getUsuarioById(userId))
    },[])
    

    return (
        <Container className="perfil">
            <Col  className="perfil-col" >
                <Button id="btn-perfil" onClick={() => toggle()}>
                {selUsuario=="socio"?<FaUser/>:<FaUserCog/>}
                </Button>
            </Col>
             {mostrar?<Offcanvas direction="end" isOpen={mostrar} toggle={toggle}>
    <OffcanvasHeader toggle={toggle}>
     Perfil
    </OffcanvasHeader>
                <OffcanvasBody>
                    <FormGroup>
                        <Input type="text" placeHolder="nombre" value={selUsuario.nombre}></Input>
                        <Input type="text" placeHolder="apellido1"></Input>
                        <Input type="text" placeHolder="apellido2"></Input>
                        <Input type="email" placeHolder="email"></Input>
                        <Input type="text" placeHolder="poblacion"></Input>
                        <Input type="text" placeHolder="codigo postal"></Input>
                    </FormGroup>
                </OffcanvasBody>
  </Offcanvas>:''}
        </Container>

    )
}