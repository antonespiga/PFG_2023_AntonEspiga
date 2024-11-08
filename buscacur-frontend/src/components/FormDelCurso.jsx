import React from "react"
import {
    Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input
        } from 'reactstrap'
import { delCurso } from "../utils/apicallsCursos"

export default function FormDelCurso({
    isOpen, closeModal, curso, setCurso, readOnly }) {

    const handleInputChange = (e) => {
        setCurso({ ...curso, [e.target.name]: e.target.value })
    }

    const handleDelCurso = (curso) => {
        alert("Eliminando curso")
        delCurso(curso)
            .then(() => {
                closeModal()
            })
    }

    return (

        <Modal fullscreen fade="false" isOpen={isOpen} toggle={closeModal} >
            <ModalHeader  isOpen={isOpen} toggle={closeModal} >
                <h4 >{"Eliminar curso"}</h4>
            </ModalHeader>
            <ModalBody >
                <Row>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="nombre" >Nombre</Label>
                            <Input id="nombre" name="nombre" type="text" readOnly={readOnly} placeholder="Nombre"
                                value={ curso.nombre } onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulo">Titulo</Label>
                            <Input id="titulo" name="titulo" type="text" readOnly={readOnly} placeholder="Titulo"
                                value={curso.titulo } onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="tipo" value="Tipo">Tipo</Label>
                            <Input type="text" name="tipo" readOnly={readOnly} id="tipo" placeholder="Tipo"
                                value={ curso.tipo } onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="tematica" >Temática</Label>
                            <Input id="tematica" name="tematica" type="text" readOnly={readOnly} placeholder="Temática"
                                value={ curso.tematica } onChange={handleInputChange} ></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="semestre">Semestre</Label>
                            <Input id="semestre" type="text" name="semestre" readOnly={readOnly} placeholder="Semestre"
                                value={ curso.semestre } onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="creditos" value="Creditos">Créditos</Label>
                            <Input type="text" name="creditos" readOnly={readOnly} id="creditos" placeholder="Créditos"
                                value={ curso.creditos } onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulacionCurso">Titulación</Label>
                            <Input type="text" name="titulacionCurso" readOnly={readOnly} id="titulacionCurso" placeholder="Titulación"
                                value={ curso.titulacionCurso } onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="director" >Director</Label>
                            <Input id="director" name="director" type="text" readOnly={readOnly} placeholder="Director"
                                value={ curso.director } onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="profesor">Profesor</Label>
                            <Input type="text" name="profesor" readOnly={readOnly} placeholder="Profesor" id="profesor"
                                value={ curso.profesor } onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="imparticion" >Impartición</Label>
                            <Input type="text" name="imparticion" readOnly={readOnly} id="imparticion" placeholder="Impartición"
                                value={ curso.imparticion} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="enlace" >Link a descripción</Label>
                            <Input id="enlace" name="enlace" type="url" readOnly={readOnly} placeholder="Link a descripción"
                                value={ curso.enlace } onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulosOfertan">Titulos que la ofertan</Label>
                            <Input id="titulosOfertan" type="text" name="titulosOfertan" readOnly={readOnly} placeholder="Titulos que la ofertan"
                                value={ curso.titulosOfertan } onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="descripcion" >Descripción</Label>
                            <Input id="descripcion" name="descripcion" type="textarea" readOnly={readOnly} placeholder="Descripción"
                                value={ curso.descripcion } onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                {<Button onClick={() => handleDelCurso(curso)}>{'Eliminar'}</Button>}
            </ModalFooter>
        </Modal>
    )
}