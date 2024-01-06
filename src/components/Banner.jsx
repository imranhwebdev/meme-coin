import {React} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import BlueStarImg from '../assets/img/blue-star.png';
import YellowStarImg from '../assets/img/yellow-star.png';
import heroTopboxshap from '../assets/img/hero-top-box-shap.png';
export default function Banner(){
    const subtitle = "Welcome To";
    const title = "BLONDIE COIN";
    const  bctbBtnTxt = "Buy now";
    const bctbBtnLink = "www.google.com";
    const bannerMiddleContent = "Tired of Doge and Shiba Inu pissing on your leg as you look at your account in the red? That unpleasant stench of failure can linger for months unless treated properly. The only way to neutralize those losses is to scrape for some more money and pour it into Blondie’s coin.";
    const bannerCBT = "Blondie Coin Fair Launch";
    const bannerCBST = "ICO Coming Soon";
    const bannerCBP = "200,966,600,000 BLONDIE COIN";
    const bannerBtns = [
        {
            bBtnTxt: "Buy $BLONDIE",
            bBtnLink: "www.google.com",
        },
        {
            bBtnTxt: "How To Buy $BLONDIE",
            bBtnLink: "www.google.com",
        }
    ]
    return(
        <div className="banner" id='home'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8}>
                        <div className="banner-content">
                            <div className="banner_content_top_box text-center">
                                <span className='d-block'>{subtitle}</span>
                                <h1 className='d-block'>{title} </h1>
                                <a href={bctbBtnLink} className='boxed__btn'>{bctbBtnTxt} <FaArrowRight /> </a>
                                <img src={heroTopboxshap} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-end'>
                    <Col lg='8' className='ml-auto'>
                        <div className="banner_content_middle_box">
                            <p>{bannerMiddleContent}</p>
                        </div>
                    </Col>
                </Row> 
                <Row className='justify-content-center'>
                    <Col lg='9' className='text-center'>
                        <div className="banner_content_bottom_box">
                            <figure className='bluestar'>
                                <img src={BlueStarImg} alt="" />
                            </figure>
                            <figure className='yellowstar'>
                                <img src={YellowStarImg} alt="" />
                            </figure>
                            <h4>{bannerCBT}</h4>
                            <span>{bannerCBST}</span>
                            <p>{bannerCBP}</p>
                            <div className="multi_btns">
                                {bannerBtns.map((bannerBtn, item)=>(
                                    <a key={item} href={bannerBtn.bBtnLink}>{bannerBtn.bBtnTxt}</a>
                                ))}
                            </div>                            
                        </div>
                    </Col>
                </Row>  
            </Container>
        </div>
    )
}
