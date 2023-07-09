import React, { useState } from "react";
import { Container, Row, Col, Button, } from 'reactstrap'
import CopiaSeguridad from './CopiaSeguridad'

export default function MenuCopias() {

    const [openModal, setOpenModal] = useState(false)

    const handleCopia = () => {
        setOpenModal(true)
    }
    const closeModal = () => {
        setOpenModal(false)
    }

    return (

        <Container id="panelCopias">
            <Row>
                <Col>
                    <Button onClick={handleCopia} color="light">
                        Copia de seguridad
                    </Button>
                </Col>
                {openModal && <CopiaSeguridad
                    isOpen={openModal}
                    closeModal={closeModal} />}
            </Row>
        </Container>
    )
}