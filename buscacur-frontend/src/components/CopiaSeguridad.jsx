import React, { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import {
    Row, Col, Card, CardTitle, CardBody, CardText, CardFooter, Button,
    Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input
} from 'reactstrap'
import { crearCopia } from "../utils/apicallsSistema"


export default function CopiaSeguridad({
    isOpen, closeModal}) {
        
    {/*const handleInputChange = (e) => {
        setCurso({ ...curso, [e.target.name]: e.target.value })
    }
*/}
    const [isOpenInfoModal, setIsOpenInfoModal] = useState(false)
    const [msg, setMsg] = useState()
   
    const openInfoModal = () => {
        setIsOpenInfoModal(true)
        
    }

    const toggleInfoModal = () => {
        setIsOpenInfoModal(!isOpenInfoModal)
        closeModal()
    }

    const handleBackup = () => {
        crearCopia()
        .then((res) => {
            setMsg(res.stderr)
            openInfoModal()
            
            })
    }

    return (

        <Modal xl isOpen={isOpen} toggle={closeModal} >
            <ModalHeader isOpen={isOpen} toggle={closeModal} >
                <h4 >{"Copias de seguridad"}</h4>
            </ModalHeader>
            <ModalBody>
              {isOpenInfoModal && 
                <Modal xl isOpen={isOpenInfoModal} toggle={toggleInfoModal}>
                    <ModalHeader isOpen={isOpenInfoModal} toggle={toggleInfoModal}>Info</ModalHeader>
                    <ModalBody>
                        {msg}
                    </ModalBody>
                </Modal>}  
            </ModalBody>
            <ModalFooter>
                {<Button onClick={() => handleBackup()}>{'Crear copia de seguridad'}</Button>}
            </ModalFooter>
        </Modal>
    )
}