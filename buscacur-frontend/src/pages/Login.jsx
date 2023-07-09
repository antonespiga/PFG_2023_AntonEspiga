import React, { useState } from "react";
import {
    Container, Card, Input, InputGroup, Label, Button, CardTitle, CardBody,
    FormGroup, Form, CardFooter, Alert, Modal, ModalHeader, ModalBody
} from "reactstrap"
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { FaKey, FaUser } from 'react-icons/fa'
import { loginUsuario, verificarToken } from '../utils/apicallsUsuarios'

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [clave, setClave] = useState('')
    const [msg, setMsg] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const handleLogin = (e) => {
        loginUsuario({ email, clave })
            .then((res) => {
                setMsg(res.message)
                checkLogin(res)
            })
    }

    const checkLogin = (res) => {

        if ((res.message === "Login correcto") || (res.message === "Tienes acceso")) {
            sessionStorage.setItem('token', res.token)
        }

        if (sessionStorage.getItem('token')) {
            navigate('/private')
            verificarToken(sessionStorage.getItem('token'))
                .then((response) => {
                    sessionStorage.setItem('id', response.userId)
                    sessionStorage.setItem('rol', response.rol)
                    sessionStorage.setItem('isLogged', true)
                    if (sessionStorage.getItem('rol'))
                        navigate(`/${sessionStorage.getItem('rol')}`)
                    else navigate('/error')
                }
                )
        }
        else if (res.message === "Credenciales incorrectas") { setMsg(<Alert>{res.message}</Alert>) }
        else if (res.message === "No encontrado") { setMsg(<Alert>{res.message}</Alert>) }
    }

    const toggleModal = () => {
        setIsOpen(!isOpen)
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
                                <Input type="password" name="clave" id="clave" placeholder="Introduzca clave"
                                    value={clave} onChange={(e) => setClave(e.target.value)}></Input>
                            </InputGroup>
                        </FormGroup>
                    </Form>
                    <Button id="login-btn" value="Submit" onClick={handleLogin}>Login</Button>
                    {isOpen &&
                        <Modal backdrop={false} isOpen={isOpen} toggle={toggleModal}>
                            <ModalHeader toggle={toggleModal}>
                            </ModalHeader>
                            <ModalBody>
                                <h5 id="h-5">{msg}</h5>
                            </ModalBody>
                        </Modal>}
                </CardBody>
                <CardFooter >
                    <span>¿Estas registrado?</span>
                    <a href="./registro" className="enlace-registro">Registro</a>
                </CardFooter>
                <span>{msg}</span>
            </Card>
        </Container>
    )
}

