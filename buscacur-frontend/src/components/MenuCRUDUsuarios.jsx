import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Alert } from 'reactstrap'
import FormAddUsuario from "./FormAddUsuario";
import FormDetalleUsuario from "./FormDetalleUsuario";
import { addCurso, delCurso, modCurso, getCursos } from "../utils/apicallsCursos";
import { addUsuario, delUsuario, modUsuario, getUsuarios } from "../utils/apicallsUsuarios";
import ListaUsuarios from "./ListaUsuarios";

export default function MenuCRUDUsuarios() {

    const [isOpen, setIsOpen] = useState(false)
    const [usuario, setUsuario] = useState()
    const [read, setRead] = useState(false)
    const [verLista, setVerLista] = useState(false)
    const [usuarios, setUsuarios] = useState()
    const [opt, setOpt] = useState()
    

    useEffect(() =>{
        getUsuarios()
        .then((res) => setUsuarios(res))
    },[])

    const toggle = (opt) => {
        setIsOpen(!isOpen)
        setOpt(opt)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const handleInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    const handleAddUsuario = (usuario) => {
        alert("Enviar formulario, ¿Está seguro?")
        addUsuario(usuario)
            .then(() => {
                setUsuario({})
                closeModal()})
    }

    const handleDelUsuario = (usuario) => {
        alert("Se va a eliminar un registro. ¿Está seguro?")
        delUsuario(usuario)
        .then(closeModal())
    }

    const handleModUsuario = (usuario) => {
        alert("Se va a modificar un registro. ¿Está seguro?")
        modUsuario(usuario)
        (closeModal())
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
                <Button color="light"  onClick={() => toggle("add")}>
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
                            <ModalFooter>

                            </ModalFooter>
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
                            <ModalFooter>
                                
                            </ModalFooter>
                        </Modal>}
            </Col>
        </Row>
    </Container>
    )
}
