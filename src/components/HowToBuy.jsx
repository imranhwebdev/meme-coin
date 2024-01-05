import {React, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandIcon1 from '../assets/img/brand-icon1.png';
import BrandTShap from '../assets/img/brand-top-shap.png';
import BrandBShap from '../assets/img/brand-bottom-shap.png';
import Marquee from "react-fast-marquee";
import htbSL1 from "../assets/img/wallet.png";
import htbSL2 from "../assets/img/bsc.png";
import htbSL3 from "../assets/img/pancakeswap.png";
import htbSL4 from "../assets/img/blondie.png";
import htbRightImg from "../assets/img/swap-right-img.png";
import SwapTopShap from "../assets/img/swap-top-shap.png";
import SwapBottomShap from "../assets/img/swap-bottom-shap.png";
import SectionTitle from './SectionTitle';

export default function HowToBuy(){
    const title = "HOW <span>TO BUY</span>";
    const desc = "Ready to own some Momo tokens? Follow these straightforward steps to purchase your Momo tokens and join the Momo community";
    const htbServices = [
        { 
            title: "Set Up Your Wallet",
            desc: "Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome exten sion by going to metamask.io.",
            logo: htbSL1,
        },
        { 
            title: "Set Up Your Wallet",
            desc: "Have BSC in your wallet to switch to $BLONDIE. If you don't have any BSC, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
            logo: htbSL2,
        },
        { 
            title: "Set Up Your Wallet",
            desc: "Connect to Pancakeswap. Go to https://pancakeswap.finance/swap in google chrome or on the browser inside your metamask app. Connect your wallet. Paste the $blondie coin",
            logo: htbSL3,
        },
        { 
            title: "Set Up Your Wallet",
            desc: "Switch BSC for $BLONDIE. We a low 5% tax implemented so you don't need to worry about buying with a huge slippage, although you may need to use higher slippage during times of market volatility.",
            logo: htbSL4,
        },
        // Add more buttons as needed
      ];

      const marqueeImgs = [
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
        {
            image: BrandIcon1,
            alt: "Description for the image",
        },
    ];
    return(
        <div className="howtobuy" id='howtobuy'>
            <Container>
                <SectionTitle title={'how to buy?'}/>  
                <Row>
                    {htbServices.map((htbService, index) => (
                        <Col md='6' lg='3' key={index}>
                            <div className="single__service_item text-center">
                                <figure className="htb_s_l">
                                    <img src={htbService.logo} alt="how to buy single service logo" />
                                </figure>
                                <h6>{htbService.title}</h6>
                                <p>{htbService.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className='swap_area'>
                    <Col lg={6}>
                        <div className="htb_iframe">
                            <figure className='s_top_shap'>
                                <img src={SwapTopShap} alt="" />
                            </figure>
                            <iframe src=""></iframe>
                            <figure className='s_bottom_shap'>
                                <img src={SwapBottomShap} alt="" />
                            </figure>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="htb_right_img">
                <img src={htbRightImg} alt="" />
            </div>

            <div className='marquee__meme__coin'>
                <figure className='m_top_shap'>
                    <img src={BrandTShap} alt="" />
                </figure>
                <Marquee direction="right">
                    {marqueeImgs.map((marqueeImg, index) => (
                        <figure key={index}>
                            <img src={marqueeImg.image} alt={marqueeImg.alt} />
                        </figure>
                    ))}
                </Marquee>
                <figure className='m_bottom_shap'>
                    <img src={BrandBShap} alt="" />
                </figure>
            </div>
        </div>
    )
}
