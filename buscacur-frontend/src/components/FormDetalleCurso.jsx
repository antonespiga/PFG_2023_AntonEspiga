import React, { useEffect, useState } from "react"
import {
    Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input
} from 'reactstrap'

import { getArrayTitulos } from "../utils/apicallsTitulos"


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
    const [titulacionCurso, setTitulacionCurso] = useState()
    const [enlace, setEnlace] = useState()
    const [descripcion, setDescripcion] = useState()
    const [titulosOfertan, setTitulosOfertan] = useState([curso.titulosOfertan])
    const [listaTitulos, setListaTitulos] = useState([])

    const handleInputChange = (e) => {
        setCurso({ ...curso, [e.target.name]: e.target.value })
    }

    useEffect(() =>{
        const arrayCodigos = curso.titulosOfertan
        getArrayTitulos(arrayCodigos)
        .then(res => setListaTitulos(res))
    },[curso])

    return (

        <Modal fullscreen isOpen={isOpen} toggle={closeModal} >
            <ModalHeader  toggle={closeModal} >
                <div >{"Detalle del curso"}</div>
            </ModalHeader>
            <ModalBody >
                <Row>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="nombre" >Nombre</Label>
                            <Input name="nombre" type="text" readOnly={readOnly} placeholder="Nombre"
                                value={readOnly ? curso.nombre : nombre} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulo">Titulo</Label>
                            <Input name="titulo" type="text" readOnly={readOnly} placeholder="Titulo"
                                value={readOnly ? curso.titulo : titulo} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} className="form-label-color" for="tipo" value="Tipo">Tipo</Label>
                            <Input type="text" name="tipo" readOnly={readOnly} placeholder="Tipo"
                                value={readOnly ? curso.tipo : tipo} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="tematica" >Temática</Label>
                            <Input name="tematica" type="text" readOnly={readOnly} placeholder="Temática"
                                value={readOnly ? curso.tematica : tematica} onChange={handleInputChange} ></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }}  for="semestre">Semestre</Label>
                            <Input type="text" name="semestre" readOnly={readOnly} placeholder="Semestre"
                                value={readOnly ? curso.semestre : semestre} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="tipo"  value="Creditos">Créditos</Label>
                            <Input type="text" name="creditos" readOnly={readOnly} placeholder="Créditos"
                                value={readOnly ? curso.creditos : creditos} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulacionCurso" value="Titulacion">Titulación</Label>
                            <Input type="text" name="titulacionCurso" readOnly={readOnly} placeholder="Titulación"
                                value={readOnly ? curso.titulacionCurso : imparticion} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="director" >Director</Label>
                            <Input name="director" type="text" readOnly={readOnly} placeholder="Director"
                                value={readOnly ? curso.director : director} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="8">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="profesor">Profesor</Label>
                            <Input type="text" name="profesor" readOnly={readOnly} placeholder="Profesor"
                                value={readOnly ? curso.profesor : profesor} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                   
                    <Col md={12}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="enlace" >Link a descripción</Label>
                            <a href={curso.enlace} target="_blank">
                            <Input style={{ color:"blue", textDecoration: "underline", cursor:"pointer"}} name="enlace" type="url" readOnly={readOnly} placeholder="Link a descripción"                                value={readOnly ? curso.enlace : enlace} onChange={handleInputChange} ></Input></a>
                        </FormGroup>
                    </Col>
                    <Col md="10">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulosOfertan">Titulos que la ofertan</Label>
                            <Input type="text" name="titulosOfertan" readOnly={readOnly} placeholder="Titulos que la ofertan"
                                value={readOnly? listaTitulos: titulosOfertan}
                                  onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="imparticion" value="Imparticion">Impartición</Label>
                            <Input type="text" name="imparticion" readOnly={readOnly} placeholder="Impartición"
                                value={readOnly ? curso.imparticion : imparticion} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="descripcion" >Descripción</Label>
                            <Input name="descripcion" type="textarea" readOnly={readOnly} placeholder="Descripción"
                                value={readOnly ? curso.descripcion : descripcion} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    )
}