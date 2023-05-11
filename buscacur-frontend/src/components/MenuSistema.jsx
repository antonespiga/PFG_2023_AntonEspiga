import React from "react";
import { Container, Row, Col, Button } from 'reactstrap'

export default function MenuSistema() {

    return (
    <Container id="panelSistema">
        
        <Row>
            <Col>
                <Button color="light">
                    Configurar sistema 
                </Button>
            </Col>
            <Col>
                <Button color="light">
                    Reinstalar sistema
                </Button>
            </Col>
        </Row>
    </Container>
    )
}