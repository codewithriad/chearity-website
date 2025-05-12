import { default as charityIcon, default as donateIcon } from "../../../assets/chiarity.svg";
import author1 from "../../../assets/Testimonials/author-3.jpg";
import SectionBg from '../../../assets/Testimonials/testimonials-bg.png';
import testimonialImage from "../../../assets/Testimonials/testimonials-image.jpg";
import Comments from "./Comments";

const Testimonials = () => {
  return (
    <section className="mt-8 bg-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url(${SectionBg})`
    }}>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-8 lg:px-[24rem] py-6 lg:py-16 w-full">
        {/* image figure */}
        <div className="w-full lg:w-1/2">
          <figure className="w-full h-full relative flex justify-center items-center">
            <img
              src={testimonialImage}
              alt="testimonials"
              className="w-auto h-[32rem] md:h-[35rem] rounded-2xl"
            />
            {/* top right div */}
            <div className="absolute w-24 md:w-32 h-24 md:h-32 rounded-full bg-white top-16 -right-8 md:right-20 lg:right-2 flex justify-center items-center shadow-lg">
              <img src={charityIcon} className="w-8 h-auto" alt="Charity" />
              {/* <p className="text-orange-500 text-base font-bold transform translate rotate-180">Education * Health * Foods * Donate</p> */}
            </div>
            {/* bottom right div */}
            <div className="absolute w-28 md:w-44 h-20 md:h-28 rounded-xl bg-white bottom-8 md:bottom-16 -right-8 md:right-20 lg:-right-2 pl-2 md:pl-4 shadow-lg">
              <h3 className="text-orange-500 text-xl md:text-4xl font-bold pt-2 md:pt-4">20K</h3>
              <p className="text-sm md:text-base text-gray-500 mt-2">Current Review</p>
            </div>
          </figure>
        </div>

        {/* section title div */}
        <div className="w-full lg:w-1/2 mt-20">
          <div className="">
            {/* subtitle of heading */}
            <h3 className="flex justify-start gap-2">
              <img src={donateIcon} alt="chiarityImage" />
              <span className="uppercase text-gray-500 [word-spacing:2px]">
                Testimonials
              </span>
            </h3>

            {/* title of heading */}
            <h2 className="text-3xl lg:text-5xl font-bold my-4">
              What People say about us
            </h2>
          </div>

          <div>
            <Comments
              title={"HM Foysal"}
              about={"Worker, Singapore"}
              text={
                "Working with Team Changuria, I'm honer to them. The team of Jubo Shomaz in Changuria. The blessing with of their hard working for their patients.Working with Team Changuria, I'm honer to them. The team of Jubo Shomaz in Changuria. The blessing with of their hard working for their patients."
              }
              image={author1}
            />
            {/* <Comments
              title={"Syma Islam"}
              about={"Worker, Singapore"}
              text={
                "Working with Team Changuria, I'm honer to them. The team of Jubo Shomaz in Changuria. The blessing with of their hard working for their patients."
              }
              image={author2}
            />
            <Comments
              title={"Farhana Islam"}
              about={"Worker, Singapore"}
              text={
                "Working with Team Changuria, I'm honer to them. The team of Jubo Shomaz in Changuria. The blessing with of their hard working for their patients."
              }
              image={author3}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
