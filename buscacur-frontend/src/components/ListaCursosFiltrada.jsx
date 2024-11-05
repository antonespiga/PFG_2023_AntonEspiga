import React, { useState, useEffect, lazy } from "react"
import FormDetalleCurso from "./FormDetalleCurso"
import { Card, ListGroup, ListGroupItem, CardBody, CardTitle, Button } from 'reactstrap'
import { useSearchParams, useLocation } from 'react-router-dom'
import '../components/Header.css'
import { useListaFiltrada } from '../utils/useListaFiltrada'

export default function ListaCursosFiltrada({cursos}) {
    const [detalle, setDetalle] = useState(false)
    const [searchParams] = useSearchParams()
    const [selcurso, setSelCurso] = useState({})
    //const [cursos, setCursos] = useState([])
    //const [offset, setOffset] = useState()
    //const [limit, setLimit] = useState()
    //const currentPage = Number(searchParams.get('page')) || 1;
    const pathname = useLocation().pathname;
    
    //let page = 1;
    const params = new URLSearchParams(searchParams);

    const generateUrl = (pageNumber) => {
        params.delete('page');
        params.set('page', pageNumber);
        return (`${pathname}?${params}`);
    }
    const query = useLocation().search;
       // let offset = ((currentPage - 1) * perPage);
       // let limit = (perPage);
        //const cursos = useListaFiltrada(page)
        const handleCurso = (curso) => {
        setSelCurso(curso)
        setDetalle(true)
    }

    const closeDetalle = () => {
        setDetalle(false)
    }

    return (
        <Card className='home' id="home">
            <CardBody>
                <div className="course-list-container">
                    {cursos.map((curso) => (
                        <Card key={curso._id} id="course-card">
                            <CardBody>
                                <CardTitle id="course-title">
                                    {curso.nombre}
                                </CardTitle>
                                <ListGroup flush id="course-details" >
                                    <ListGroupItem id="course-details"><strong>Título: </strong>{curso.titulo}</ListGroupItem>
                                    <ListGroupItem id="course-details"><strong>Impartición: </strong>{curso.imparticion}</ListGroupItem>
                                    <ListGroupItem id="course-details"><strong>Temática: </strong>{curso.tematica}</ListGroupItem>
                                    <ListGroupItem id="course-details"><strong>Créditos: </strong>{curso.creditos}</ListGroupItem>
                                    <ListGroupItem id="course-details"><strong>Director: </strong>{curso.director}</ListGroupItem>
                                    <ListGroupItem id="course-details"><strong>Profesor: </strong>{curso.profesor}</ListGroupItem>
                                </ListGroup>
                                <Button id="details-button" onClick={() => handleCurso(curso)}>
                                    Ver detalle
                                </Button>
                            </CardBody>
                        </Card>
                    ))}
                    {detalle && <FormDetalleCurso
                        isOpen={detalle}
                        closeModal={closeDetalle}
                        curso={selcurso}
                        setCurso={setSelCurso}
                        opt={"ver"}
                        readOnly={true}
                    />}
                </div>
            </CardBody>

        </Card>)
}