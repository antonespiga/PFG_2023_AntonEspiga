import React from 'react'
import { Row, Col, Container, Card, CardBody, Alert} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

export default function Error( {error} ) {
    
    return(
       
    <Container>
        <Row>
            <Col >
                <Card>
                    <CardBody>
                        <Alert>
                            <h3>
                            <span>{error}</span>
                            </h3>
                        </Alert>
                    </CardBody>
                </Card>
              </Col>
        </Row>
      </Container>
    )
}