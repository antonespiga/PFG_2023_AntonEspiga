import React from 'react'

import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, ListGroup, CardHeader, ListGroupItem, Button,
  Pagination, PaginationItem, PaginationLink, CardFooter, CardBody, List, ListInlineItem } from 'reactstrap'
import {Link} from 'react-router-dom'
import API from '../utils/api'
import { getCursos } from '../utils/apicallsCursos'
import './Home.css'
import FormDetalleCurso from '../components/FormDetalleCurso'


export default function Home() {
const [data, setData] = useState([])
const [detalle, setDetalle] = useState(false)
const [selcurso, setSelCurso] = useState({})

  const listCursos = () => {
    getCursos()
    .then((response) => {setData(response)})
  }
    useEffect(() => {
      listCursos()
    }, []);
  
  const handleCurso = (curso) => {
    setSelCurso(curso)
    setDetalle(true)
  }

  const closeDetalle = () => {
    setDetalle(false)
  }
  

  return (
    <Container className="container-fluid home" >
      <Row>
        <Col >
          <Card className='home'>
            <CardHeader>
              <h1>Listado cursos</h1>
              
              
            </CardHeader>
            <CardBody>
            <ListGroup id="listgroup" horizontal>
                <ListGroupItem id="listgrouptitle" >Nombre</ListGroupItem>
                <ListGroupItem id="listgrouptitle">Título</ListGroupItem>
                <ListGroupItem id="listgrouptitle">Impartición</ListGroupItem>
                <ListGroupItem id="listgrouptitle">Temática</ListGroupItem>
                <ListGroupItem id="listgrouptitle">Créditos</ListGroupItem>
                <ListGroupItem id="listgrouptitle">Director</ListGroupItem>
                <ListGroupItem id="listgrouptitle">Profesor</ListGroupItem>
              </ListGroup>
                {data?.map((curso) => (
                 
                  <ListGroup horizontal id="listgroup" >
                    <ListGroupItem id="btn-1" action active href="#" tag="button" title="Ver detalle" onClick={()=>handleCurso(curso)} key={curso._id} >{curso.nombre}</ListGroupItem>
                    <ListGroupItem id="inline-2" action key={curso._id} >{curso.titulo}</ListGroupItem>
                    <ListGroupItem id="inline-3" action key={curso._id} >{curso.imparticion}</ListGroupItem>
                    <ListGroupItem id="inline-4" action key={curso._id} >{curso.tematica}</ListGroupItem>
                    <ListGroupItem id="inline-5" action key={curso._id} >{curso.creditos}</ListGroupItem>
                    <ListGroupItem id="inline-6" action key={curso._id} >{curso.director}</ListGroupItem>
                    <ListGroupItem id="inline-7" action key={curso._id} >{curso.profesor}</ListGroupItem>
                  
                  
                  
                  { detalle && <FormDetalleCurso
                      
                      isOpen={detalle}
                      closeModal={closeDetalle}
                      curso={selcurso}
                      setCurso={setSelCurso}
                      opt={"ver"}
                      readOnly={true}

                      />}
                      </ListGroup>
                 
                

                ))}
                
              
            </CardBody>
           
          <CardFooter>
          
          </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}



