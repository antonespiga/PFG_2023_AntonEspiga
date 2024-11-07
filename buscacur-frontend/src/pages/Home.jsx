import React, { lazy } from 'react'
import { useEffect, useState, Suspense } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Home.css'
import { useSearchParams, useLocation, Link, Navigate } from 'react-router-dom'
import CardSkeleton from '../components/CardSkeleton'
const ListaCursosFiltrada = lazy(() => (import('../components/ListaCursosFiltrada.jsx')))
import CursosPagination from '../components/CursosPagination'
import { getCursos } from '../utils/apicallsCursos'

export default function Home() {

  const [searchParams] = useSearchParams()
  const [cursos, setCursos] = useState([])
  const PERPAGE = 6;
  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    getCursos()
      .then((response) => setCursos(response))
  }, [currentPage])

  const cursosNumber = cursos.length
  const totalPages = Math.ceil(cursosNumber / PERPAGE);
  let offset = (currentPage - 1) * PERPAGE
  let limit = offset + PERPAGE
  const cursosPaginados = cursos.slice(offset, limit)

  return (
    <Container className="container-fluid home" >
      <Row>
        <Col >
          <Suspense className='loading-overlay' fallback={<CardSkeleton />}>
            <ListaCursosFiltrada cursos={cursosPaginados} />
          </Suspense>
          <CursosPagination totalPages={totalPages} />
        </Col>
      </Row>
    </Container >
  )
}



