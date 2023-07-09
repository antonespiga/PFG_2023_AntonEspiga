import React, { useState } from "react"
import {
    Row, Col, Card, CardTitle, CardBody, CardText, CardFooter, Button,
} from 'reactstrap'
import { AiFillPlusSquare } from "react-icons/ai"
import FormDetalleCurso from "./FormDetalleCurso"

export default function ListadoCards({ cursos }) {

    const [isOpen, setIsOpen] = useState(false)
    const [selCurso, setSelCurso] = useState([])

    const openModal = (curso) => {
        setIsOpen(true)
        setSelCurso(curso)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <Row>
            {cursos.map((curso, i) => {
                return (
                    <Col md="3">
                        <Card key={i} style={{ card: "word-wrap-none" }} id="card-curso">
                            <CardTitle id="ttl-1">
                                {curso.nombre}
                            </CardTitle>
                            <CardBody>
                                <CardText><strong >Temática:  </strong>
                                    {curso.tematica}
                                </CardText>
                                <CardText><strong>Créditos:  </strong>
                                    {curso.creditos}
                                </CardText>
                                <CardText><strong>Semestre:  </strong>
                                    {curso.semestre}
                                </CardText>
                            </CardBody>
                            <CardFooter id="c-footer">
                                <Button color="none" onClick={() => openModal(curso)} >
                                    <h2><AiFillPlusSquare id="" /></h2>
                                </Button>
                            </CardFooter>

                            {isOpen && <FormDetalleCurso
                                isOpen={isOpen}
                                closeModal={closeModal}
                                curso={selCurso}
                                setCurso={setSelCurso}
                                readOnly="true"
                                handleAddCurso
                                handleDelCurso
                                handleModCurso
                                handleInputChange />}
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}