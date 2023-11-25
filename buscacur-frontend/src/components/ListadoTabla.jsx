import React, { useState } from "react"
import { Table, Button, Card, CardBody } from 'reactstrap'
import { AiFillPlusSquare, AiFillDelete, AiFillEdit } from "react-icons/ai"
import FormDelCurso from "./FormDelCurso"
import FormModCurso from "./FormModCurso"
import FormDetalleCurso from "./FormDetalleCurso"
import './ListadoTabla.css'
export default function ListadoTabla({ cursos, opt }) {

    const [isOpen, setIsOpen] = useState(false)
    const [selCurso, setSelCurso] = useState()

    const openModal = (selcurso) => {
        setIsOpen(true)
        setSelCurso(selcurso)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <Card>
            <CardBody>
            <Table id="tabla-cursos" striped responsive borderless >
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
                            <td width="25%" >{selcurso.nombre}</td>
                            <td width="25%">{selcurso.titulo}</td>
                            <td width="10%">{selcurso.tipo}</td>
                            <td width="25%">{selcurso.tematica}</td>
                            <td width="10%">{selcurso.semestre}</td>
                            <td><Button color="none" onClick={() =>
                                openModal(selcurso)}>
                                <h5>
                                    {opt === "mod" ?
                                        <AiFillEdit /> : (opt === "del" ?
                                            <AiFillDelete /> : <AiFillPlusSquare />)}
                                </h5>
                                </Button>
                            </td>

                            
                        </tr>
                    )
                })}
            </Table>
            {isOpen && (opt === "del") && <FormDelCurso
                                isOpen={isOpen}
                                closeModal={closeModal}
                                curso={selCurso}
                                setCurso={setSelCurso}
                                readOnly={true}
                                opt={opt}
                            />}

                            {isOpen && (opt === "mod") && <FormModCurso
                                isOpen={isOpen}
                                closeModal={closeModal}
                                curso={selCurso}
                                setCurso={setSelCurso}
                                readOnly={false}
                                opt={opt}
                            />}

                            {isOpen && (opt === 'ver') && <FormDetalleCurso
                                isOpen={isOpen}
                                closeModal={closeModal}
                                curso={selCurso}
                                setCurso={setSelCurso}
                                readOnly={true}
                                opt={'ver'}
                            />}
            </CardBody>
        </Card>
    )
}