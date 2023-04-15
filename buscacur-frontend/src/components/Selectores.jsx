import React from "react"
import { Container, CardGroup, Card } from "reactstrap";
import './Selectores.css'

function Selectores() {
    return (
<Container classname="container-fluid selectores">
<CardGroup className="selectores">
        <Card className="selectores">
            <select className="selector" name="tipo" title="Tipo">
                <option value="" selected disabled>-- Tipo --</option>
                <option value="curso">Curso</option>
                <option value="practicas">Prácticas</option>
                <option value="master">Máster</option>
            </select>
        </Card>
        <Card className="selectores">
            <select className="selector" name="tema" title="Tema">
                <option value="" selected>-- Tema --</option>
                <option value="ciencias" >Ciencias</option>
                <option value="ingenierias">Ingenierías</option>
                <option value="artes">Artes</option>
            </select>
        </Card>
        <Card className="selectores">
            <select className="selector" name="contenido" title="Contenido">
                <option value="" selected>-- Contenido --</option>
                <option value="informatica">Informática</option>
                <option value="biologia">Biología</option>
                <option value="música">Máster</option>
            </select>
        </Card>
        <Card className="selectores">
            <select className="selector" name="caracteristicas" title="Características">
                <option value="" selected>-- Característica --</option>
                <option value="online">Online</option>
                <option value="presencial">Presencial</option>
                <option value="híbrido">Híbrido</option>
            </select>
        </Card>
        </CardGroup>
    </Container>)
}
export default Selectores;