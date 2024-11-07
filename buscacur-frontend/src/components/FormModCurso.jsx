import React, { useState } from "react"
import {
    Row, Col, Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input
} from 'reactstrap'
import { modCurso } from "../utils/apicallsCursos"

export default function FormModCurso({
    isOpen, closeModal, curso, setCurso, readOnly }) {

    //const params = useParams()
    const [ alerta, setAlerta ] = useState(false)
    const [ msg, setMsg ] = useState()
       
    const handleInputChange = (e) => {
        setCurso({ ...curso, [e.target.name]: e.target.value })
    }

    const handleModCurso = () => {
        alert("Modificando registro")
        modCurso(curso)
        .then((res) => {
            if (res === 'Registro modificado') {
                closeModal()
            }
            else {
                setMsg(res.message)
                setAlerta(true)
            }
        })
    }

    return (

        <Modal fullscreen isOpen={isOpen} toggle={closeModal} >
            <ModalHeader isOpen={isOpen} toggle={closeModal} >
                <h4 >{"Modificar curso"}</h4>
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="nombre" >Nombre</Label>
                            <Input name="nombre" type="text" readOnly={readOnly} placeholder="Nombre"
                                value={curso.nombre} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulo">Titulo</Label>
                            <Input name="titulo" type="text" readOnly={readOnly} placeholder="Titulo"
                                value={curso.titulo} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} className="form-label-color" for="tipo" value="Tipo">Tipo</Label>
                            <Input type="text" name="tipo" readOnly={readOnly} placeholder="Tipo"
                                value={curso.tipo} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="tematica" >Temática</Label>
                            <Input name="tematica" type="text" readOnly={readOnly} placeholder="Temática"
                                value={curso.tematica} onChange={handleInputChange} ></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} id="semestre" for="semestre">Semestre</Label>
                            <Input type="text" name="semestre" readOnly={readOnly} placeholder="Semestre"
                                value={curso.semestre} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="tipo" id="creditos" value="Creditos">Créditos</Label>
                            <Input type="text" name="creditos" readOnly={readOnly} placeholder="Créditos"
                                value={curso.creditos} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulacionCurso" value="TitulacionCurso">Titulación</Label>
                            <Input type="text" name="titulacionCurso" readOnly={readOnly} placeholder="Titulación"
                                value={curso.titulacionCurso} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="director" >Director</Label>
                            <Input name="director" type="text" readOnly={readOnly} placeholder="Director"
                                value={curso.director} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="4">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="profesor">Profesor</Label>
                            <Input type="text" name="profesor" readOnly={readOnly} placeholder="Profesor"
                                value={ curso.profesor } onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="imparticion" value="Imparticion">Impartición</Label>
                            <Input type="text" name="imparticion" readOnly={readOnly} placeholder="Impartición"
                                value={curso.imparticion} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                   
                    <Col md={12}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="enlace" >Link a descripción</Label>
                            <Input name="enlace" type="url" readOnly={readOnly} placeholder="Link a descripción"
                                value={curso.enlace} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="titulosOfertan">Titulos que la ofertan</Label>
                            <Input type="text" name="titulosOfertan" readOnly={readOnly} placeholder="Titulos que la ofertan"
                                value={curso.titulosOfertan} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="descripcion" >Descripción</Label>
                            <Input name="descripcion" type="textarea" readOnly={readOnly} placeholder="Descripción"
                                value={curso.descripcion} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                {<Button onClick={() => handleModCurso(curso)}>{'Modificar'}</Button>}
            </ModalFooter>
        </Modal>
    )
}