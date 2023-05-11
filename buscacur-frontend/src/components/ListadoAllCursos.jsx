import React, { useState, useEffect } from "react"
import { Table, Button, Modal, Card } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { AiFillPlusSquare, AiFillDelete, AiFillEdit } from "react-icons/ai"
import FormDelCurso from "./FormDelCurso"
import FormModCurso from "./FormModCurso"
import FormDetalleCurso from "./FormDetalleCurso"
import { getCursos } from '../utils/apicallsCursos'


export default function ListadoAllCursos() {

    const [isOpen, setIsOpen] = useState(false)
    const [modalToggle, setModalToggle] = useState(false)
    const [selCurso, setSelCurso] = useState([])
    const [actCursos, setActCursos] = useState({})
    const [cursos, setCursos] = useState(() => getCursos())

    const openModal = (curso) => {
        setIsOpen(true)
        setSelCurso(curso)
    }

    const closeModal = () => {
        setIsOpen(false)
    }


    useEffect(() => {
        getCursos()
    })


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


                {cursos.map((curso, i) => {
                    return (

                        <tr key={i}>
                            <td>{curso.nombre}</td>
                            <td>{curso.titulo}</td>
                            <td>{curso.tipo}</td>
                            <td>{curso.tematica}</td>
                            <td>{curso.semestre}</td>
                            <td><Button color="none" onClick={() => openModal(curso)}><h5>{opt === "mod" ? <AiFillEdit /> : (opt === "del" ? <AiFillDelete /> : <AiFillPlusSquare />)}</h5></Button></td>



                            {isOpen && (opt === "del") && <FormDelCurso
                                isOpen={isOpen}
                                closeModal={closeModal}
                                curso={selCurso}
                                setCurso={setCurso}
                                readOnly={true}
                                opt={opt}

                            />}

                            {isOpen && (opt === "mod") && <FormModCurso
                                isOpen={isOpen}
                                closeModal={closeModal}
                                curso={selCurso}
                                setCurso={setCurso}
                                readOnly={false}
                                opt={opt}

                            />}

                            {isOpen && (opt !== "mod") && (opt!=="del") && <FormDetalleCurso
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