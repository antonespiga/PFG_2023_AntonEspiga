import React from 'react'

import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, ListGroup, CardHeader, ListGroupItem,
  Pagination, PaginationItem, PaginationLink, CardFooter, CardBody, ListInlineItem, List } from 'reactstrap'
import API from '../utils/api'
import { getCursos } from '../utils/apicallsCursos'
import '../pages/Home.css'


export default function ListaCursos() {
const [data, setData] = useState([])


  const listCursos = () => {
    getCursos()
    .then((response) => {setData(response)})
  }
    useEffect(() => {
      listCursos()
    }, []);
  
  
  

  return (
    <Container className="container-fluid home" >
      <Row>
        <Col >
          <Card className='home'>
            <CardHeader>
              <h1>Listado cursos</h1>
            </CardHeader>
            <CardBody>
              <List className="list-group" >
                {data?.map((curso) => (
                  <List className="list-group-item justify-content-between" key={curso._id}>
                  <ListInlineItem >{curso.nombre}: {curso.titulo},  {curso.imparticion}</ListInlineItem>
                  <ListInlineItem >{curso.nombre}: {curso.titulo},  {curso.imparticion}</ListInlineItem>
                  <ListInlineItem >{curso.nombre}: {curso.titulo},  {curso.imparticion}</ListInlineItem>
                  </List>
                ))}
                
              </List>
            </CardBody>
           
          <CardFooter>
          
          </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

