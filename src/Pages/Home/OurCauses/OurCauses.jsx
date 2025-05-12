import React from "react";
import bgImage from "../../../assets/OurCauses/bg.png";
import cause1 from "../../../assets/OurCauses/cause1.jpg";
import cause2 from "../../../assets/OurCauses/causes-img-2.jpg";
import cause3 from "../../../assets/OurCauses/causes-img-3.jpg";
import { Card } from "../../../components/Shared/Card";
import { SectionTitleDiv } from "../../../components/Shared/SectionTitleDiv";

const OurCauses = () => {
  return (
    <>
      <section id="our causes" className="mt-0 lg:mt-[8rem] bg-no-repeat bg-cover"
        
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#f8f8f8",
        }}
      >
        <div className="lg:max-w-[75rem] mx-auto px-4 py-16">
          {/* heading of section */}
          <SectionTitleDiv
            subTitle="Our Causes"
            title="Supporting communities causes"
            text="We focus on impactful causes that address urgent community needs, from healthcare and education to food security and for lasting change."
          />

          {/* cards of section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full mx-auto">
            <Card title="Healthcare access" image={cause1} />
            <Card title="Education for all" image={cause2} />
            <Card title="Hunger and food security" image={cause3} />
          </div>
        </div>
      </section>
    </>
  );
};
export default OurCauses;
