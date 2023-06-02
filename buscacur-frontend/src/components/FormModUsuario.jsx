import React, { useState, useEffect } from "react"
import {
    Row, Col, Card, CardTitle, CardBody, CardText, CardFooter, Button,
    Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Alert
} from 'reactstrap'
import { modUsuario } from "../utils/apicallsUsuarios"


export default function FormModUsuario({
    isOpen, closeModal, usuario, setUsuario, readOnly, opt, handleCurso }) {



        const [nombre, setNombre] = useState()
        const [apellido1, setApellido1] = useState()
        const [apellido2, setApellido2] = useState()
        const [poblacion, setPoblacion] = useState()
        const [codPostal, setCodPostal] = useState()
        const [email, setEmail] = useState()



    const handleInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }


    const handleModUsuario = (usuario) => {
        alert("Modificando datos de usuario")
        modUsuario(usuario)
            .then(closeModal())
    }

    return (

        <Modal fullscreen isOpen={isOpen} toggle={closeModal} >
            <ModalHeader isOpen={isOpen} toggle={closeModal} >
                <h4 >{"Modificar usuario"}</h4>
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="nombre" >Nombre</Label>
                            <Input id="nombre" name="nombre" type="text" readOnly={readOnly} placeholder="Nombre"
                                value={usuario.nombre} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>

                    <Col md="6">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="apellido2" value="apellido2">Apellido1</Label>
                            <Input type="text" name="apellido1" readOnly={readOnly} id="apellido1" placeholder="Apellido1"
                                value={usuario.apellido1} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="apellido2" >Apellido2</Label>
                            <Input id="apellido2" name="apellido2" type="text" readOnly={readOnly} placeholder="Apellido2"
                                value={usuario.apellido2} onChange={handleInputChange} ></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="poblacion">Poblacion</Label>
                            <Input type="text" name="poblacion" readOnly={readOnly} placeholder="Poblacion"
                                value={usuario.poblacion} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="codPostal" id="codPostal" value="codPostal">CodPostal</Label>
                            <Input type="text" name="codigoPostal" readOnly={readOnly} id="codPostal" placeholder="CodPostal"
                                value={usuario.codigoPostal} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="email" >Email</Label>
                            <Input id="email" name="email" type="email" readOnly={readOnly} placeholder="Email"
                                value={usuario.email} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulacion" >Titulación</Label>
                            <Input id="titulacion" name="titulacion" type="text" readOnly={readOnly} placeholder="Titulación"
                                value={usuario.titulacion} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                  
                </Row>
            </ModalBody>
            <ModalFooter>
                {<Button onClick={() => handleModUsuario(usuario)}>{'Modificar'}</Button>}
            </ModalFooter>
        </Modal>
    )
}