import React, { useState, useEffect } from "react"
import {
    Container,
    Row, Col, Card, CardTitle, CardBody, CardText, CardFooter, CardHeader, Button, Table,
    Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input
} from 'reactstrap'
import {
    getVisualizaciones, getVisualizacionesByNombre, getVisualizacionesByTipo,
    getVisualizacionesBySemestre, getVisualizacionesUsuario, getVisualizacionesByTematica,
    getVisualizacionesByCreditos, getVisualizacionesByDirector, getVisualizacionesByTitulo,
    getVisualizacionesByProfesor, getVisualizacionesByImparticion
} from "../utils/apicallsVisualizaciones"
import { getUsuarios } from "../utils/apicallsUsuarios"
import './Estadisticas.css'

export default function Estadisticas({ isOpen, closeModal }) {

    const [totalVisualizaciones, setTotalVisualizaciones] = useState([])
    const [visualizacionesByNombre, setVisualizacionesByNombre] = useState([])
    const [visualizacionesByTipo, setVisualizacionesByTipo] = useState([])
    const [visualizacionesBySemestre, setVisualizacionesBySemestre] = useState([])
    const [visualizacionesByTematica, setVisualizacionesByTematica] = useState([])
    const [visualizacionesByDirector, setVisualizacionesByDirector] = useState([])
    const [visualizacionesByProfesor, setVisualizacionesByProfesor] = useState([])
    const [visualizacionesByCreditos, setVisualizacionesByCreditos] = useState([])
    const [visualizacionesByImparticion, setVisualizacionesByImparticion] = useState([])
    const [visualizacionesByTitulo, setVisualizacionesByTitulo] = useState([])

    const [visualizacionesUsuario, setVisualizacionesUsuario] = useState()
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        getUsuarios()
            .then((res) => setUsuarios(res))
    }, [])

    useEffect(() => {
        getVisualizaciones()
            .then((res) => setTotalVisualizaciones(res))
    }, [])

    useEffect(() => {
        getVisualizacionesByNombre()
            .then((res) => setVisualizacionesByNombre(res))
    }, [])

       useEffect(() => {
        getVisualizacionesByTipo()
            .then((res) => setVisualizacionesByTipo(res))
    }, [])

    useEffect(() => {
        getVisualizacionesBySemestre()
            .then((res) => setVisualizacionesBySemestre(res))
    }, [])

    useEffect(() => {
        getVisualizacionesByTematica()
            .then((res) => setVisualizacionesByTematica(res))
    }, [])

    useEffect(() => {
        getVisualizacionesByCreditos()
            .then((res) => setVisualizacionesByCreditos(res))
    }, [])

    useEffect(() => {
        getVisualizacionesByDirector()
            .then((res) => setVisualizacionesByDirector(res))
    }, [])

    useEffect(() => {
        getVisualizacionesByProfesor()
            .then((res) => setVisualizacionesByProfesor(res))
    }, [])

    useEffect(() => {
        getVisualizacionesByTitulo()
            .then((res) => setVisualizacionesByTitulo(res))
    }, [])

    useEffect(() => {
        getVisualizacionesByImparticion()
            .then((res) => setVisualizacionesByImparticion(res))
    }, [])

    return (
        <Modal fullscreen isOpen={isOpen}>
            <ModalHeader toggle={closeModal}>
                Estadisticas del sistema
            </ModalHeader>
            <ModalBody >
                <Container id="contenido" >
                    <Row id="primera-fila">

                        <Col sm="1">
                            <Row >
                                <FormGroup>
                                    <Label for="total" style={{ color: "black" }}>Total</Label>
                                    <Input id="total" name="total" type="text" value={totalVisualizaciones.length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="total" style={{ color: "black" }}>Nombre</Label>
                                    <Input id="total" name="total" type="text" value={visualizacionesByNombre.length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="total" style={{ color: "black" }}>Tematica</Label>
                                    <Input id="total" name="total" type="text" value={visualizacionesByTematica.length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="total" style={{ color: "black" }}>Tipo</Label>
                                    <Input id="total" name="total" type="text" value={visualizacionesByTipo.length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="total" style={{ color: "black" }}>Semestre</Label>
                                    <Input id="total" name="total" type="text" value={visualizacionesBySemestre.length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                <Label for="total" style={{ color: "black" }}>Creditos</Label>
                                <Input id="total" name="total" type="text" value={visualizacionesByCreditos.length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                <Label for="total" style={{ color: "black" }}>Director</Label>
                                <Input id="total" name="total" type="text" value={visualizacionesByDirector.length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                <Label for="total" style={{ color: "black" }}>Profesor</Label>
                                <Input id="total" name="total" type="text" value={visualizacionesByProfesor.length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                <Label for="total" style={{ color: "black" }}>Titulo</Label>
                                <Input id="total" name="total" type="text" value={visualizacionesByTitulo.length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                <Label for="total" style={{ color: "black" }}>Imparticion</Label>
                                <Input id="total" name="total" type="text" value={visualizacionesByImparticion.length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                    </Row>


                   
                        <Table striped responsive borderless >
                           
                            <thead >
                                <tr>
                                    <th>Usuario</th>
                                    <th>Consultas</th>
                                    <th>Nombre</th>
                                    <th>Tematica</th>
                                    <th>Tipo</th>
                                    <th>Semestre</th>
                                    <th>Creditos</th>
                                    <th>Director</th>
                                    <th>Profesor</th>
                                    <th>Titulo</th>
                                    <th>Imparticion</th>
                                </tr>
                            </thead>
                            <tbody>
                            {usuarios.map((usuario, _id) => {
                                return (
                                    
                                    <tr key={_id}>
                                        <td>{usuario.nombre}{' '}{usuario.apellido1}{' '}{usuario.apellido2}</td>
                                        <td>{usuario.cont}</td>
                                        <td>{visualizacionesByNombre.filter(view => {return view.usuario===usuario._id}).length}</td>
                                        <td>{visualizacionesByTematica.filter(view => {return view.usuario===usuario._id}).length}</td>
                                        <td>{visualizacionesByTipo.filter(view => {return view.usuario===usuario._id}).length}</td>
                                        <td>{visualizacionesBySemestre.filter(view => {return view.usuario===usuario._id}).length}</td>
                                        <td>{visualizacionesByCreditos.filter(view => {return view.usuario===usuario._id}).length}</td>
                                        <td>{visualizacionesByDirector.filter(view => {return view.usuario===usuario._id}).length}</td>
                                        <td>{visualizacionesByProfesor.filter(view => {return view.usuario===usuario._id}).length}</td>
                                        <td>{visualizacionesByTitulo.filter(view => {return view.usuario===usuario._id}).length}</td>
                                        <td>{visualizacionesByImparticion.filter(view => {return view.usuario===usuario._id}).length}</td>
                                        

                                    </tr>
                                 
                                )
                            })}
                             </tbody>  
                        </Table>
                    
                </Container>
            </ModalBody>

        </Modal>
    )
}