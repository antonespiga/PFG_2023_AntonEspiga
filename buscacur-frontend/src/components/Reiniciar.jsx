import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { restart } from "../utils/apicallsSistema"

export default function Reiniciar({
    isOpen, closeModal}) {
   
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