import React from 'react'
import BrandIcon1 from '../assets/img/brand-icon1.png';
import BrandTShap from '../assets/img/brand-top-shap.png';
import BrandBShap from '../assets/img/brand-bottom-shap.png';
import Marquee from "react-fast-marquee";
function MarqueeRap() {
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
  return (
    <div className='marquee__meme__coin'>
        <figure className='m_top_shap'>
            <img src={BrandTShap} alt="" />
        </figure>
        <Marquee direction="left">
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
  )
}

export default MarqueeRap
