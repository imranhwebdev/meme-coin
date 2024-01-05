import {React} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import BlueStarImg from '../assets/img/blue-star.png';
import YellowStarImg from '../assets/img/yellow-star.png';
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
                                <a href={bctbBtnLink}>{bctbBtnTxt} <FaArrowRight /> </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg='8' className='ml-auto'>
                        <div className="banner_content_middle_box">
                            <p>{bannerMiddleContent}</p>
                        </div>
                    </Col>
                    <Col lg='8' className='text-center'>
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
                            {bannerBtns.map((bannerBtn, item)=>(
                                <a key={item} href={bannerBtn.bBtnLink}>{bannerBtn.bBtnTxt}</a>
                            ))}
                            
                        </div>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}
