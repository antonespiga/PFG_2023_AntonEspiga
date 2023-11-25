import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, ModalHeader, ModalFooter } from 'reactstrap'
import FormAddCurso from "./FormAddCurso";
import { addCurso, getCursos } from "../utils/apicallsCursos";
import ListadoTabla from "./ListadoTabla";

export default function MenuCRUDCursos() {

    const [isOpen, setIsOpen] = useState(false)
    const [curso, setCurso] = useState({})
    const [verLista, setVerLista] = useState(false)
    const [cursos, setCursos] = useState()
    const [opt, setOpt] = useState()

    useEffect(() => {
        getCursos()
            .then((res) => setCursos(res))
    }, [])

    const toggle = (opt) => {
        setIsOpen(!isOpen)
        setOpt(opt)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const handleAddCurso = (curso) => {
        alert("Enviar formulario, ¿Está seguro?")
        addCurso(curso)
            .then(() => {
                setCurso({})
                closeModal()
            })
    }

    const modalLista = (opt) => {
        setVerLista(!verLista)
        setOpt(opt)
    }

    const actualizar = () => {
        getCursos()
            .then((res) => setCursos(res))
    }

    return (
        <Container id="panel">
            <Row>
                <Col>
                    <Button color="light" onClick={() => toggle("add")}>
                        Añadir
                    </Button>
                    {/* ------------  Crear curso nuevo     -----------------  */}
                    {isOpen && <FormAddCurso
                        isOpen={isOpen}
                        closeModal={closeModal}
                        curso={curso}
                        setCurso={setCurso}
                        readOnly={false}
                    />}
                </Col>
                <Col>
                    <Button color="light" onClick={() => modalLista("del")}>
                        Eliminar
                    </Button>
                    {/* ------------  Eliminar curso     -----------------  */}
                    
                </Col>
                <Col>
                    <Button color="light" onClick={() => modalLista("mod")}>
                        Modificar
                    </Button>
                    {/* ------------  Modificar curso     -----------------  */}
                    {verLista &&
                        <Modal fullscreen isOpen={verLista} toggle={closeModal}>
                            <ModalHeader toggle={modalLista}>
                                <h3>Listado de cursos</h3>
                                <Button onClick={() => actualizar()}>Actualizar</Button>
                            </ModalHeader>
                            <ListadoTabla cursos={cursos} opt={opt} />
                        </Modal>}
                </Col>
            </Row>
        </Container>
    )
}