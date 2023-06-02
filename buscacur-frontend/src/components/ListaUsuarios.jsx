import React, { useState, useEffect } from "react"
import { Table, Button, Modal, Card } from 'reactstrap'
import { AiFillPlusSquare, AiFillDelete, AiFillEdit } from "react-icons/ai"
import FormDelUsuario from "./FormDelUsuario"
import FormModUsuario from "./FormModUsuario"
import FormDetalleUsuario from "./FormDetalleUsuario"



export default function ListaUsuarios({ usuarios,  opt }) {

    const [isOpen, setIsOpen] = useState(false)
    const [modalToggle, setModalToggle] = useState(false)
    const [selUsuario, setSelUsuario] = useState()
    const [actUsuarios, setActUsuarios] = useState(usuarios)


    const openModal = (selusuario) => {
        setIsOpen(true)
        setSelUsuario(selusuario)
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
                        <th>Apellido1</th>
                        <th>Apellido2</th>
                        <th>CodPostal</th>
                        <th>Población</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                {usuarios.map((selusuario, _id) => {
                    return (
                        <tr key={_id}>
                            <td>{selusuario.nombre}</td>
                            <td>{selusuario.apellido1}</td>
                            <td>{selusuario.apellido2}</td>
                            <td>{selusuario.codigoPostal}</td>
                            <td>{selusuario.poblacion}</td>
                            <td><Button color="none" onClick={() => openModal(selusuario)}><h5>{opt === "mod" ? <AiFillEdit /> : (opt === "del" ? <AiFillDelete /> : <AiFillPlusSquare />)}</h5></Button></td>

                            {isOpen && (opt === "del") && <FormDelUsuario
                                isOpen={isOpen}
                                closeModal={closeModal}
                                usuario={selUsuario}
                                setUsuario={setSelUsuario}
                                readOnly={true}
                                opt={opt}
                            />}

                            {isOpen && (opt==="mod") && <FormModUsuario
                                isOpen={isOpen}
                                closeModal={closeModal}
                                usuario={selUsuario}
                                setUsuario={setSelUsuario}
                                readOnly={false}
                                opt={opt}
                            />}

                            {isOpen && (opt !== "mod") && (opt !== "del") && <FormDetalleUsuario
                                isOpen={isOpen}
                                closeModal={closeModal}
                                usuario={selUsuario}
                                setUsuario={setUsuario}
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