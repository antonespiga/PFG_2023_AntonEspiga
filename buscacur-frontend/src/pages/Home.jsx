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
              
                {data?.map((curso) => (
                  <List id="lista-inline" type="inline" >
                  <Button id="btn-1" onClick={()=>handleCurso(curso)}><ListInlineItem id="inline-1" key={curso._id} >{curso.nombre}</ListInlineItem></Button>
                  <ListInlineItem id="inline-2" key={curso._id} > {curso.titulo}</ListInlineItem>
                  <ListInlineItem id="inline-3" key={curso._id} >{curso.imparticion}</ListInlineItem>
                  <ListInlineItem id="inline-4" key={curso._id} >{curso.tematica}</ListInlineItem>
                  <ListInlineItem id="inline-5" key={curso._id} >{curso.creditos}</ListInlineItem>
                  <ListInlineItem id="inline-6" key={curso._id} >{curso.director}</ListInlineItem>
                  <ListInlineItem id="inline-7" key={curso._id} >{curso.profesor}</ListInlineItem>
                  { detalle && <FormDetalleCurso
                      
                      isOpen={detalle}
                      closeModal={closeDetalle}
                      curso={selcurso}
                      setCurso={setSelCurso}
                      opt={"ver"}
                      readOnly={true}

                      />}
                  </List>
                

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



