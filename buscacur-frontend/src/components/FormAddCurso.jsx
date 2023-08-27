import React, { useState } from "react"
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input }
    from 'reactstrap'
import { addCurso } from "../utils/apicallsCursos"

export default function FormAddCurso({
    isOpen, closeModal, curso, setCurso, readOnly }) {

    const [nombre, setNombre] = useState()
    const [identificador, setIdentificador] = useState()
    const [tipo, setTipo] = useState()
    const [tematica, setTematica] = useState()
    const [titulo, setTitulo] = useState()
    const [semestre, setSemestre] = useState()
    const [creditos, setCreditos] = useState()
    const [director, setDirector] = useState()
    const [profesor, setProfesor] = useState()
    const [imparticion, setImparticion] = useState()
    const [enlace, setEnlace] = useState()
    const [descripcion, setDescripcion] = useState()
    const [titulosOfertan, setTitulosOfertan] = useState()
    const [alerta, setAlerta] = useState(false)
    const [msg, setMsg] = useState()
    const [isOpenErrorModal, setIsOpenErrorModal] = useState(false)

    const handleInputChange = (e) => {
        setCurso({ ...curso, [e.target.name]: e.target.value })
    }

    const handleAddCurso = (curso) => {
        alert("Enviando formulario")
        addCurso(curso)
            .then((res) => {
                if (res === 'Registro guardado') {
                    setCurso({})
                    closeModal()
                }
                else {
                    openErrorModal(res.message)
                }
            })
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
            {isOpenErrorModal &&
                <Modal isOpen={isOpenErrorModal}>
                    <ModalHeader isOpen={isOpenErrorModal} toggle={toggleModError} />
                    <ModalBody>
                        <h4>{msg}</h4>
                    </ModalBody>
                </Modal>}
            <ModalHeader isOpen={isOpen} toggle={closeModal} >
                <h4 >{"Introducir curso"}</h4>
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="nombre" >Nombre</Label>
                            <Input id="nombre" name="nombre" type="text" readOnly={readOnly} placeholder="Nombre"
                                value={readOnly ? curso.nombre : nombre} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulo">Titulo</Label>
                            <Input id="titulo" name="titulo" type="text" readOnly={readOnly} placeholder="Titulo"
                                value={readOnly ? curso.titulo : titulo} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} className="form-label-color" for="tipo" value="Tipo">Tipo</Label>
                            <Input type="text" name="tipo" readOnly={readOnly} id="tipo" placeholder="Tipo"
                                value={readOnly ? curso.tipo : tipo} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} className="form-label-color" for="identificador" value="Identificador">Identificador</Label>
                            <Input type="text" name="identificador" readOnly={readOnly} id="identificador" placeholder="Identificador:"
                                value={readOnly ? curso.identificador : identificador} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="tematica" >Temática</Label>
                            <Input id="tematica" name="tematica" type="text" readOnly={readOnly} placeholder="Temática"
                                value={readOnly ? curso.tematica : tematica} onChange={handleInputChange} ></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} id="semestre" for="semestre">Semestre</Label>
                            <Input type="text" name="semestre" readOnly={readOnly} placeholder="Semestre"
                                value={readOnly ? curso.semestre : semestre} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="tipo" id="creditos" value="Creditos">Créditos</Label>
                            <Input type="text" name="creditos" readOnly={readOnly} id="creditos" placeholder="Créditos"
                                value={readOnly ? curso.creditos : creditos} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="director" >Director</Label>
                            <Input id="director" name="director" type="text" readOnly={readOnly} placeholder="Director"
                                value={readOnly ? curso.director : director} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="profesor">Profesor</Label>
                            <Input type="text" name="profesor" readOnly={readOnly} placeholder="Profesor" id="profesor"
                                value={readOnly ? curso.profesor : profesor} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="imparticion" value="Imparticion">Impartición</Label>
                            <Input type="text" name="imparticion" readOnly={readOnly} id="imparticion" placeholder="Impartición"
                                value={readOnly ? curso.imparticion : imparticion} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="enlace" >Link a descripción</Label>
                            <Input id="enlace" name="enlace" type="url" readOnly={readOnly} placeholder="Link a descripción"
                                value={readOnly ? curso.enlace : enlace} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulosOfertan">Titulos que la ofertan</Label>
                            <Input type="text" name="titulosOfertan" readOnly={readOnly} placeholder="Titulos que la ofertan"
                                value={readOnly ? curso.titulosOfertan : titulosOfertan} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                    </Col>
                    <Col md="12">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="descripcion" >Descripción</Label>
                            <Input id="descripcion" name="descripcion" type="textarea" readOnly={readOnly} placeholder="Descripción"
                                value={readOnly ? curso.descripcion : descripcion} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                {<Button onClick={() => handleAddCurso(curso)}>{'Nuevo'}</Button>}
            </ModalFooter>
        </Modal>
    )
}