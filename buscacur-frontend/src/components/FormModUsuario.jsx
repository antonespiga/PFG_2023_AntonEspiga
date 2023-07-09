import React, { useState } from "react"
import {
    Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Alert
} from 'reactstrap'
import { modUsuario } from "../utils/apicallsUsuarios"

export default function FormModUsuario({
    isOpen, closeModal, usuario, setUsuario, readOnly }) {

    const [msg, setMsg] = useState('')
    const [isOpenErrorModal, setIsOpenErrorModal] = useState(false)

    const handleInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    const openErrorModal = (mnsj) => {
        setMsg(mnsj)
        setIsOpenErrorModal(true)
    }

    const toggleModError = () => {
        setIsOpenErrorModal(!isOpenErrorModal)
    }

    const handleModUsuario = (usuario) => {
        alert("Modificando datos de usuario")
        modUsuario(usuario)
            .then((res) => {
                if (res === "Usuario modificado") {
                    closeModal()
                }
                else {
                    openErrorModal(res.message)
                }
            }
            )
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
                            <Label style={{ color: "black" }} for="email" >Rol</Label>
                            <Input id="rol" name="rol" type="rol" readOnly={readOnly} placeholder="Rol"
                                value={usuario.rol} onChange={handleInputChange}></Input>
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
            {isOpenErrorModal &&
                <Modal isOpen={isOpenErrorModal}>
                    <ModalHeader isOpen={isOpenErrorModal} toggle={toggleModError} />
                    <ModalBody>
                        <h4>{msg}</h4>
                    </ModalBody>
                </Modal>}
        </Modal>
    )
}