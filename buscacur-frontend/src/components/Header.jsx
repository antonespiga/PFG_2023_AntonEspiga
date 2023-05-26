import React, { useState } from "react"
import { Container, Row, Col, Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import './Header.css'
import LogoUned from '/LogoUNED.jpg'
import { FaArrowLeft } from "react-icons/fa"

function Header() {
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()

    const location = useLocation()
   

    const openModal = () => {
        setShowModal(!showModal)
    }

    const volver = () => {
        navigate(-1)
    }

  
    
    return (
        <Container className="header sticky-top">
            <Col className="cabecera-logo">
                <a href="/" ><img className="logo" src={LogoUned} /></a>
            </Col>
            <Col className="cabecera-texto">
                <h1>Cabecera de la página</h1>
                <Button color="none" onClick={volver} ><h8>Atrás < FaArrowLeft />{' Dónde estás: '}{location.pathname}</h8></Button>
            </Col>
            <Col className="menu" >
                <Button id="expand-btn" onClick={openModal}>
                    &#9776;
                </Button>
                <Modal size="sm" isOpen={showModal}>
                    <ModalHeader toggle={openModal} isOpen={showModal} closeButton>Opciones</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col >
                                <Link to="/registro">
                                    <Button color="success" onClick={openModal}>Registro</Button>
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/login">
                                    <Button color="secondary" onClick={openModal}>Login</Button>
                                </Link>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </Col>
        </Container>
    )
}

export default Header