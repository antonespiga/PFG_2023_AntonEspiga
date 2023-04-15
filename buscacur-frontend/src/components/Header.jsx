import React from "react"
import { Container, Row, Col, Card, Button} from 'reactstrap'

import './Header.css'
import LogoUned from '/LogoUNED.jpg'

function Header() {

    return (
    <Container className="header sticky-top">
       
        <Col  className="cabecera-logo">
            <img className="logo" src={LogoUned}/>
        </Col>
        <Col  className="cabecera-texto">
            <h1>Cabecera de la página..........</h1>
        </Col>
        <Col className="menu" >
            <div  outline className="menu">
                <input type="checkbox" id="menu-hamburger"/>
                    <label for="menu-hamburger" id="expand-btn">&#9776;</label>
                    <label for="menu-hamburger" id="no-expand-btn">&#10006;</label>
                    <div class="expandable">
                        <button class="expandable" href="#">Registro</button>
                        <button class="expandable" href="#">Login</button>
                    </div>
            </div>
        </Col>
    </Container>   
    
    )
}

export default Header