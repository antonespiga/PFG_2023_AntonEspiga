import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Alert } from 'reactstrap'
import FormAddCurso from "./FormAddCurso";
import FormDetalleCurso from "./FormDetalleCurso";
import { addCurso, delCurso, modCurso, getCursos } from "../utils/apicallsCursos";
import ListadoTabla from "./ListadoTabla";
import ListaCursos from "./ListaCursos";

export default function MenuCRUDCursos() {

    const [isOpen, setIsOpen] = useState(false)
    const [nombre, setNombre] = useState()
    const [titulo, setTitulo] = useState()
    const [tipo, setTipo] = useState()
    const [tematica, setTematica] = useState()
    const [creditos, setCreditos] = useState()
    const [semestre, setSemestre] = useState()
    const [director, setDirector] = useState()
    const [profesor, setProfesor] = useState()
    const [descripcion, setDescripcion] = useState()
    const [titulosOfertan, setTitulosOfertan] = useState()
    const [imparticion, setImparticion] = useState()
    const [enlace, setEnlace] = useState()
    const [curso, setCurso] = useState({})
    const [read, setRead] = useState(false)
    const [verLista, setVerLista] = useState(false)
    const [cursos, setCursos] = useState()
    const [opt, setOpt] = useState()
    

    useEffect(() =>{
        getCursos()
        .then((res) => setCursos(res))
    },[])

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
                closeModal()})
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
                        opt={opt}
                        handleCurso={handleAddCurso}
                    />}
                </Col>
                <Col>
                    <Button color="light" onClick={() => modalLista("del")}>
                        Eliminar
                    </Button>
{/* ------------  Eliminar curso     -----------------  */}            
                    {verLista && 
                        <Modal fullscreen isOpen={verLista} toggle={closeModal}>
                            <ModalHeader toggle={modalLista}>
                                <h3>Listado de cursos</h3>
                                    <Button style={{ color: "blue" }} onClick={() => actualizar()}>Actualiza</Button>
                            </ModalHeader>
                            <ListadoTabla cursos={cursos}  opt={opt} />
                            <ModalFooter>

                            </ModalFooter>
                        </Modal>}
                </Col>
                <Col>
                    <Button color="light" onClick={()=>modalLista("mod")}>
                        Modificar
                    </Button>
{/* ------------  Modificar curso     -----------------  */} 
                    {verLista && 
                        <Modal fullscreen isOpen={verLista} toggle={closeModal}>
                            <ModalHeader toggle={modalLista}>
                                <h3>Listado de cursos</h3>
                                    <Button onClick={() => actualizar(cursos)}>Actualizar</Button>
                            </ModalHeader>
                            <ListadoTabla cursos={cursos}  setCurso={setCurso} opt={opt} />
                            <ModalFooter>
                                
                            </ModalFooter>
                        </Modal>}
                </Col>
            </Row>
        </Container>
    )
}