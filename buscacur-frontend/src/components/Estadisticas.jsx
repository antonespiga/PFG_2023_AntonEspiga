import React, { useState, useEffect } from "react"
import {
    Container, Row, Col, Table, Modal, ModalHeader, ModalBody, FormGroup, Label, Input
} from 'reactstrap'
import { getVisualizaciones } from "../utils/apicallsVisualizaciones"
import { getUsuarios } from "../utils/apicallsUsuarios"
import './Estadisticas.css'

export default function Estadisticas({ isOpen, closeModal }) {

    const [totalVisualizaciones, setTotalVisualizaciones] = useState([])
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        getUsuarios()
            .then((res) => setUsuarios(res))
    }, [])

    useEffect(() => {
        getVisualizaciones()
            .then((res) => setTotalVisualizaciones(res))
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
                                    <Label for="nombre" style={{ color: "black" }}>Nombre</Label>
                                    <Input id="nombre" name="total" type="text" value={totalVisualizaciones.filter(view => {
                                        return view.tipoConsulta === 'nombre'
                                    }).length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="tematica" style={{ color: "black" }}>Tematica</Label>
                                    <Input id="tematica" name="total" type="text" value={totalVisualizaciones.filter(view => {
                                        return view.tipoConsulta === 'tematica'
                                    }).length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="tipo" style={{ color: "black" }}>Tipo</Label>
                                    <Input id="tipo" name="total" type="text" value={totalVisualizaciones.filter(view => {
                                        return view.tipoConsulta === 'tipo'
                                    }).length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="semestre" style={{ color: "black" }}>Semestre</Label>
                                    <Input id="semestre" name="total" type="text" value={totalVisualizaciones.filter(view => {
                                        return view.tipoConsulta === 'semestre'
                                    }).length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="creditos" style={{ color: "black" }}>Creditos</Label>
                                    <Input id="creditos" name="total" type="text" value={totalVisualizaciones.filter(view => {
                                        return view.tipoConsulta === 'creditos'
                                    }).length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="director" style={{ color: "black" }}>Director</Label>
                                    <Input id="director" name="total" type="text" value={totalVisualizaciones.filter(view => {
                                        return view.tipoConsulta === 'director'
                                    }).length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="profesor" style={{ color: "black" }}>Profesor</Label>
                                    <Input id="profesor" name="total" type="text" value={totalVisualizaciones.filter(view => {
                                        return view.tipoConsulta === 'profesor'
                                    }).length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="titulo" style={{ color: "black" }}>Titulo</Label>
                                    <Input id="titulo" name="total" type="text" value={totalVisualizaciones.filter(view => {
                                        return view.tipoConsulta === 'titulo'
                                    }).length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="imparticion" style={{ color: "black" }}>Imparticion</Label>
                                    <Input id="imparticion" name="total" type="text" value={totalVisualizaciones.filter(view => {
                                        return view.tipoConsulta === 'imparticion'
                                    }).length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="afinidad" style={{ color: "black" }}>Afinidad</Label>
                                    <Input id="afinidad" name="total" type="text" value={totalVisualizaciones.filter(view => {
                                        return view.tipoConsulta === 'afinidad'
                                    }).length}></Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <FormGroup>
                                    <Label for="libre" style={{ color: "black" }}>Libre</Label>
                                    <Input id="libre" name="total" type="text" value={totalVisualizaciones.filter(view => {
                                        return view.tipoConsulta === 'texto libre'
                                    }).length}></Input>
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
                                <th>Afinidad</th>
                                <th>Libre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario, _id) => {
                                return (

                                    <tr key={_id}>
                                        <td>{usuario.nombre}{' '}{usuario.apellido1}{' '}{usuario.apellido2}</td>
                                        
                                        <td>{totalVisualizaciones.filter(view => { return ((view.usuario === usuario._id) ) }).length}</td>
                                        <td>{totalVisualizaciones.filter(view => { return ((view.usuario === usuario._id) && (view.tipoConsulta === 'nombre')) }).length}</td>
                                        <td>{totalVisualizaciones.filter(view => { return ((view.usuario === usuario._id) && (view.tipoConsulta === 'tematica')) }).length}</td>
                                        <td>{totalVisualizaciones.filter(view => { return ((view.usuario === usuario._id) && (view.tipoConsulta === 'tipo')) }).length}</td>
                                        <td>{totalVisualizaciones.filter(view => { return ((view.usuario === usuario._id) && (view.tipoConsulta === 'semestre')) }).length}</td>
                                        <td>{totalVisualizaciones.filter(view => { return ((view.usuario === usuario._id) && (view.tipoConsulta === 'creditos')) }).length}</td>
                                        <td>{totalVisualizaciones.filter(view => { return ((view.usuario === usuario._id) && (view.tipoConsulta === 'director')) }).length}</td>
                                        <td>{totalVisualizaciones.filter(view => { return ((view.usuario === usuario._id) && (view.tipoConsulta === 'profesor')) }).length}</td>
                                        <td>{totalVisualizaciones.filter(view => { return ((view.usuario === usuario._id) && (view.tipoConsulta === 'titulo')) }).length}</td>
                                        <td>{totalVisualizaciones.filter(view => { return ((view.usuario === usuario._id) && (view.tipoConsulta === 'imparticion')) }).length}</td>
                                        <td>{totalVisualizaciones.filter(view => { return ((view.usuario === usuario._id) && (view.tipoConsulta === 'afinidad')) }).length}</td>
                                        <td>{totalVisualizaciones.filter(view => { return ((view.usuario === usuario._id) && (view.tipoConsulta === 'texto libre')) }).length}</td>

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