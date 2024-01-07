import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll} from 'react-scroll';
import { FaTwitter, FaTelegramPlane  } from "react-icons/fa";

export default function Header(){ 
    const [fix, setFix] = useState(false)
    function setFixed(){
        if(window.scrollY >= 392){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', setFixed);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', setFixed);
        };
      }, []);

      const SocialIcons = [
        { 
            icon: <FaTwitter />, 
            link: 'https://twitter.com/blondiecoin' 
        },
        { 
            icon: <FaTelegramPlane />, 
            link: 'https://t.me/blondiecoin' 
        },
        // Add more buttons as needed
      ];
    return(
        <header className={fix ? 'heading fixed' : 'heading'}>
            <Container>
                <Navbar collapseOnSelect expand="md">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-between'>
                        <Nav>
                            <Link to="about" spy={true} smooth={true}  offset={fix ? -70 : -70} duration={500}>About</Link>
                            <Link to="roadmap" spy={true} smooth={true}  offset={fix ? -90 : -70} duration={500}>ROADMAP</Link>
                            <Link to="howtobuy" spy={true} smooth={true} offset={fix ? -70 : -50} duration={500}>How to buy</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <ul className='header_socials'>
                        {SocialIcons.map((SocialIcon, Index) => (
                            <li key={Index}>
                                <a href={SocialIcon.link} target='_blank'> {SocialIcon.icon} </a>
                            </li>
                        ))}
                    </ul>
                </Navbar>
                
                    
            </Container>
        </header>
    )
}