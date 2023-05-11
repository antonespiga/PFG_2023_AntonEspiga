import React from "react"
import { Container, Row, Col, Card, CardBody } from 'reactstrap'

import './Footer.css'

import instagramIcon from '/instagram-icon.jpg'
import facebookIcon from '/facebook-icon.png'
import twitterIcon from '/twitter-icon.png'

const imgStyle = {
    height: "25px",
};

export default function Footer() {
    return (


        <Card className="container footer">
            <Row>
                <CardBody >
                    <a href="#" ><img src={instagramIcon} style={imgStyle} alt="instagram" /></a>
                    <a href="#" ><img src={facebookIcon} style={imgStyle} /></a>
                    <a href="#"><img src={twitterIcon} style={imgStyle} /></a>
                </CardBody>
            </Row>
        </Card>



    )
}

