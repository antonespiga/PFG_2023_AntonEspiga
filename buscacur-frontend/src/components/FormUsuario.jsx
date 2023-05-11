import React, {useState} from "react";
import { Container, Row, Col, FormGroup, Label, Input} from 'reactstrap'

export default function FormUsuario() {

    return(
        <Container>
            <Row>
                <Col>
                    <FormGroup>
                        <Label>Nombre </Label>     
                        <Input readOnly></Input>
                    </FormGroup>
                </Col>
            </Row>
        </Container>
    )
}
