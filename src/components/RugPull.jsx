import {React} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import RugPullImg from "../assets/img/rug-pull.png";
export default function RugPull(){
    const desc = "I could be the shittiest human and do a rug pull. But why rug pull for a few hundred thousand dollars when we all can go to the moon and be millionaires? All I ask in return for influencing a group of strangers to band together and pump up the most pointless coin of all time so that we can all become rich is to not purchase a ticket for a Blue Origin flight and to donate a minimum of 10% to a charitable organization. You can find a reputable organization to donate to by visiting GiveWell.org, CharityWatch.org and CharityNavigator.org.";

    return(
        <div className="rugpull" id='rugpull'>
            <Container>
                <Row>
                    <Col lg={6}> 
                        <figure className='about_R_I'>
                            <img src={RugPullImg} alt="" />
                        </figure>
                    </Col>
                    <Col lg={6}>
                        <div className="about_content">
                            <SectionTitle title={'a rug pull'}/>
                            <p>{desc}</p>
                        </div>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}
