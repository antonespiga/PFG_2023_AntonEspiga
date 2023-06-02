import React, { useState} from "react";
import { Container, Row, Col, Button } from 'reactstrap'
import Estadisticas from "./Estadisticas";

export default function MenuEstadisticas() {

    
    const [isOpen, setIsOpen] = useState(false)

   
    const openModal = () => {
        setIsOpen(true)
    }
    
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
    <Container id="panelEstadisticas">
        
        <Row>
            <Col>
                <Button onClick={openModal} color="light">
                    Estadisticas sistema 
                </Button>
                { isOpen && <Estadisticas 
               isOpen={isOpen}
               closeModal={closeModal} />}
            </Col>
            </Row>
           
    </Container>
    )
}