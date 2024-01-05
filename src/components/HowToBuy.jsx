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
            desc: "Download Phantom or your preferred solana wallet for free from the App Store or Google Play Store. If you're using a desktop, get the Google Chrome extension by visiting phantom.app",
            logo: htbSL1,
        },
        { 
            title: "Set Up Your Wallet",
            desc: "Ensure there's some Sol in your wallet to exchange for $Momo. If you don't have any Sol , you can either buy it directly on exchange and transfer it to your wallet.",
            logo: htbSL2,
        },
        { 
            title: "Set Up Your Wallet",
            desc: "Connect to Raydium. Visit raydium.io in your Google Chrome browser or within your Phantom app's browser. Connect your wallet, paste the $Momo token address (2J4sFeo4HXXqmkcpbUj5wHbb1s4dv4oxJVos8ktVYQS4) into Raydium, select $Momo, and confirm the transaction. When prompted by Phantom for a wallet signature, proceed with the signature.",
            logo: htbSL3,
        },
        { 
            title: "Set Up Your Wallet",
            desc: "Switch your Sol for $Momo. We have 0 taxes, so you don't need to worry about a specific slippage rate. However, during times of market volatility, you may need to adjust the slippage settings as necessary.",
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
