import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./last.css"

const Last = () => {
  return (
    <div className='last-main'>
     <Container>
       <Row>
        <Col lg={6} xs={12} md={12}>
          <p className='copy'>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</p>
        </Col>
        <Col lg={6}  xs={12} md={12}>
           <p className='supportss'>Supported by Microsoft Startup</p>
        </Col>
       </Row>
     </Container>
    </div>
  )
}

export default Last