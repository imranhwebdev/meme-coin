import {React, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
export default function RoadMap(){
    const section_title = "Road mAP";
    const section_desc = "“We are planning to launch a set of 10,000 exclusive NFTs featuring our beloved Daddy Pepe. This digital art collection has been designed by an exclusive NFT artist and will be made available to the community.";
    const services = [
        { 
            title: 'Phase 1', 
            items: [
                "BLONDIE Website Development",
                "Social Release",
                "Fair Launch Fundraising",
                "Presale Marketing",
            ]
        },
        { 
            title: 'Phase 2', 
            items: [
                "Project ICO Conclusion",
                "Fast-track Listings",
                "Massive Influencer Campaigns",
                "Trending On DexTools",
            ]
        },
        { 
            title: 'Phase 3', 
            items: [
                "Strategic Partnerships",
                "Continues Marketing",
                "DEX Listings",
                "CEX Listings",
            ]
        }
      ];

      useEffect(() => {
        AOS.init({
          duration: 1000, // Specify the default animation duration
        });
      }, []);

    return (
        <div className="roadmap_area" id='roadmap' data-aos="fade-up">
            <Container>
                <Row>
                    <Col>
                        <div className="section__title">
                            <h2>{section_title}</h2>
                            <p>{section_desc}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="meme_map_timeline">
                            <ul className='meme_map_t_number'>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="road__map__services">
                            {services.map((service, index) => (
                                <div className="single_service_item" key={index}>
                                    <span>{service.title}</span>
                                    <ul>
                                        {service.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
