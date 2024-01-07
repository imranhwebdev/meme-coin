import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import { FaTwitter, FaTelegramPlane  } from "react-icons/fa";
import leftAngle from "../assets/img/just-invest-left-angle.png";
import rightAngle from "../assets/img/just-invest-right-angle.png";
import leftdog from "../assets/img/just-invest-left-dog.png";
import rightdog from "../assets/img/just-invest-right-dog.png";
export default function Jinvest(){
    const desc = "Don’t just invest in Blondie’s coin, spread the <span>word about the Blondie coin</span> so it can moon to unthinkable numbers.";
    
    const btns = [
        {
            txt:'HOW TO BUY',
            link:'https://www.google.com',
        },
        {
            icon:<FaTwitter />,
            link:'https://twitter.com/blondiecoin',
        },
        {
            icon:<FaTelegramPlane />,
            link:'https://t.me/blondiecoin',
        }
    ];
    useEffect(() => {
        AOS.init({
          duration: 1000, // Specify the default animation duration
        });
      }, []);

    return(
        <div className="jinvest" id='jinvest'>
                <figure className='left_angle' data-aos="fade-right">
                    <img src={leftAngle} alt="" />
                </figure>
                <figure className='right_angle' data-aos="fade-left">
                    <img src={rightAngle} alt="" />
                </figure>
            <Container>
                <Row className='justify-content-center align-items-center' data-aos="fade-up">
                    <Col lg={11} className='text-center'>
                        <p dangerouslySetInnerHTML={{ __html:desc }} />
                        <ul className='social_icons mt-5 pt-1'>
                        {btns.map((btn, index) => (
                            <li key={index}>
                                <a target='_blank' href={btn.link}>
                                {btn.icon ? btn.icon : btn.txt}
                                </a>
                            </li>
                        ))}
                        </ul>
                    </Col>
                </Row>   
            </Container>
            <figure className='left_dog'>
                <img src={leftdog} alt="" />
            </figure>
            <figure className='right_dog'>
                <img src={rightdog} alt="" />
            </figure>
        </div>
    )
}
