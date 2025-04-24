import chiarityIcon from "../../../assets/chiarity.svg";
import ticMark from "../../../assets/WhyChooseUs/tic-mark.png";
import image1 from "../../../assets/WhyChooseUs/why-choose-img-1.jpg";
import image2 from "../../../assets/WhyChooseUs/why-choose-img-2.jpg";

export const WhyChooseUs = () => {
  return (
    <section className="mt-8 mx-8 lg:mx-96">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        
        {/* left side image div */}
        <div className="relative w-full lg:w-1/2">
          <figure className="w-[23rem] lg:w-[30rem] h-[23rem] lg:h-[30rem] rounded-full overflow-hidden">
            <img
              src={image1}
              alt="why-choose-us-image"
              className="w-full h-full object-cover"
            />
          </figure>
          {/* absolute position image2 */}
          <div className="absolute -bottom-8 md:-bottom-16 -right-4 md:right-20 w-40 md:w-60 h-40 md:h-60 rounded-full overflow-hidden border border-white">
            <img
              src={image2}
              alt="why-choose-us-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* right text div */}
        <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
          {/* subtitle h3 of section */}
          <h3
            className="text-gray-500 uppercase font-bold flex justify-start items-center gap-2"
            style={{ wordSpacing: ".3rem" }}
          >
            <img src={chiarityIcon} alt="chiarity-Icon" />
            <span>Why Choose us</span>
          </h3>
          {/* h2 title of section */}
          <h2 className="text-2xl md:text-4xl font-bold md:leading-[3.4rem] lg:max-w-[80%] mt-6">
            Why we stand out together
          </h2>

          {/* p tag paragraph of section */}
          <p className="text-sm md:text-base text-gray-400 mt-6">
            Our dedication, transparency, and community-driven approach set us
            apart. partnering with us,programs that create meaningful change.
          </p>

          {/* causes of section */}
          <div>
            {/* div 1 of causes */}
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-2 text-gray-500 mt-6">
              <p className="flex justify-start items-center gap-2">
                <img src={ticMark} alt="tic-mark" className="w-6 h-auto" />
                Community-Centered Approach
              </p>
              <p className="flex justify-start items-center gap-2">
                <img src={ticMark} alt="tic-mark" className="w-6 h-auto" />
                Empowerment Through Partner
              </p>
              <p className="flex justify-start items-center gap-2">
                <img src={ticMark} alt="tic-mark" className="w-6 h-auto" />
                Transparency and Accountability
              </p>
              <p className="flex justify-start items-center gap-2">
                <img src={ticMark} alt="tic-mark" className="w-6 h-auto" />
                Volunteer and Donor Engagement
              </p>
            </div>

            {/* div 2 of causes */}
            {/* <div>
              <p className="mb-4 flex justify-start items-center gap-2">
                <img src={ticMark} alt="tic-mark" className="w-6 h-auto" />
                Transparency and Accountability
              </p>
              <p className="flex justify-start items-center gap-2">
                <img src={ticMark} alt="tic-mark" className="w-6 h-auto" />
                Volunteer and Donor Engagement
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
