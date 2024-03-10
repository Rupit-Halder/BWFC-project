import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./linked.css"
import pic1 from "../../assets/Image1.png"
import pic2 from "../../assets/Image2.png"
import pic3 from "../../assets/Image3.png"
import { HiArrowLongRight } from "react-icons/hi2";
import profile from "../../assets/Profile.png"

const Linked = () => {
  return (
    <div className='linked_main'>
        <Container>
            <Row>
                <Col lg={6}>
                   <h5 className='ouree'>Our Feature</h5>
                   <h1 className='allle'>All payments are linked to your Financy account</h1>
                   <p className='whyysss'>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                   <div className='waew'> <a href="" className='getysss'>Get Started</a></div>
                </Col>
                <Col lg={6}>
                    <div className='left'>
                       <h5 className='veri'>100+ Verified Teacher</h5>
                        <div className='pic_main'>
                          <div className='pic1'> <img src={pic1} alt="" /></div>
                          <div className='pic_name'> 
                            <h6 className='ben'>Ben Stokes</h6>
                            <p className='webss'>Mentor of Web Design</p>
                          </div>
                        </div>
                        <div className='pic_main1'>
                          <div className='pic1'> <img src={pic2} alt="" /></div>
                          <div className='pic_name'> 
                            <h6 className='ben'>Hardik Pandya</h6>
                            <p className='webss'>Mentor of Web Design</p>
                          </div>
                        </div>
                        <div className='pic_main2'>
                          <div className='pic1'> <img src={pic3} alt="" /></div>
                          <div className='pic_name'> 
                            <h6 className='ben'>Joe Root</h6>
                            <p className='webss'>Mentor of UI/UX</p>
                          </div>
                        </div>
                        <div className='see'>
                            <a href="" className='moer'>  See More  <HiArrowLongRight className='right_arrow'/></a>
                        </div>
                    </div>
                    <div className='right'>
                       <div className='text-center pt-5'>
                         <img src={profile} alt="" />
                       </div>
                       <div> <h5 className='morne text-center pt-3'>Morne Morkel</h5></div>
                       <p className='mentor text-center'>Mentor of Web Development</p>
                       <div className='contact text-center'> <a href="" className='contact1'> CONTACT</a> </div>
                    </div>
                   
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Linked