import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, ListGroup, CardHeader, ListGroupItem, CardFooter, CardBody }
  from 'reactstrap'
import { getCursos } from '../utils/apicallsCursos'
import './Home.css'
import FormDetalleCurso from '../components/FormDetalleCurso'

export default function Home() {
  const [data, setData] = useState([])
  const [detalle, setDetalle] = useState(false)
  const [selcurso, setSelCurso] = useState({})

  const listCursos = () => {
    getCursos()
      .then((response) => { setData(response) })
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
              <h2>Listado de cursos</h2>
            </CardHeader>
            <CardBody>
              <ListGroup id="listgroup" horizontal>
                <ListGroupItem id="btn-1" >Nombre</ListGroupItem>
                <ListGroupItem id="inline-2">Título</ListGroupItem>
                <ListGroupItem id="inline-3">Impartición</ListGroupItem>
                <ListGroupItem id="inline-4">Temática</ListGroupItem>
                <ListGroupItem id="inline-5">Créditos</ListGroupItem>
                <ListGroupItem id="inline-6">Director</ListGroupItem>
                <ListGroupItem id="inline-7">Profesor</ListGroupItem>
              </ListGroup>
              {data?.map((curso) => (
              <Card>
                <ListGroup horizontal id="listgroup" >
                  <ListGroupItem id="btn-1" action active href="#" tag="button" title="Ver detalle" onClick={() => handleCurso(curso)} key={curso._id} >{curso.nombre}</ListGroupItem>
                  <ListGroupItem id="inline-2" action key={curso._id} >{curso.titulo}</ListGroupItem>
                  <ListGroupItem id="inline-3" action key={curso._id} >{curso.imparticion}</ListGroupItem>
                  <ListGroupItem id="inline-4" action key={curso._id} >{curso.tematica}</ListGroupItem>
                  <ListGroupItem id="inline-5" action key={curso._id} >{curso.creditos}</ListGroupItem>
                  <ListGroupItem id="inline-6" action key={curso._id} >{curso.director}</ListGroupItem>
                  <ListGroupItem id="inline-7" action key={curso._id} >{curso.profesor}</ListGroupItem>
                </ListGroup>
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
            </CardBody>
            <CardFooter>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}



