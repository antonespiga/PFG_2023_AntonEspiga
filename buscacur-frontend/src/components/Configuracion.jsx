import React, { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import {
    Row, Col, Card, CardTitle, CardBody, CardText, CardFooter, Button,
    Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input
} from 'reactstrap'
import { configurarSistema, getConfig } from "../utils/apicallsSistema"
import config from '../utils/config'


export default function Configuracion({
    isOpen, closeModal}) {
        
   
   
    const [readOnly, setReadOnly] = useState(false)
    const [confData, setConfData] = useState({})
    

    const handleChange = (e) => {
        setBaseurl(e.target.value)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const toggleModal = () => {
        setIsOpen(!isOpen)
        closeModal()
    }

    const handleInputChange = (e) => {
        setConfData({ ...confData, [e.target.name]: e.target.value })
    }

    const handleConfigurar = (configNew) => {
        configurarSistema(configNew)
       .then(closeModal())
        }
   
    useEffect(() => {
        getConfig()
        .then(res => setConfData(res.configData))
    },[])

    return (

        <Modal xl isOpen={isOpen} toggle={closeModal} >
            <ModalHeader isOpen={isOpen} toggle={closeModal} >
                <h4 >{"Configuración"}</h4>
            </ModalHeader>
            <ModalBody>
             
                    <Row>
                    
                    <Col md="8">
                        <FormGroup >
                            <Label style={{ color: "black" }} for="path">Path backups</Label>
                            <Input id="path" name="path" type="text" readOnly={readOnly} placeholder="Path"
                                value={confData.path} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>
                    <Col md="8">
                        <FormGroup >
                            <Label style={{ color: "black" }} className="form-label-color" for="secret" >Clave secreta para token</Label>
                            <Input type="password" name="secret" readOnly={readOnly} id="secret" placeholder="Secreto"
                                value={confData.secret} onChange={handleInputChange}></Input>
                        </FormGroup>
                    </Col>

                    <Col md={8}>
                        <FormGroup >
                            <Label style={{ color: "black" }} for="database" >Database</Label>
                            <Input id="database" name="database" type="text" readOnly={readOnly} placeholder="Database"
                                value={confData.database} onChange={handleInputChange} ></Input>
                        </FormGroup>
                    </Col>
                   
                    </Row>  
                    
            </ModalBody>
            <ModalFooter>
                {<Button onClick={() => handleConfigurar(confData)}>{'Cambiar configuración'}</Button>}
            </ModalFooter>
        </Modal>
    )
}