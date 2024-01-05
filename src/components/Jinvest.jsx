import {React} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaTwitter, FaTelegramPlane  } from "react-icons/fa";
export default function Jinvest(){
    const desc = "Don’t just invest in Blondie’s coin, spread the <span>word about the Blondie coin</span> so it can moon to unthinkable numbers.";
    
    const btns = [
        {
            txt:'HOW TO BUY',
            link:'https://www.google.com',
        },
        {
            icon:<FaTwitter />,
            link:'https://www.google.com',
        },
        {
            icon:<FaTelegramPlane />,
            link:'https://www.google.com',
        }
    ]

    return(
        <div className="jinvest" id='jinvest'>
            <Container>
                <Row className='justify-content-center align-items-center'>
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
        </div>
    )
}
