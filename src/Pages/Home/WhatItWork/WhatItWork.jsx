import React from "react";
import HowItWorkImage1 from "../../../assets/HowItWorks/how-it-work-img-1-300x252.jpg";
import HowItWorkImage2 from "../../../assets/HowItWorks/how-it-work-img-2-300x252.jpg";
import HowItWorkImage3 from "../../../assets/HowItWorks/how-it-work-img-3-300x252.jpg";
import HowItWorkImage4 from "../../../assets/HowItWorks/how-it-work-img-4-300x252.jpg";
import { SectionTitleDiv } from "../../../components/Shared/SectionTitleDiv";

const HowItWork = () => {
  const para =
    "Provide essential healthcare service and resources to communities.";
  return (
    <section className="w-fit mx-auto mt-12 pb-8">
      {/* shared section title div */}
      <SectionTitleDiv
        title={"Step by step working Process"}
        subTitle={"how it work"}
        text={
          "Our step-by-step process ensures meaningful change: identifying community needs, designing tailored programs, implementing sustainable solutions."
        }
      />

      {/* cards and text */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto w-fit">

        {/* card 1 */}
        <div>
          {/* Image figure */}
          <figure className="w-[300px] h-[254px]">
            <img
              src={HowItWorkImage1}
              className="w-full h-full rounded-2xl"
              alt="how it work image 1"
            />
          </figure>

          {/* text div */}
          <div className="mt-8 flex justify-center items-center flex-col w-[300px] h-[200px] border px-10 rounded-3xl shadow-md text-center">
            <h4 className="text-lg font-bold mt-2">Healthcare And Support</h4>
            <p className="text-base text-gray-500 mt-4">{para}</p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-col-reverse">
          {/* Image figure */}
          <figure className="w-[300px] h-[254px] md:mt-8">
            <img
              src={HowItWorkImage2}
              className="w-full h-full rounded-2xl"
              alt="how it work image 2"
            />
          </figure>

          {/* text div */}
          <div className="mt-8 md:mt-0 flex justify-center items-center flex-col w-[300px] h-[200px] border px-10 rounded-3xl shadow-md text-center">
            <h4 className="text-lg font-bold mt-2">Plan And Design</h4>
            <p className="text-base text-gray-500 mt-4">{para}</p>
          </div>
        </div>

        {/* card 3 */}
        <div>
          {/* Image figure */}
          <figure className="w-[300px] h-[254px]">
            <img
              src={HowItWorkImage3}
              className="w-full h-full rounded-2xl"
              alt="how it work image 3"
            />
          </figure>

          {/* text div */}
          <div className="mt-8 flex justify-center items-center flex-col w-[300px] h-[200px] border px-10 rounded-3xl shadow-md">
            <h4 className="text-lg font-bold mt-2">Implement Solution</h4>
            <p className="text-base text-gray-500 mt-4">{para}</p>
          </div>
        </div>

        {/* card 4 */}
        <div className="flex flex-col md:flex-col-reverse">
          {/* Image figure */}
          <figure className="w-[300px] h-[254px] md:mt-8">
            <img
              src={HowItWorkImage4}
              className="w-full h-full rounded-2xl"
              alt="how it work image 4"
            />
          </figure>
          {/* text div */}
           {/* text div */}
           <div className="mt-8 md:mt-0 flex justify-center items-center flex-col w-[300px] h-[200px] border px-10 rounded-3xl shadow-md text-center">
            <h4 className="text-lg font-bold mt-2">Report And Share</h4>
            <p className="text-base text-gray-500 mt-4">{para}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
