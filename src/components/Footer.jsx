import {React} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaTwitter, FaTelegramPlane, FaRedditAlien } from "react-icons/fa";
import Faq from "./Faq";
import footerLogo from '../assets/img/site-logo.svg';
import footerGrash from '../assets/img/footer-grash.png';
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
            link: 'https://twitter.com/blondiecoin' 
        },
        { 
            Icon: <FaRedditAlien />, 
            link: 'https://solana.com/' 
        },
        // Add more buttons as needed
    ];
    const mailTxt = "blondiecoinofficial@gmail.com";
    const mailLink = "mailto:blondiecoinofficial@gmail.com";
    const currentYear = new Date().getFullYear();
    const copyrightText = `$BLONDIE@ ${currentYear}. All rights reserved.`;
   
    return(
        <div className="footer_area">
            <Container>
                <Faq />
                <Row className='footer_top align-items-center'>
                    <Col lg={3} className='text-center text-lg-start mb-4 mb-lg-0'>
                        <a href="/">
                            <figure className='footer_logo'>
                                <img src={footerLogo} alt="footer logo" />
                            </figure>
                        </a>
                    </Col>
                    <Col lg={6}>
                        <ul className="footer__menu">
                            {footerMenus.map((footerMenu, index)=>(
                                <li key={index} ><a href={footerMenu.menuLink}>{footerMenu.menuItem}</a></li>
                            ))}
                            
                        </ul>
                    </Col>
                    
                    <Col lg={3}>
                        <div className="footer__social text-center text-lg-end mt-4 mt-lg-0">
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
            <figure className="footer__bottom__grash">
                <img src={footerGrash} alt="footer-bg" />
            </figure>
        </div>
    )
}
