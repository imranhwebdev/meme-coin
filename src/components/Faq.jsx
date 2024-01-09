import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
export default function Faq(){
    const accordionData = [
        {
            id:1,
            title:'What is $BLONDIE',
            desc:'Our versatile platform allows users to take advantage of various features to automate their trading journey. Seize fruitful opportunities from newly deployed contracts with high speed and automated sniping strategies.',
        },
        {
            id:2,
            title:'What are the tokenomics ?',
            desc:'75% goes into the Presale, gracefully joining liquidity for a crypto ballet. 10% propels Blondie to the moon, because, well, why not aim high? Another 10% adds a touch of pyrotechnics, getting burned for that extra sizzle. The remaining 5% gets a ticket to the exchange listings – Blondie Coin keeps it simple, just like that.',
        },
        {
            id:3,
            title:'Blondie\'s long-term goals?',
            desc:'Blondie\'s long-term goals? There is only one and only goal, it\'s to treat that deprived sense of failure you feel when Doge decides to take a piss on you. We are turning that account green and delivering 6,000,000% on Blondie baby!',
        },
        {
            id:4,
            title:'When did $BLONDIE COIN launch ?',
            desc:'Blondie Coin is still in the puberty phase, we will update once he hits adulthood. Follow our socials to keep updated with the launch date, or overall stuff you don\'t want to be missing.',
        },
        {
            id:5,
            title:'Is $BLONDIE COIN safe ?',
            desc:'Absolutelizzy. Blondie has gone through KYC, ensuring that any rugs would mean him going behind bars. Oh, I also forgot that we can\'t rug! Why? Our contract is SAFU, hit up the socials for more information.',
        },
        {
            id:6,
            title:'What is the $BLONDIE COIN contract address ?',
            desc:'Our versatile platform allows users to take advantage of various features to automate their trading journey. Seize fruitful opportunities from newly deployed contracts with high speed and automated sniping strategies.',
        },
    ];

    
    useEffect(() => {
        AOS.init({
          duration: 1000, // Specify the default animation duration
        });
      }, []);

    const [activeKey, setActiveKey] = useState(accordionData[0].id.toString());

    const handleAccordionSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };

    const SectionTitle = "FAQ";
    return(
        <div className="faq__area" id='faq' data-aos="fade-up">
            <Container>
                <Row>
                    <Col>
                        <div className="section__title text-center">
                            <h4>{SectionTitle}</h4>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col lg='10'>
                       <div className="faq__wrapper">
                            <Accordion onSelect={handleAccordionSelect} activeKey={activeKey}>
                                {accordionData.map((item) => (
                                    <Accordion.Item key={item.id} eventKey={item.id.toString()}>
                                        <Accordion.Header className={activeKey === item.id.toString() ? 'active' : ''}>
                                            {item.title}
                                        </Accordion.Header>
                                        <Accordion.Body>{item.desc}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
           
        </div>
    )
}
