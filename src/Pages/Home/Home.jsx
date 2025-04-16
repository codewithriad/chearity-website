import Hero from "../../components/HomeComponent/Hero";
import About from "./About/About";
import { Services } from "./Services/Services";
const Home = () => {
  return (
    <>
      <main>
        <Hero/>
        <About/>
        <Services/>

         
        {/* <WhatWeDo />
        <OurCouses />
        <Feature />
        <DonateUs />
        <HowItWorks />
        <Testimonials />
        <Gallary />
        <LatestPost /> */}
   
       
      </main>
    </>
  );
};

export default Home;
