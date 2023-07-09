import React, { useState } from "react";
import { Container, Row, Col, Button } from 'reactstrap'
import Configuracion from "./Configuracion";
import Reiniciar from './Reiniciar'

export default function MenuSistema() {
    const [isOpenConf, setIsOpenConf] = useState(false)
    const [isOpenReiniciar, setIsOpenReiniciar] = useState(false)

    const closeConf = () =>{
        setIsOpenConf(false)
    }

    const handleConfigurar = () => {
    setIsOpenConf(true)   
    }

    const handleReiniciar = () => {
        setIsOpenReiniciar(true)   
        }

        const closeReiniciar = () =>{
            setIsOpenReiniciar(false)
        }

    return (
    <Container id="panelSistema">
        <Row>
            <Col>
                <Button onClick={handleConfigurar} color="light">
                    Configurar sistema 
                </Button>

                { isOpenConf && <Configuracion
                    isOpen={isOpenConf}
                    closeModal={closeConf} />}
            </Col>
            <Col>
                <Button onClick={handleReiniciar} color="light">
                    Reinstalar sistema
                </Button>
                
                { isOpenReiniciar && <Reiniciar
                 isOpen={isOpenReiniciar}
                 closeModal={closeReiniciar} />}
            </Col>
        </Row>
    </Container>
    )
}