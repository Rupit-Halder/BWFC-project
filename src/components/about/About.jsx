import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import about from "../../assets/about.png"
import "./about.css"

const About = () => {
  return (
    <div>
     <Container>
        <Row>
            <Col lg={6}>
              <img src={about} alt=""  className='about-pic'/>
            </Col>

            <Col lg={6}>
             <h5 className='fea'>OUR FEATURE</h5>
             <h1 className='resss'>Receive payments quickly from anywhere</h1>
             <p className='wwwss'>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
             <div className='about_end'>
                <a href="" className='seea'>Get Started</a>
             </div>
            </Col>
        </Row>
     </Container>
    </div>
  )
}

export default About