import React, { useState, useEffect } from "react"
import { Table, Button, Modal, Card } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { AiFillPlusSquare, AiFillDelete, AiFillEdit } from "react-icons/ai"
import FormDelCurso from "./FormDelCurso"
import FormModCurso from "./FormModCurso"
import FormDetalleCurso from "./FormDetalleCurso"



export default function ListadoTabla({ cursos, curso, setCurso, opt }) {

    const [isOpen, setIsOpen] = useState(false)
    const [modalToggle, setModalToggle] = useState(false)
    const [selCurso, setSelCurso] = useState()
    const [actCursos, setActCursos] = useState(cursos)


    const openModal = (selcurso) => {
        setIsOpen(true)
        setCurso(selcurso)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <Card>
            <Table responsive borderless >
                <thead >
                    <tr>
                        <th>Nombre</th>
                        <th>Titulo</th>
                        <th>Tipo</th>
                        <th>Tematica</th>
                        <th>Semestre</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                {cursos.map((selcurso, _id) => {
                    return (
                        <tr key={_id}>
                            <td>{selcurso.nombre}</td>
                            <td>{selcurso.titulo}</td>
                            <td>{selcurso.tipo}</td>
                            <td>{selcurso.tematica}</td>
                            <td>{selcurso.semestre}</td>
                            <td><Button color="none" onClick={() => openModal(selcurso)}><h5>{opt === "mod" ? <AiFillEdit /> : (opt === "del" ? <AiFillDelete /> : <AiFillPlusSquare />)}</h5></Button></td>

                            {isOpen && (opt === "del") && <FormDelCurso
                                isOpen={isOpen}
                                closeModal={closeModal}
                                curso={curso}
                                setCurso={setCurso}
                                readOnly={true}
                                opt={opt}
                            />}

                            {isOpen && (opt === "mod") && <FormModCurso
                                isOpen={isOpen}
                                closeModal={closeModal}
                                curso={curso}
                                setCurso={setCurso}
                                readOnly={false}
                                opt={opt}
                            />}

                            {isOpen && (opt !== "mod") && (opt !== "del") && <FormDetalleCurso
                                isOpen={isOpen}
                                closeModal={closeModal}
                                curso={selCurso}
                                setCurso={setCurso}
                                readOnly={true}
                                opt={opt}
                            />}
                        </tr>
                    )
                })}
            </Table>
        </Card>
    )
}