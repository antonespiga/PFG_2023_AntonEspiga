import React from "react";
import { Card, ListGroup, ListGroupItem,  CardBody, CardTitle, Button } from 'reactstrap'
import Skeleton from '@mui/material/Skeleton'
import '../pages/Home.css'

export default function CardSkeleton() {
    return (
      <Card className='home' id="home">
            <CardBody>
                <div className="course-list-container">
                    {Array.from({ length:6 }).map((_, i) => (
                        <Card key={i} id="course-card">
                            <CardBody>
                                <CardTitle id="course-title">
                                </CardTitle>
                                <ListGroup flush id="course-details" >
                                    <ListGroupItem id="course-details"><strong>Título: </strong><Skeleton variant="rectangular" width={210} height={20} /></ListGroupItem>
                                    <ListGroupItem id="course-details"><strong>Impartición: </strong><Skeleton variant="rectangular" width={210} height={20} /></ListGroupItem>
                                    <ListGroupItem id="course-details"><strong>Temática: </strong><Skeleton variant="rectangular" width={210} height={20} /></ListGroupItem>
                                    <ListGroupItem id="course-details"><strong>Créditos: </strong><Skeleton variant="rectangular" width={210} height={20} /></ListGroupItem>
                                    <ListGroupItem id="course-details"><strong>Director: </strong><Skeleton variant="rectangular" width={210} height={20} /></ListGroupItem>
                                    <ListGroupItem id="course-details"><strong>Profesor: </strong><Skeleton variant="rectangular" width={210} height={20} /></ListGroupItem>
                                </ListGroup>
                                <Button id="details-button" onClick={() => handleCurso(curso)}>
                                    Ver detalle
                                </Button>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </CardBody>
        </Card>
    )
  }
  