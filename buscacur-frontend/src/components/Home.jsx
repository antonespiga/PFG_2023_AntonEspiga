import React from 'react'
import { Container, Row, Col, Card, ListGroup, CardHeader, ListGroupItem,
  Pagination, PaginationItem, PaginationLink, CardFooter } from 'reactstrap'

import './Home.css'

function Home() {

  return (
    <Container className="container-fluid home" >
      <Row>
        <Col >
          <Card className='home'>
            <CardHeader>
              <h1>Listado cursos</h1>
            </CardHeader>
            <ListGroup  className="list-group">
              <ListGroupItem className="list-group-item justify-content-between">Curso 1</ListGroupItem>
              <ListGroupItem className="list-group-item justify-content-between">Curso 2</ListGroupItem>
              <ListGroupItem className="list-group-item justify-content-between">Curso 3</ListGroupItem>
              <ListGroupItem className="list-group-item justify-content-between">Curso 4</ListGroupItem>
              <ListGroupItem className="list-group-item justify-content-between">Curso 5</ListGroupItem>
            </ListGroup>
          <CardFooter>
          <Pagination className='pagination justify-content-center '>
            <PaginationItem className='page-item'>
              <PaginationLink className='page-link'first href="#"/>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                previous
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                next
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                last
              />
            </PaginationItem>
          </Pagination>
          </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home