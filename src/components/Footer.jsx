import {React} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaTwitter, FaTelegramPlane, FaRedditAlien } from "react-icons/fa";
import Faq from "./Faq";
import footerLogo from '../assets/img/site-logo.svg'
export default function Footer(){
   const footerMenus =  [
    {
        menuItem: 'ROAD Map',
        menuLink: '#roadmap',
    },
    {
        menuItem: 'how to buy',
        menuLink: '#howtobuy',
    },
    {
        menuItem: 'about us',
        menuLink: '#about',
    }
    ];
    const socialIcons = [
        { 
            Icon: <FaTelegramPlane />, 
            link: 'https://t.me/momotoken2100' 
        },
        { 
            Icon: <FaTwitter />, 
            link: 'https://twitter.com/TokenMomo' 
        },
        { 
            Icon: <FaRedditAlien />, 
            link: 'https://solana.com/' 
        },
        // Add more buttons as needed
    ];
    const mailTxt = "faketothemoon@gmail.com";
    const mailLink = "mailto:faketothemoon@gmail.com";
    const currentYear = new Date().getFullYear();
    const copyrightText = `fake @ ${currentYear}. All rights reserved.`;
    return(
        <div className="footer_area">
            <Container>
                <Faq />
                <Row className='footer_top align-items-center'>
                    <Col md={3}>
                        <a href="/">
                            <figure className='footer_logo'>
                                <img src={footerLogo} alt="footer logo" />
                            </figure>
                        </a>
                    </Col>
                    <Col md={6}>
                        <ul className="footer__menu">
                            {footerMenus.map((footerMenu, index)=>(
                                <li key={index} ><a href={footerMenu.menuLink}>{footerMenu.menuItem}</a></li>
                            ))}
                            
                        </ul>
                      

                    </Col>
                    
                    <Col md={3}>
                        <div className="footer__social text-center text-md-end">
                            {socialIcons.map((socialIcon, index) => (
                                <a key={index} href={socialIcon.link} target='_blank'> {socialIcon.Icon} </a>
                            ))}
                        </div>
                       
                    </Col>
                </Row>   
                <Row>
                    <Col>
                        <div className="footer__bottom">
                            <a href={mailLink}>{mailTxt}</a>
                            <p className='copyright text-center text-md-end'>{copyrightText}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}