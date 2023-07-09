import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, ModalHeader } from 'reactstrap'
import FormAddUsuario from "./FormAddUsuario";
import { addUsuario, delUsuario, modUsuario, getUsuarios } from "../utils/apicallsUsuarios";
import ListaUsuarios from "./ListaUsuarios";

export default function MenuCRUDUsuarios() {

    const [isOpen, setIsOpen] = useState(false)
    const [usuario, setUsuario] = useState()
    const [verLista, setVerLista] = useState(false)
    const [usuarios, setUsuarios] = useState()
    const [opt, setOpt] = useState()

    useEffect(() => {
        getUsuarios()
            .then((res) => setUsuarios(res))
    }, [])

    const toggle = (opt) => {
        setIsOpen(!isOpen)
        setOpt(opt)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const handleAddUsuario = (usuario) => {
        alert("Enviar formulario, ¿Está seguro?")
        addUsuario(usuario)
            .then(() => {
                setUsuario({})
                closeModal()
            })
    }

    const modalLista = (opt) => {
        setVerLista(!verLista)
        setOpt(opt)
    }

    const actualizar = () => {
        getUsuarios()
            .then((res) => setUsuarios(res))
    }

    return (
        <Container id="panelUsuario">
            <Row>
                <Col>
                    <Button color="light" onClick={() => toggle("add")}>
                        Añadir
                    </Button>
                    {isOpen && <FormAddUsuario
                        isOpen={isOpen}
                        closeModal={closeModal}
                        usuario={usuario}
                        setUsuario={setUsuario}
                        readOnly={false}
                        opt={opt}
                        handleUsuario={handleAddUsuario}
                    />}
                </Col>
                <Col>
                    <Button color="light" onClick={() => modalLista("del")}>
                        Eliminar
                    </Button>
                    
                    {verLista &&
                        <Modal fullscreen isOpen={verLista} toggle={closeModal}>
                            <ModalHeader toggle={modalLista}>
                                <h3>Listado de usuarios</h3>
                                <Button onClick={() => actualizar()}>Actualiza</Button>
                            </ModalHeader>
                            <ListaUsuarios usuarios={usuarios} opt={opt} />
                        </Modal>}
                </Col>
                <Col>
                    <Button color="light" onClick={() => modalLista("mod")}>
                        Modificar
                    </Button>

                    {verLista &&
                        <Modal fullscreen isOpen={verLista} toggle={closeModal}>
                            <ModalHeader toggle={modalLista}>
                                <h3>Listado de usuarios</h3>
                                <Button onClick={() => actualizar(usuarios)}>Actualizar</Button>
                            </ModalHeader>
                            <ListaUsuarios usuarios={usuarios} opt={opt} />
                        </Modal>}
                </Col>
            </Row>
        </Container>
    )
}
