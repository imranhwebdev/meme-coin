import { React } from 'react';
import { Row, Col } from 'react-bootstrap';
import SectionTitleImg from '../assets/img/section_title_shap.png';

export default function SectionTitle({title,des}){
    return(
        <Row>
            <Col lg={10}>
                <div className="section__title">
                    <img src={SectionTitleImg} alt="" />
                    <h2> {title} </h2>
                    <p> {des} </p>
                </div>
            </Col>
        </Row>
    )
}