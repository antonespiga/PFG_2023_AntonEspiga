import React, { useState } from "react"
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input }
    from 'reactstrap'
import { addUsuario } from "../utils/apicallsUsuarios"

export default function FormAddUsuario({
    isOpen, closeModal, usuario, setUsuario, readOnly }) {

    const [nombre, setNombre] = useState()
    const [apellido1, setApellido1] = useState()
    const [apellido2, setApellido2] = useState()
    const [poblacion, setPoblacion] = useState()
    const [codigoPostal, setCodigoPostal] = useState()
    const [email, setEmail] = useState()
    const [titulacion, setTitulacion] = useState()
    const [clave, setClave] = useState()
    const [rol, setRol] = useState()
    const [msg, setMsg] = useState('')
    const [isOpenErrorModal, setIsOpenErrorModal] = useState(false)

    const handleInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    const handleAddUsuario = (usuario) => {
        alert("Enviando formulario")
        addUsuario(usuario)
            .then((res) => {
                setMsg(res.message)
                if (res.message === "Usuario añadido") {
                    setUsuario({})
                    closeModal()
                }
                else {
                    openErrorModal(res.message)
                }
            }
            )
    }

    const openErrorModal = (mnsj) => {
        setMsg(mnsj)
        setIsOpenErrorModal(true)
    }

    const toggleModError = () => {
        setIsOpenErrorModal(!isOpenErrorModal)
    }

    return (

        <Modal fullscreen isOpen={isOpen} toggle={closeModal} >
            <ModalHeader isOpen={isOpen} toggle={closeModal} >
                <h4 >{"Introducir usuario"}</h4>
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
                            <Label style={{ color: "black" }} for="apellido1" value="apellido1">Apellido1</Label>
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
                            <Label style={{ color: "black" }} for="codigoPostal" id="codigoPostal" value="codigoPostal">CodPostal</Label>
                            <Input type="text" name="codigoPostal" readOnly={readOnly} id="codigoPostal" placeholder="CodPostal"
                                value={readOnly ? usuario.codigoPostal : codigoPostal} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulacion" >Titulación</Label>
                            <Input id="titulacion" name="titulacion" type="text" readOnly={readOnly} placeholder="Titulación"
                                value={readOnly ? usuario.titulacion : titulacion} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="email" >Email</Label>
                            <Input id="email" name="email" type="email" readOnly={readOnly} placeholder="Email"
                                value={readOnly ? usuario.email : email} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="clave" >Clave</Label>
                            <Input id="clave" name="clave" type="password" readOnly={readOnly} placeholder="Clave"
                                value={readOnly ? usuario.clave : clave} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="rol" >Rol</Label>
                            <Input id="rol" name="rol" type="select" readOnly={readOnly} placeholder="Rol"
                                value={readOnly ? usuario.rol : rol} onChange={handleInputChange}>
                                <option>Socio</option>
                                <option>Administrador</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    {isOpenErrorModal &&
                        <Modal isOpen={isOpenErrorModal}>
                            <ModalHeader isOpen={isOpenErrorModal} toggle={toggleModError} />
                            <ModalBody>
                                <h4>{msg}</h4>
                            </ModalBody>
                        </Modal>}
                </Row>
            </ModalBody>
            <ModalFooter>
                {<Button onClick={() => handleAddUsuario(usuario)}>{'Nuevo'}</Button>}
            </ModalFooter>
        </Modal>
    )
}