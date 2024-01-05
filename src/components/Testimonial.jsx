import {React} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
export default function Testimonial(){
    const SectionTitle = 'Reviews';
    const Tesmonials = [
        {
            txt:'Invested my lunch money in BlondieCoin, and now I\'m part of a glorious army of financial jesters. We gather monthly for our ritualistic social media posts, spreading the legend of BlondieCoin. I even convinced my grandma to post in a Reddit thread about knitting — because why not?',
            name:'Jester McInvesto',
        },
        {
            txt:'Bought this mysterious crypto coin, and let me tell you, it\'s like the class clown of my investment portfolio. I checked my balance, and instead of numbers, it showed a bunch of emojis. Thought it was a glitch, but turns out, my money is expressing itself in laughter. Who knew finances could be this amusing?',
            name:'Chuck Chucklesworth',
        },
        {
            txt:'i bought this for my husband, he opened the mail before work & got it everywhere! He hand to change, was late for work & might be getting fired, lol!',
            name:'-Grady Chambers',
        },
    ]

    return(
        <div className="testimonial" id='testimonial'>
            <Container>
                <Row>
                    <Col>
                        <div className="section__title text-center">
                            <h2>{SectionTitle}</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {Tesmonials.map((tesmonial, index)=>(
                        <Col lg={4} key={index}>
                            <p>{tesmonial.txt}</p>
                            <h5>{tesmonial.name}</h5>
                        </Col>
                    ))}
                    
                </Row>   
            </Container>
        </div>
    )
}