import React from 'react'
import { useEffect, useState, Suspense } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Home.css'
import CardSkeleton from '../components/CardSkeleton'
import ListaCursosFiltrada from '../components/ListaCursosFiltrada'
import CursosPagination from '../components/CursosPagination'
import { getCursosNumber } from '../utils/apicallsCursos'

export default function Home() {

  const [cursosNumber, setCursosNumber] = useState()
  const [loading, setLoading] = useState(true)
  const PERPAGE = 6;

  useEffect(() => {
    async function fetchCursosNumber() {
      const number = await getCursosNumber();
      setCursosNumber(number)
    }
    fetchCursosNumber()
  },[])

  const totalPages = Math.ceil(cursosNumber / PERPAGE);
  console.log(cursosNumber)
  
  return (
    <Container className="container-fluid home" >
      <Row>
        <Col >
            <Suspense fallback={<CardSkeleton />}>
              <ListaCursosFiltrada />
            </Suspense>
          <CursosPagination totalPages={totalPages} />
        </Col>
      </Row>
    </Container >
  )
}



