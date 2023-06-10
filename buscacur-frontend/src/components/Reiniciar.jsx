import React, { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import {
    Row, Col, Card, CardTitle, CardBody, CardText, CardFooter, Button,
    Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input
} from 'reactstrap'
import { restart } from "../utils/apicallsSistema"

export default function Reiniciar({
    isOpen, closeModal}) {
   
    const openModal = () => {
        setIsOpen(true)
    }

    const toggleModal = () => {
        setIsOpen(!isOpen)
        closeModal()
    }

  
    const handleReiniciar = () => {
        restart()
       .then(closeModal())
        }
   
    
    return (

        <Modal xl isOpen={isOpen} toggle={closeModal} >
            <ModalHeader isOpen={isOpen} toggle={closeModal} >
                <h4 >{"Reiniciar sistema"}</h4>
            </ModalHeader>
            <ModalBody>
             
                    
            </ModalBody>
            <ModalFooter>
                {<Button onClick={() => handleReiniciar()}>{'Reiniciar sistema'}</Button>}
            </ModalFooter>
        </Modal>
    )
}