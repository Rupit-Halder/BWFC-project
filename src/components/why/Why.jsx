import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./why.css"
import pink from "../../assets/pink.png"
import green from "../../assets/green.png"
import blue from "../../assets/blue.png"
import red from "../../assets/red.png"
import dot from "../../assets/46.png"

const Why = () => {
  return (
    <div className='why_main'>
     <Container>
        <Row>
           <Col lg={12}>
               <div className='main_box'>
                  <Row className='justify-content-center'>
                    <Col lg={4}> 
                      <h5 className='finsnns text-center'>Why Financy</h5>
                      <h1 className='chosse text-center'>Why Choose Us</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={5}  lg={{offset:1}} >
                     <div className='box1'>
                        <div className='flex-11'> 
                            <div className='picss'> <img src={pink} alt="" /> </div> 
                            <div className='pink_text'>
                            <h5 className='nooo'>No Extra Fee</h5>
                            <p className='endss'>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                            </div>
                           
                        </div>
                         </div>
                    </Col>
                    <Col lg={5} >
                     <div className='box2'>
                        <div className='flex-11'> 
                            <div> <img src={green} alt="" /> </div> 
                            <div className='pink_text'>
                            <h5 className='nooo'>No Extra Fee</h5>
                            <p className='endss'>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                            </div>
                        </div>
                         </div>
                    </Col>
                    <Col lg={5} lg={{offset:1}} >
                     <div className='box3'>
                        <div className='flex-11'> 
                            <div> <img src={blue} alt="" /> </div> 
                            <div className='pink_text'>
                            <h5 className='nooo'>No Extra Fee</h5>
                            <p className='endss'>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                            </div>
                        </div>
                         </div>
                    </Col>
                    <Col lg={5} >
                     <div className='box4'>
                        <div className='flex-11'> 
                            <div> <img src={red} alt="" /> </div> 
                            <div className='pink_text'>
                            <h5 className='nooo'>No Extra Fee</h5>
                            <p className='endss'>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                            </div>
                        </div>
                         </div>
                    </Col>
                  </Row>
                  <div className='dot'> <img src={dot} alt="" className='dotsss'/></div>
                  </div>
           </Col>
        </Row>
     </Container>

    </div>
  )
}

export default Why