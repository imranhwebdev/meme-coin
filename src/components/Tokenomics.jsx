import {React, useState} from 'react';
import ReactApexChart from "react-apexcharts";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from './SectionTitle';
// import tokenomics_top_shap from '../assets/img/tokenomics_shap.png';
import tokenomics_donut_m_img from '../assets/img/donut_middle_content.png';
import copyTxt from '../assets/img/copyTxt.png';
const Tokenomics = () => {
    const donutCommentTxt = "LP tokens are burnt, and contract ownership is renounced. The team's tokens will locked until January 1, 2028";
    const [Area, setArea] = useState({
        series: [75, 10, 10, 5],
        options: {
            colors: ['#9DFB64', '#9DFB64', 'rgba(255, 167, 64, 0.42)', '#F1F333'],
            labels: ['Presale', 'Marketing ', 'Burn', 'CEX'],
            fill: {
              opacity: 1
            },
            states: {
              active: {
                filter: {
                  type: 'none'
                }
              },
              hover: {
                filter: {
                  type: 'none'
                }
              }
            },
            stroke: {
                show: false
              },
            plotOptions: {
                bar: {
                    borderRadius: 150,
                    borderRadiusApplication: "end start", // or  ["end, "start"]
                    borderRadiusWhenStacked: "both",
                  },
              pie: {
                expandOnClick: false,
                customScale: 1,
                donut:{
                  size: '70%',
                    labels:{
                        show:true,
                        total: {
                            show: false,
                            showAlways: true,
                            label: 'TOTAL',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#ADA9B2',                            
                            formatter: function (w) {
                                let valPercent = w.config.series.reduce((a, b) => a + b);
                                return Math.round(valPercent) + "%"
                            }
                          }
                    }
                }
              }
            },
            legend: {
              show: false,
              position: 'bottom',
              formatter: function (val, opts) {
                return opts.w.config.series[opts.seriesIndex] + '%'
              },
              labels: {
                colors: "#9EACC9"
              },
              onItemHover: {
                highlightDataSeries: false
              },
            },
            dataLabels: {
              enabled: false
            },
            tooltip: {
              y: {
                formatter: function(value) {
                  return value + '%';
                }
              }
            }
          },
    });

    const [textToCopy, setTextToCopy] = useState('00x8F4E64d92ADc4');
    const [isCopied, setIsCopied] = useState(false);
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            setIsCopied(true);
          })
          .catch(err => {
            console.error('Failed to copy to clipboard: ', err);
          });
      };

      const tokenomicsLists = [
        {
            title: "Token Name: <span>$BLONDIE</span>"
        },
        {
            title: "Symbol: <span>$BLONDIE</span>"
        },
        {
            title: "<span>5%</span> TAX"
        },
        {
            title: "<span>4%</span> MARKETING, <span>1%</span> BURN"
        },
      ]
    return(
        <div className="tokenomics" id='tokenomics'>
          {/* <figure className='tokenomics_top_shap'>
            <img src={tokenomics_top_shap} alt="" />
          </figure> */}
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <SectionTitle title={'tokenomics'} />
                        <div className="tokenomics__left__list">
                            <ul>
                                {tokenomicsLists.map((tokenomicsList, index)=>(
                                    <li key={index} dangerouslySetInnerHTML={{ __html: tokenomicsList.title }} />
                                ))}
                                <li>
                                    <div className="tokenomics_copyTxt copytoclipboard">
                                       <span className='c_title'>Contract Address:</span> <input readOnly type="text"  value={textToCopy}
                                            onChange={(e) => setTextToCopy(e.target.value)}/>

                                        <button onClick={handleCopyToClipboard}> {isCopied && <span className='coppied'> 
                                            <span className='copyed'>Copyed</span> </span>} <img src={copyTxt}/>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="chart__area">
                            <div className="meme_coin_donut_chart">
                                <figure className='donut_m_img'>
                                    <img src={tokenomics_donut_m_img} alt="donut middle img" />
                                </figure>
                                <ReactApexChart options={Area.options} series={Area.series} type="donut" />
                            </div>

                            <div className="tokencharts-list">
                                <ul className='text-center'>
                                    {
                                        Area.series.map((el, i) => {
                                            return(
                                                <li key={i} className="d-inline-block">
                                                    <div className="d-flex align-items-center">
                                                        <div className="dot" style={{backgroundColor: Area.options.colors[i]}}></div>
                                                        <div><strong className="fw-bold">{el + '%'}</strong></div>
                                                        <div className="content">{Area.options.labels[i]}</div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Tokenomics;