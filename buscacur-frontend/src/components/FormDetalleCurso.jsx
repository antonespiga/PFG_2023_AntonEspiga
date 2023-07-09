import React, { useState } from "react"
import {
    Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input
} from 'reactstrap'

export default function FormDetalleCurso({
    isOpen, closeModal, curso, setCurso, readOnly, opt, handleCurso }) {

    const [nombre, setNombre] = useState()
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

    const handleInputChange = (e) => {
        setCurso({ ...curso, [e.target.name]: e.target.value })
    }

    return (

        <Modal fullscreen isOpen={isOpen} toggle={closeModal} >
            <ModalHeader isOpen={isOpen} toggle={closeModal} >
                <h4 >{"Detalle del curso"}</h4>
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
                {<Button hidden={readOnly} onClick={() => handleCurso(curso)}>{opt === 'add' ? 'Nuevo' : (opt === 'mod' ? 'Modificar' : 'Eliminar')}</Button>}
            </ModalFooter>
        </Modal>
    )
}