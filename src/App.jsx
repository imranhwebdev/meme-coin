import { React } from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import RugPull from './components/RugPull';
import MarqueeRap from './components/marquee';
import Jinvest from './components/Jinvest';
import Tokenomics from './components/Tokenomics';
import Testimonial from './components/Testimonial';
import RoadMap from './components/RoadMap';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <RugPull />
      <MarqueeRap />
      <Jinvest />
      <Tokenomics />
      <Testimonial />
      <RoadMap />
      <HowToBuy />
      <Footer />
    </>
  )
}

export default App
