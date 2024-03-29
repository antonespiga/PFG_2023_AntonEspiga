import React from "react"
import { Row, Card, CardBody } from 'reactstrap'

import './Footer.css'

import instagramIcon from '/instagram-icon.jpg'
import facebookIcon from '/facebook-icon.png'
import twitterIcon from '/twitter-icon.png'
import xIcon from '/x-social-media-logo-icon.svg'

const imgStyle = {
    height: "25px",
};

export default function Footer() {
    return (

        <Card className="container footer">
            <Row>
                <CardBody >
                    <a href="https://www.instagram.com/uneduniv/" target="_blank" ><img src={instagramIcon} style={imgStyle} alt="instagram" /></a>
                    <a href="https://es-es.facebook.com/UNED.ES/" target="_blank"  ><img src={facebookIcon} style={imgStyle} /></a>
                    <a href="https://twitter.com/UNED" target="_blank" ><img src={xIcon} style={imgStyle} /></a>
                </CardBody>
            </Row>
        </Card>
    )
}

