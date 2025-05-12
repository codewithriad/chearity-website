/* eslint-disable no-unused-vars */
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import OurProgramBg from "../../../assets/OurProgram/our-program-bg.png";
import donateIcon from "../../../assets/chiarity.svg";
import { ourProgramDb } from "../../../db/OurProgramDb";

export const OurProgram = () => {
  const DBdata = ourProgramDb;
  

  return (
    <section
      className="mt-8 lg:mt-16 px-8 lg:px-96 py-12"
      style={{
        backgroundImage: `linear-gradient(to top, white, transparent), url(${OurProgramBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* div for title */}

      <div className="text-white">
        {/* subtitle of heading */}
        <h3 className="flex justify-center items-center gap-2">
          <img src={donateIcon} alt="chiarityImage" />
          <span className="uppercase  [word-spacing:2px]">Our Program</span>
        </h3>

        {/* title of heading */}
        <h2 className="text-center text-2xl md:text-4xl lg:text-[50px] font-bold my-4 [word-spacing: 1rem]">
          Empowering our programs
        </h2>

        {/* text of heading */}
        <p className="text-center text-sm md:text-base lg:text-base  mx-auto my-4 md:my-10 max-w-full lg:max-w-[60%]">
          Our programs are designed to create sustainable change by addressing
          community needs, empowering individuals, long-term development through
          education
        </p>
      </div>

      {/* cards div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ourProgramDb.map(({ id, image, title, text }) => (
          <div
            key={id}
            className="bg-white p-8 rounded-3xl group text-center shadow-xl"
          >
            <figure className="overflow-hidden rounded-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover duration-300 transform group-hover:scale-110"
              />
            </figure>
            <h2 className="pt-4 text-xl font-bold">{title}</h2>
            <p className="text-base py-4 text-gray-500">{text}</p>

            <Link to={"/"} className="">
              <button className="group/button mt-4 flex items-center gap-2 text-orange-500 font-bold hover:text-zinc-950 transition-all duration-300 mx-auto">
                Read More
                <BsArrowRight className="text-white bg-orange-500 w-6 h-auto p-1 rounded-full transition-transform duration-300 group-hover/button:translate-x-1" />
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* donate as gift */}
      <div className="mt-16">
        <p className="text-slate-500 text-center max-w-full md:max-w-[70%] lg:max-w-[40%] mx-auto">
          Your monthly{" "}
          <span className="text-orange-500 text-base font-bold">
            Gift of $36
          </span>{" "}
          ensures that kids living in poverty have access to life – changing
          benefits
        </p>
      </div>
    </section>
  );
};
