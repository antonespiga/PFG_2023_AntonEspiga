import React, {useState} from "react";
import { useNavigate, Link } from 'react-router-dom'
import { Container, Form, FormGroup, Input, Label, Col, Row, Card, CardFooter, Button, Alert } from "reactstrap";
import './Registro.css'
import { addUsuario, registroUsuario } from "../utils/apicallsUsuarios";


function Registro() {

    const [ nombre, setNombre ] = useState()
    const [ apellido1, setApellido1] = useState()
    const [ apellido2, setApellido2 ] = useState()
    const [ poblacion, setPoblacion ] = useState()
    const [ codigoPostal, setCodigoPostal ] = useState()
    const [ email, setEmail ] = useState()
    const [ clave, setClave ] = useState()
    const [ titulacion, setTitulacion ] = useState()
    const [ usuario, setUsuario ] = useState(
        {
            nombre, apellido1, apellido2, poblacion, codigoPostal, titulacion, email, clave 
        }
    )
    const [msg, setMsg] = useState('')

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setUsuario({...usuario, [e.target.name]: e.target.value})
    }

    const handleAddUsuario = (usuario) => {
        alert("Enviar formulario, ¿Está seguro?")
        registroUsuario(usuario)
            .then((res) => {
                setMsg(res.message)
                if (res.message === "Registro de usuario") {
                setUsuario({})
                }
                else {setMsg(<Alert>{res.message}</Alert>)}})
                .catch()
    }


    return (
        <Container className="container-fluid">
            <Card className="form-registro">
                <Form>
                    <Row>
                        <Col md="4">
                            <FormGroup >
                                <Label value="Nombre" for="nombre" >Nombre</Label>
                                <Input placeholder="Nombre" name="nombre" value={nombre} onChange={ handleInputChange } ></Input>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <Label value="Apellido1" for="apellido1" >Apellido1</Label>
                                <Input placeholder="Primer apellido" name="apellido1" value={apellido1} onChange={ handleInputChange } ></Input>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <Label value="Apellido2" for="apellido2" >Apellido2</Label>
                                <Input placeholder="Segundo apellido" name="apellido2" value={apellido2} onChange={ handleInputChange } ></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <FormGroup >
                                <Label value="CodPostal" for="codigoPostal" >Código postal</Label>
                                <Input placeholder="Código postal" name="codigoPostal" value={codigoPostal} onChange={ handleInputChange } ></Input>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <Label value="Poblacion" for="poblacion" >Población</Label>
                                <Input placeholder="Población" name="poblacion" value={poblacion} onChange={ handleInputChange } ></Input>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <Label value="Titulacion" for="titulacion" >Titulación</Label>
                                <Input placeholder="Titulación" name="titulacion" value={titulacion} onChange={ handleInputChange } ></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <FormGroup >
                                <Label value="Email" for="email" >Email</Label>
                                <Input type="email"placeholder="Email" name="email" value={email} onChange={ handleInputChange } ></Input>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <Label value="Clave" for="clave" ><span>Clave</span></Label>
                                <Input type="password" placeholder="Clave" name="clave" value={clave} onChange={ handleInputChange } ></Input>
                            </FormGroup>
                        </Col>
                       <h4>{msg}</h4>
                        </Row>
                </Form>
                <CardFooter>
                    <Button className="bton-registro" onClick={ () => handleAddUsuario(usuario) } ><span>Registrar</span></Button>
                    <Link id="link" to="/login">Login</Link>
                </CardFooter>
            </Card>
        </Container>
    )
}

export default Registro