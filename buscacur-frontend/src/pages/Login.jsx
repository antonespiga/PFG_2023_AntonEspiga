import React, {useState} from "react";
import {
    Container, Row, Col, Card, Input, InputGroup, Label, Button, CardTitle, CardBody,
    FormGroup, Form, CardFooter, Alert, Modal, ModalHeader
} from "reactstrap"
import { useNavigate} from 'react-router-dom'
import './Login.css'
import { FaKey, FaUser} from 'react-icons/fa'
import { loginUsuario } from '../utils/apicallsUsuarios'


export default function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [clave, setClave] = useState()
    const [rol, setRol] = useState()
    const [usuario, setUsuario] = useState()
    const [msg, setMsg] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    
    
    const handleLogin = () => {
            loginUsuario({email, clave})
            .then((response) => { checkLogin(response) })
        }

    const openModal = () => {
        setIsOpen(true)
    }

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const checkLogin = (res) => {
        setMsg(res.message)
        setRol(res.user.rol)
        setUsuario(res.user)
        openModal()

        if(res.message === "Login correcto") {
            sessionStorage.setItem('rol', usuario.rol)
            sessionStorage.setItem('id', usuario._id)
            sessionStorage.setItem('user', usuario)
        }
        
        if(res.user.rol === "socio") navigate('/consultas')
        if(rol === "admin") navigate('/admin')
        
}
    return (
        <Container className="contenedor">
            <Card className="form-login">
                <CardTitle >
                    Login
                </CardTitle>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label>Email</Label>
                            <InputGroup >
                                <span className="input-group-text"><FaUser /></span>
                                <Input type="text" name="email" placeholder="Introduzca email"
                                    value={email} onChange={(e) => setEmail(e.target.value)}> </Input>
                            </InputGroup>
                            <Label>Password</Label>
                            <InputGroup >
                                <span className="input-group-text"><FaKey /></span>
                                <Input type="text" name="clave" id="clave" placeholder="Introduzca clave"
                                value={clave} onChange={(e) => setClave(e.target.value)}></Input>
                                </InputGroup>
                        </FormGroup>
                    </Form>
                    <Button className="login-btn" value="Submit" onClick={ handleLogin }>Login</Button>
                  {isOpen && 
                        <Modal backdrop={false} isOpen={isOpen}  toggle={toggleModal}>
                            <ModalHeader toggle={toggleModal}>
                            </ModalHeader>
                            <h5 id="h-5">{msg}</h5>         
                        </Modal>}  
                </CardBody>
                <CardFooter >
                
                    <span>¿Estas registrado?</span>   
                    <a href="./registro"className="enlace-registro">Registro</a>
                </CardFooter>
            </Card>
        </Container>
    )
}

