import { React } from 'react';
import { Row, Col } from 'react-bootstrap';
import SectionTitleImg from '../assets/img/section_title_shap.png';

export default function SectionTitle({title,des}){
    return(
        <Row>
            <Col lg={12}>
                <div className="section__title">
                    <img src={SectionTitleImg} alt="" />
                    <h3> {title} </h3>
                    <p> {des} </p>
                </div>
            </Col>
        </Row>
    )
}