import React from "react";
import educationIcon from '../../../assets/OurFeature/education.png';
import featureImage1 from "../../../assets/OurFeature/featureImage1.jpg";
import featureImage2 from '../../../assets/OurFeature/featureImg2.jpg';
import featureImage3 from '../../../assets/OurFeature/featureImg3.jpg';
import foodBag from '../../../assets/OurFeature/foodsBag.png';
import healthIcon from "../../../assets/OurFeature/health.png";
import { SectionTitleDiv } from "../../../components/Shared/SectionTitleDiv";

const OurFeature = () => {
  const para =
    "Providing essential healthcare services and resources to communities.";
  return (
    <section>
      {/* section title component form shared */}
      <div className="max-w-[80%] lg:max-w-[55%] mx-auto">
        <SectionTitleDiv
          title="Highlights our impactful work"
          subTitle={"our feature"}
          text={
            "Discover the positive change we’ve created through our programs, partnerships, and dedicated efforts. From healthcare and education to environmental sustainability."
          }
        />
      </div>

      {/*============ cards ============*/}

      <div className="mx-8 lg:mx-[20rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


          {/* card 1 */}
          <div className="lg:max-w-80">
            <figure className="">
              <img
                src={featureImage1}
                alt="Feature Image"
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </figure>

            {/*=========== card text ==========*/}
            <div className="mt-8 flex justify-between">
              {/* only text */}
              <div>
                <h2 className="text-5xl text-orange-500 font-bold mb-4">96%</h2>
                <h3 className="mb-2 text-lg font-bold">Healthcare Support</h3>
                <p className="text-base text-gray-500">{para}</p>
              </div>

              {/* only icon */}
              <div>
                <figure className="relative">
                  <img src={healthIcon} alt="Health Icon" className="w-[100px] h-auto" />
                  <div className="absolute bg-orange-500 w-6 h-6 rounded-full bottom-0 left-3 -z-10"></div>
                </figure>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="lg:max-w-80 flex flex-col md:flex-col-reverse justify-center items-center">
            <figure>
              <img
                src={featureImage2}
                alt="Feature Image"
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </figure>

            {/*=========== card text ==========*/}
            <div className="flex justify-between mb-8">
              {/* only text */}
              <div>
                <h2 className="text-5xl text-orange-500 font-bold mb-4">94%</h2>
                <h3 className="mb-2 text-lg font-bold">Education Support</h3>
                <p className="text-base text-gray-500">{para}</p>
              </div>

              {/* only icon */}
              <div>
                <figure className="relative">
                  <img src={educationIcon} alt="Education Icon" className="w-[100px] h-20" />
                  <div className="absolute bg-orange-500 w-6 h-6 rounded-full bottom-0 left-4 -z-10"></div>
                </figure>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="lg:max-w-80">
            <figure className="">
              <img
                src={featureImage3}
                alt="Feature Image"
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </figure>

            {/*=========== card text ==========*/}
            <div className="mt-8 flex justify-between">
              {/* only text */}
              <div>
                <h2 className="text-5xl text-orange-500 font-bold mb-4">96%</h2>
                <h3 className="mb-2 text-lg font-bold">Food Support</h3>
                <p className="text-base text-gray-500">{para}</p>
              </div>

              {/* only icon */}
              <div>
                <figure className="relative">
                  <img src={foodBag} alt="Bag Icon" className="w-[100px] h-auto" />
                  <div className="absolute bg-orange-500 w-6 h-6 rounded-full -bottom-1 left-[14px] -z-10"></div>
                </figure>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
export default OurFeature;
