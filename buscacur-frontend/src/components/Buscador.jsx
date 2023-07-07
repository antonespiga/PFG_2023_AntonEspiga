import React, {useState} from "react"
import { Container, Card, Row, Col, InputGroup, Button, Input } from "reactstrap";
import './Buscador.css'
import {FaUser, FaSearch} from 'react-icons/fa'

function Buscador() {
const [searchText, setSearchTest] = useState()
const handleFind = () => {
console.log()
}

    return (
        <Container className="container-fluid">
            <Row md="9" className="buscador">
                <Col>
                    <InputGroup className="input-group mb-9">
                        <Input type="search" className="input-group" placeholder="Introduzca el texto a buscar" 
                            value={''} />
                        <Button onClick={handleFind} className="btn btn-search input-group-append-icon" type="button" id="button-addon-2"><FaSearch /></Button>
                    </InputGroup>
                </Col>
               
            </Row>
        </Container>
    )
}

export default Buscador;