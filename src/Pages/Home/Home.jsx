import Hero from "../../components/HomeComponent/Hero";
import About from "./About/About";
import MarqueeScroll from "./Marquee/Marquee";
import OurCauses from "./OurCauses/OurCauses";
import OurFeature from "./OurFeature/OurFeature";
import { OurProgram } from "./OurProgram/OurProgram";
import { Services } from "./Services/Services";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <WhatWeDo />
        <OurCauses />
        <WhyChooseUs />
        <OurProgram />
        <MarqueeScroll />
        <OurFeature/>
      </main>
    </>
  );
};

export default Home;
