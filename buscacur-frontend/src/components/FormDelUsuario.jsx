import React, { useState, useEffect } from "react"
import {
    Row, Col, Card, CardTitle, CardBody, CardText, CardFooter, Button,
    Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input
} from 'reactstrap'
import { delUsuario } from "../utils/apicallsUsuarios"


export default function FormDelUsuario({
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


    const handleDelUsuario = (usuario) => {
        alert("Eliminar usuario, ¿Está seguro?")
        delUsuario(usuario)
            .then(() => {
            closeModal()
            })
    }

    return (

        <Modal fullscreen isOpen={isOpen} toggle={closeModal} >
            <ModalHeader isOpen={isOpen} toggle={closeModal} >
                <h4 >{"Eliminar usuario"}</h4>
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="nombre" >Nombre</Label>
                            <Input id="nombre" name="nombre" type="text" readOnly={readOnly} placeholder="Nombre"
                                value={readOnly ? usuario.nombre : nombre} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>

                    <Col md="6">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="apellido2" value="apellido2">Apellido1</Label>
                            <Input type="text" name="apellido1" readOnly={readOnly} id="apellido1" placeholder="Apellido1"
                                value={readOnly ? usuario.apellido1 : apellido1} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="apellido2" >Apellido2</Label>
                            <Input id="apellido2" name="apellido2" type="text" readOnly={readOnly} placeholder="Apellido2"
                                value={readOnly ? usuario.apellido2 : apellido2} onChange={handleInputChange} ></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="poblacion">Poblacion</Label>
                            <Input type="text" name="poblacion" readOnly={readOnly} placeholder="Poblacion"
                                value={readOnly ? usuario.poblacion : poblacion} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="codPostal" id="codPostal" value="codPostal">CodPostal</Label>
                            <Input type="text" name="codPostal" readOnly={readOnly} id="codPostal" placeholder="CodPostal"
                                value={readOnly ? usuario.codPostal : codPostal} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="email" >Email</Label>
                            <Input id="email" name="email" type="text" readOnly={readOnly} placeholder="Email"
                                value={readOnly ? usuario.email : email} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                  
                </Row>
            </ModalBody>
            <ModalFooter>
                {<Button onClick={() => handleDelUsuario(usuario)}>{'Eliminar'}</Button>}
            </ModalFooter>
        </Modal>
    )
}