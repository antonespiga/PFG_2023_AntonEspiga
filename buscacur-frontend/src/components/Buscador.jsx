import React from "react"
import { Container, Card, Row, Col, InputGroup, Button, Input } from "reactstrap";
import './Buscador.css'
import {FaUser, FaSearch} from 'react-icons/fa'

function Buscador() {

const mostrarPerfil = () => {

}

    return (
        <Container className="container-fluid">
            <Row md="9" className="buscador">
                <Col>
                    <InputGroup className="input-group mb-9">
                        <Input type="search" className="input-group" placeholder="Introduzca el texto a buscar" aria-describedby="button-addon2" />
                        <Button className="btn btn-search input-group-append-icon" type="button" id="button-addon-2"><FaSearch /></Button>
                    </InputGroup>
                </Col>
               
            </Row>
        </Container>
    )
}

export default Buscador;