import Hero from "../../components/HomeComponent/Hero";
import About from "./About/About";
import DonateNow from "./DonateNow/DonateNow";
import LatestPost from "./LatestPost/LatestPost";
import MarqueeScroll from "./Marquee/Marquee";
import OurCauses from "./OurCauses/OurCauses";
import OurFeature from "./OurFeature/OurFeature";
import OurGallery from "./OurGallery/OurGallery";
import { OurProgram } from "./OurProgram/OurProgram";
import { Services } from "./Services/Services";
import OurTeam from "./Team/OurTeam";
import Testimonials from "./Testimonials/Testimonials";
import HowItWork from "./WhatItWork/WhatItWork";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <OurTeam/>
        <WhatWeDo />
        <OurCauses />
        <WhyChooseUs />
        <OurProgram />
        <MarqueeScroll />
        <OurFeature/>
        <DonateNow/>
        <HowItWork/>
        <Testimonials/>
        <OurGallery/>
        <LatestPost/>
      </main>
    </>
  );
};

export default Home;
