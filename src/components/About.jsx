import {React, useEffect} from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import AboutRI from "../assets/img/about_us_right_img.png";
import SocialIcon1 from "../assets/img/twitter.svg";
import SocialIcon2 from "../assets/img/tlegram.svg";
import SocialIcon3 from "../assets/img/descord.svg";
import SocialIcon4 from "../assets/img/socialicon4.svg";
import SocialIcon5 from "../assets/img/socialicon5.svg";
import SocialIcon6 from "../assets/img/socialicon6.svg";
import SocialIcon7 from "../assets/img/socialicon7.svg";
export default function About(){
    const desc = "Imagine if hundreds of thousands of idiots decided to invest just $5 into Blondie’s coin. Now picture if those same fools opted to post on their social media profiles once a month about this pointless coin. How about half of the investors create one post on Reddit to generate a buzz. Let’s half that half and have those people post comments in random subreddits. Now let’s circle back around to the hundreds of thousands of investors and have them message crypto, tech and financial journalists to encourage them to write a story about the Blondie coin. Then sit back and watch OUR coin gain over 6,000,000% and deliver jaw-dropping returns";

    const SocialIcons = [
        {
            icon: SocialIcon1,
            link: "https://twitter.com/blondiecoin",
        },
        {
            icon: SocialIcon2,
            link: "https://t.me/blondiecoin",
        },
        {
            icon: SocialIcon6,
            link: "https://coinmarketcap.com/",
        },
        {
            icon: SocialIcon7,
            link: "https://coingecko.com/",
        },
        {
            icon: SocialIcon4,
            link: "https://bscscan.com/",
        },
    ];
    useEffect(() => {
        AOS.init({
          duration: 1000, // Specify the default animation duration
        });
      }, []);

    return(
        <div className="about" id='about'>
            <Container data-aos="fade-up">
                <SectionTitle title={'ABOUT US'}/>
                <Row>
                    <Col xxl={9} xl={8} lg={7}>
                        <div className="about_content" >
                            <p>{desc}</p>
                            <ul className='social_icons mt-5 pt-1'>
                                {SocialIcons.map((SocialIcon, Index)=>(
                                    <li key={Index}><a target='_blank' href={SocialIcon.link}><img src={SocialIcon.icon} alt="" /></a></li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>   
            </Container>
            <figure className='about_R_I' data-aos="fade-left">
                <img src={AboutRI} alt="" />
            </figure>
        </div>
    )
}
