import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./financy.css"
import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import circle from "../../assets/circle.png"
import circle1 from "../../assets/circle2.png"
import circle2 from "../../assets/circle3.png"
import bird from "../../assets/bird.png"


const Financy = () => {
  return (
    <div className='financy-main'>
      <Container>
        <Row>
           <Col lg={5}>
            <h5 className='urs'> OUR FEATURE</h5>
            <h1 className='alsls'> All payments are linked to your Financy account</h1>
            <p className='whysss'> Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
            <div className='under-123'> <a href="" className='sttrtrt'>Get Started</a></div>
           </Col>
           <Col lg={6} lg={{offset:1}}>
             <div className='rectangle'>
                <div className='fast_lane'>
                     <div className='fast_main'> 
                        <div className='picture1'> <img src={one} alt="" /> </div>
                        <div className='pic_name'> <h5 className='number'>+ $28,900</h5>
                          <p className='fromsss'>Received from Michael V</p>
                        </div>
                     </div>
                     </div>
                <div className='fast_lane1'>
                     <div className='fast_main'> 
                        <div className='picture1'> <img src={two} alt="" /> </div>
                        <div className='pic_name'> <h5 className='number'>+ $28,900</h5>
                          <p className='fromsss'>Received from Michael V</p>
                        </div>
                     </div>
                     </div>
                <div className='fast_lane2'>
                     <div className='fast_main'> 
                        <div className='picture1'> <img src={three} alt="" /> </div>
                        <div className='pic_name'> <h5 className='number'>+ $28,900</h5>
                          <p className='fromsss'>Received from Michael V</p>
                        </div>
                     </div>
                     </div>
                     <div className='circle'> <img src={circle} alt="" /></div>
                     <div className='circle1'> <img src={circle1} alt="" /></div>
                     <div className='circle2'> <img src={circle2} alt="" /></div>
                     <div className='bird'> <img src={bird} alt="" className='birds'/></div>
                 </div>
                 
           </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Financy