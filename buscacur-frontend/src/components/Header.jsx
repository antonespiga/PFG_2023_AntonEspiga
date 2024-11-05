import React, { useState } from "react"
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
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
        <Container md="2" className="header sticky-top">
            <Col className="cabecera-logo">
                <a href="/" ><img className="logo" src={LogoUned} /></a>
            </Col>
            <Col md="8" className="cabecera-texto">
                <h1>Buscador de cursos</h1>
                <Button color="none" onClick={volver} ><h6> < FaArrowLeft />{' '}{location.pathname}</h6></Button>
            </Col>
            <Col md="2" className="menu" >
                <Button id="expand-btn" onClick={openModal}>
                    &#9776;
                </Button>
                <Modal contentClassName="modal-iniciar" size="sm" isOpen={showModal}>
                    <ModalHeader toggle={openModal} isOpen={showModal} >Opciones</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col >
                                <Link to="/registro" >
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