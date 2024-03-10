import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./banner.css"
import { FaPlayCircle } from "react-icons/fa";
import banner from "../../assets/banner.png"
import oracle from "../../assets/oracle.png"
import monday from "../../assets/monday.png"
import mor from "../../assets/mor.png"
import open from "../../assets/open.png"
import samsung from "../../assets/samsung.png"
import segment from "../../assets/segment.png"

const Banner = () => {
  return (
    <div className='banner_main'>
     <Container>
        <Row>
            <Col lg={6} >
             <h1 className='manag'>Managing business payments has never been easier</h1>
             <p className='end'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
             <div className='banner_end'>
                <a href="" className='gettt'>Get Started</a>
                <a href="" className='ityytt'> <FaPlayCircle className='play'/> See How It Works</a>
             </div>
            </Col>
            <Col lg={6}>
              <img src={banner} alt=""  className=' banner_pic'/>
            </Col>
        </Row>
        <Row className='justify-content-center'>
                <Col lg={7} >
                 <h3 className='over'>Over 32k+ software  businesses growing with AR Shakir</h3>
                </Col>
            </Row>
            <Row>
                <Col lg={2} xs={6} md={4}>
                <img src={open} alt="" className='imhhh'/>
                </Col>
                <Col lg={2}  xs={6} md={4}>
                <img src={oracle} alt="" className='imhhh'/>
                </Col>
                <Col lg={2}  xs={6} md={4}>
                <img src={mor} alt="" className='imhhh'/>
                </Col>
                <Col lg={2}  xs={6} md={4}>
                <img src={samsung} alt="" className='imhhh'/>
                </Col>
                <Col lg={2} xs={6} md={4}>
                <img src={monday} alt="" className='imhhh'/>
                </Col>
                <Col lg={2}  xs={6} md={4}>
                <img src={segment} alt="" className='imhhh'/>
                </Col>
            </Row>
     </Container>
    </div>
  )
}

export default Banner