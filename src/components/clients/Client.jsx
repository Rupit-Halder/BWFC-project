import React from 'react'
import "./client.css"
import {Container,Row,Col} from "react-bootstrap"
import group from "../../assets/group .png"
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import coma from "../../assets/coma.png"

function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className='rightwss' onClick={onClick}> 
      <div className='active'>  <FaArrowRightLong className='rightarrow'/>  </div>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className='leftess' onClick={onClick}> 
      <div className='active'>  <FaArrowLeftLong className='leftarrow'/> </div>
      </div>
    );
  }

const Client = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='client_main'> 
      <Container>
        <Row>
            <Col lg={5}>
              <h5 className='text'>Testimonials</h5>
              <h1 className='checkss '>Check what our clients are saying</h1>
            </Col>
        </Row>
        <Row>
        <Col lg={6} xs={12}  sm={12} md={12}>
        <Slider {...settings}>  
        <div className='item'>
              <img src={group} alt="" className='w-100'/>
            </div>
            <div className='item'>
              <img src={group} alt="" className='w-100'/>
            </div>
            <div className='item'>
              <img src={group} alt="" className='w-100'/>
            </div>
        </Slider>
        </Col>
        <Col lg={6} xs={12} sm={10} md={12}>
          <div className='comaa_pic'> <img src={coma} alt="" className='comaaaaaa'/></div>
         <h5 className='save'>Save Time Managing Social Media For Your Business</h5>
          <p className='iss'>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>

           <p className='belivvv'> Believing neglected so so allowance existence departure in. In design active temper be uneasy. </p>
           <div className='star'>  <FaStar className='star1'/><FaStar className='star1'/><FaStar className='star1'/><FaStar className='star1'/><FaStar className='star1'/> </div>
           <h5 className='angela'>Angela Taylor</h5>
           <p className='ceo'>CEO SAMSUNG</p>
        </Col>
        </Row>
        <Row>
            <Col lg={12} xs={11} md={10}>
              <div className='resi'> 
               <Row>
                <Col lg={9}>
                  <h1 className='and'> And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</h1>
                </Col>
                <Col lg={3}>
                <div className='getyuio'>
                    <a href="" className='strtssss'>Get Started</a>
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

export default Client

