import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./track.css"

const Track = () => {
  return (
    <div className='track_main'>
     <Container>
        <Row>
        <Col lg={12} className='sadasd1'>
                <div className='sadasd2'>   
                    <Row>
                    <Col lg={6}>
                     <h5 className='fea13'>WHY CHOOSE US</h5>
                     <h1 className='reew'>Track your crytpo portfolio on the best way possible</h1>
                     <p className='wwwss123'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize. </p>
                    </Col>
                    <Col lg={6}>
                     <div className='input_main'> <input type="text" className='input12' placeholder='Email Address'/> </div>
                     <div className='input_main1'> <input type="text" className='input23' placeholder='Password'/> </div>
                      <div className='getttyysd'>
                        <a href="" className='gteewda'>Get Started</a>
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

export default Track