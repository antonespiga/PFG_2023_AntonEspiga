import React from "react"
import { Container, Card, Row, Col, InputGroup, Button, Input } from "reactstrap";
import './Buscador.css'
import iconoperfil from '/icono_perfil.jpg'

function Buscador() {
    return (
        <Container className="container-fluid">
        <Row className="buscador">
            <Col md="9">
                <InputGroup className="input-group mb-9">
                    <Input type="search" className="input-group" placeholder="Introduzca el texto a buscar" aria-describedby="button-addon2" />
                    <Button className="btn btn-search input-group-append-icon" type="button" id="button-addon-2"><span>&#128269;</span></Button>
                </InputGroup>
            </Col>
            <Col md="3" className="perfil" >
                <i><img className="icono" src={iconoperfil}  /></i>
            </Col>
        </Row>
        </Container>
    )
}

export default Buscador;