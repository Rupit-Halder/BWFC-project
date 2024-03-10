import React from 'react'
import "./payment.css"
import {Container,Row,Col} from "react-bootstrap"

const Payment = () => {
  return (
    <div>
      <Container>
        <Row>
            <Col lg={12} className='sadasd' xs={11} md={12}>
                <div className='sadasd'>   
                    <Row>
                    <Col lg={6}>
                     <h5 className='fea12'>OUR FEATURE</h5>
                     <h1 className='re'>Receive payments quickly from anywhere</h1>
                     <p className='wwwss12'>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    </Col>
                    <Col lg={6}>
                     <h5 className='forrr'>Get Started for Free</h5>
                     <div className='input_main'> <input type="text" className='input1' placeholder='Email Address'/> </div>
                     <div className='input_main1'> <input type="text" className='input2' placeholder='Password'/> </div>
                      <div className='getttyy'>
                        <a href="" className='gtee'>Get Started</a>
                      </div>
                    </Col>
                </Row> 
                </div>
               
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Payment