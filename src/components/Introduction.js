import React from "react"
import {Col, Row} from "react-bootstrap"
import Emoji from "./mini-components/Emoji"
import {Container} from "react-bootstrap"
import FeaturedProject from "../images/featured-project.png"

const ftProjectStyle = {
    maxWidth: '100px',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1rem',
}
export default function Introduction() {
    return(
    <div>
        <Row className="white-bg pt-3 no-gutters">
            <Container>   
                <Col md={5}>
                    <h2 className="display-4"> Hi! I'm Umar </h2><hr/>
                    <p  className="lead"> A CS-majored student who is interested in creating meaningful website, and prefers tea over coffee <Emoji symbol="🍵" /> </p>
                </Col>
            </Container>
        </Row>
        <div className="secondary-bg py-3 text-center">
            <Container>
                <p className="lead">Technologies I've recently worked with</p>
                <Row className="no-gutters">
                    <Col>
                        Tes
                    </Col>
                    <Col>
                        Tes
                    </Col>
                </Row>
            </Container>
        </div>
        <Row className="pt-3 no-gutters">
            <Container>
                <Col md={6}>
                    <img src={FeaturedProject} alt="Feature Projects" style={ftProjectStyle}/>
                    <h1 className="text-center"> WheelOn </h1>
                    <h3 className="text-center"> By WheelOnInThisTogether</h3>
                    <hr />
                    <p> Designed with people with disabilities in mind, WheelOn is a feature-rich platform that help people with mobility problems to travel while engaging with communities around.</p>
                </Col>
            </Container>
        </Row>
    </div>
    )
}