import React from "react";
import { Container, Form, FormGroup, Input, Label, Col, Row, Card, CardFooter, Button } from "reactstrap";
import './Registro.css'

function Registro() {
    return (
        <Container className="container-fluid">
            <Card className="form-registro">
                <Form>
                    <Row>
                        <Col md="4">
                            <FormGroup >
                                <Label value="Nombre">Nombre</Label>
                                <Input placeholder="Nombre"></Input>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <Label value="Apellido1">Apellido1</Label>
                                <Input placeholder="Primer apellido"></Input>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <Label value="Apellido2">Apellido2</Label>
                                <Input placeholder="Segundo apellido"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <FormGroup >
                                <Label value="CodPostal">Código postal</Label>
                                <Input placeholder="Código postal"></Input>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <Label value="Poblacion">Población</Label>
                                <Input placeholder="Población"></Input>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <Label value="Titulacion">Titulación</Label>
                                <Input placeholder="Titulación"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <FormGroup >
                                <Label value="Email">Email</Label>
                                <Input type="email"placeholder="Email"></Input>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <Label value="Clave"><span>Clave</span></Label>
                                <Input type="password" placeholder="Clave"></Input>
                            </FormGroup>
                        </Col>
                        </Row>
                </Form>
                <CardFooter>
                    <Button className="bton-registro"><span>Registrar</span></Button>
                </CardFooter>
            </Card>
        </Container>
    )
}

export default Registro