import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./footer.css"
import footer from "../../assets/footer.png"

const Footer = () => {
  return (
    <div className='footer_main'>
     <Container>
        <Row>
            <Col lg={5}>
              <img src={footer} alt="" className='footer_pic'/>
              <p className='yettss'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
            </Col>
            <Col xs={6} lg={2} md={3} sm={3}>
               <div className='compan'>
                <h5 className='companyyyy'> Company</h5>
                 <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                 </ul>
               </div>
            </Col>
            <Col xs={6} lg={2} md={4}  sm={4}>
             <div className='pros'>
                <h5 className='produtsss'>Product</h5>
                <ul>
                    <li >Invoicing Platform</li>
                    <li>Accounting Plateform</li>
                    <li>Create Proposal</li>
                    <li>Contracts</li>
                   
                </ul>
             </div>
            </Col>
            <Col xs={8} lg={3} md={5}  sm={5}>
               <div className='resr'>
                <h5  className='resoss'> Resources</h5>
                <ul className='last-ul'>
                    <li className='same'>Proposal Template</li>
                    <li className='same'>Invoice Template </li>
                    <li className='same'>Tuturoial </li>
                    <li className='same'>How to write a contract</li>
                </ul>
               </div>
            </Col>
        </Row>
     </Container>
    </div>
  )
}

export default Footer