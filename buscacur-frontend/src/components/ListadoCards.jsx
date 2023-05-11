import React, { useState } from "react"
import {
    Row, Col, Card, CardTitle, CardBody, CardText, CardFooter, Button,
    Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Alert
} from 'reactstrap'
import { AiFillPlusSquare } from "react-icons/ai"
import FormDetalleCurso from "./FormDetalleCurso"
import Login from "../pages/Login"


export default function ListadoCards({ cursos }) {


    const [isOpen, setIsOpen] = useState(false)
    const [modalToggle, setModalToggle] = useState(false)
    const [selCurso, setSelCurso] = useState([])
   
    const openModal = (curso) => {
        setIsOpen(true)
        setSelCurso(curso)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <Row>
            {cursos.map((curso,i) => {
                return (
                    <Col md="3">

                        <Card style={{card:"word-wrap-none"}} id="card-curso">
                            <CardTitle id="ttl-1">
                                {curso.nombre}
                            </CardTitle>
                            <CardBody>
                                <CardText><span>Temática:  </span>
                                    {curso.tematica}
                                </CardText>
                                <CardText><span>Créditos:  </span>
                                    {curso.creditos}
                                </CardText>
                                <CardText><span>Semestre:  </span>
                                    {curso.semestre}
                                </CardText>
                            </CardBody>
                            <CardFooter id="c-footer">
                                <Button color="none" onClick={()=> openModal(curso) } >
                                    <h2><AiFillPlusSquare id="" /></h2>
                                </Button>
                            </CardFooter>
                        {isOpen&&<FormDetalleCurso isOpen={isOpen} closeModal={closeModal} curso={selCurso} setCurso={setSelCurso} 
                                readOnly="true" handleAddCurso handleDelCurso handleModCurso handleInputChange />}   
                        </Card>
                        {/**<Modal  isOpen={isOpen} toggle={closeModal} >
                            <ModalHeader isOpen={isOpen} toggle={closeModal} >
                                <h4 >Descripción del curso</h4>
                            </ModalHeader>
                            <ModalBody>
                                <Row>
                                    <Col md={4}>
                                        <FormGroup >
                                            <Label for="nombre" >Nombre</Label>
                                            <Input id="nombre" type="text" readOnly placeholder="Nombre" value={selCurso.nombre} ></Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup >
                                            <Label for="titulo">Titulo</Label>
                                            <Input type="text" readOnly placeholder="Titulo" value={selCurso.titulo}></Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup >
                                            <Label class="form-label-color" for="tipo" value="Tipo">Tipo</Label>
                                            <Input type="text" readOnly id="tipo" placeholder="Tipo" value={selCurso.tipo}></Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </ModalBody>
                            <ModalFooter>

                            </ModalFooter>
                            </Modal>*/}

                    </Col>
                )
            })}
        </Row>
    )
}