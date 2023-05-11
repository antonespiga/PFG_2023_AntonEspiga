import React from 'react'

import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, ListGroup, CardHeader, ListGroupItem,
  Pagination, PaginationItem, PaginationLink, CardFooter, CardBody } from 'reactstrap'
import API from '../utils/api'
import { getCursos } from '../utils/apicallsCursos'
import './Home.css'


export default function Home() {
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
              <ul  className="list-group">
                {data?.map((curso) => (
                  <li key={curso._id} className="list-group-item justify-content-between">{curso.nombre}: {curso.titulo},  {curso.imparticion}</li>
                ))}
                
              </ul>
            </CardBody>
           
          <CardFooter>
          
          </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}



