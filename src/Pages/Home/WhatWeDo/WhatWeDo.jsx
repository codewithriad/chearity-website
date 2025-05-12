/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import chiarityImage from "../../../assets/chiarity.svg";
import cleanWater from "../../../assets/what-we-do/clean-water.png";
import donateIcon from "../../../assets/what-we-do/donate.png";
import economicEmpowerment from "../../../assets/what-we-do/economic-empower.png";
import housingShelter from "../../../assets/what-we-do/house-sign.png";
import WhatWeDoImage1 from "../../../assets/what-we-do/what-we-do-image-1.jpg";
import WhatWeDoImage2 from "../../../assets/what-we-do/what-we-do-image-2.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const WhatWeDo = () => {
  return (
    <motion.section
      id="what we do"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Services cards and images */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col lg:flex-row justify-center items-center"
      >
        {/* left card section */}
        <div className="w-full lg:max-w-fit">
          {/* section title */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto text-center lg:mx-0 lg:text-left"
          >
            <h3 className="flex items-center gap-2 justify-center lg:justify-start">
              <img src={chiarityImage} alt="chiarityImage" />
              <span className="uppercase text-gray-500 [word-spacing:2px]">
                what we do
              </span>
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl lg:leading-tight font-bold my-8">
              Building hope creating lasting change
            </h2>
          </motion.div>

          {/* Service 1 */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4 transition-shadow duration-300 mb-8"
          >
            <div className="relative mb-4">
              <img
                src={economicEmpowerment}
                alt="economic-image"
                className="w-20 h-auto"
              />
              <div className="absolute bottom-0 w-4 md:w-7 h-4 md:h-7 bg-orange-500 rounded-full -z-10 left-[10px] md:left-5 lg:left-6 translate-x-0 translate-y-0"></div>
            </div>

            {/* div text */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
                Economic Empowerment
              </h3>
              <p className="text-sm lg:text-base text-gray-600 mb-2 max-w-full lg:max-w-[55%]">
                Empowering individuals through job training, financial literacy,
                and small business support to create sustainable livelihoods.
              </p>
              <Link to="/what-we-do/economic-empowerment">
                <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors duration-300">
                  Read More
                  <BsArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 transition-shadow duration-300 mb-8"
          >
            <div className="relative mb-4">
              <img src={cleanWater} alt="cleanWater" className="w-20 h-auto" />
              <div className="absolute bottom-0 w-4 md:w-7 h-4 md:h-7 bg-orange-500 rounded-full -z-10 left-[10px] md:left-5 lg:left-6 translate-x-0 translate-y-0"></div>
            </div>

            {/* div text */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
                Clean Water and Sanitation
              </h3>
              <p className="text-sm lg:text-base text-gray-600 mb-2 max-w-full lg:max-w-[55%]">
                Providing access to clean water and sanitation facilities to
                improve health and quality of life in undeserved communities.
              </p>
              <Link to="/">
                <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors duration-300">
                  Read More
                  <BsArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 transition-shadow duration-300"
          >
            <div className="relative mb-4">
              <img
                src={housingShelter}
                alt="house-shelter-icon"
                className="w-20 h-auto"
              />
              <div className="absolute bottom-0 w-4 md:w-7 h-4 md:h-7 bg-orange-500 rounded-full -z-10 left-[10px] md:left-6 translate-x-0 translate-y-0"></div>
            </div>

            {/* div text */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                Housing and Shelter Initiatives
              </h3>
              <p className="text-sm lg:text-base text-gray-600 mb-2 max-w-full lg:max-w-[55%]">
                Creating safe and sustainable housing solutions for families in
                need, ensuring dignity and security for all.
              </p>
              <Link to="/what-we-do/economic-empowerment">
                <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors duration-300">
                  Read More
                  <BsArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* right side image section */}
        <div className="w-full lg:max-w-fit my-auto">
          <figure className="relative flex justify-center items-center mt-12 lg:mt-0 w-[20rem] md:w-[32rem] lg:w-[30rem] h-[23rem] md:h-[40rem] lg:h-auto ml-20 lg:mx-auto">
            <img
              src={WhatWeDoImage1}
              alt="what we do image 1"
              className="w-full h-full rounded-3xl"
            />

            <div className="absolute bottom-8 -left-20 md:-left-24 lg:-left-28">
              <img
                src={WhatWeDoImage2}
                alt="what we do image 2"
                className="w-44 md:w-48 lg:w-56 h-44 md:h-48 lg:h-56 rounded-full border-[.5rem] border-white"
              />
            </div>
            <Link
              to={"/"}
              className="absolute -left-[6.5rem] md:-left-[7.5rem] lg:-left-40 bottom-[17rem] md:bottom-[27rem] lg:bottom-[25rem] -rotate-90 group"
            >
              <button className="bg-orange-500 text-white text-base md:text-lg px-4 lg:py-5 py-2 lg:px-10 rounded-lg flex justify-center items-center gap-2 md:gap-4 duration-500 group-hover:bg-slate-950">
                <img
                  src={donateIcon}
                  alt="donate icon"
                  className="w-4 md:w-6 h-auto"
                />
                <span>Donate Now</span>
              </button>
            </Link>
          </figure>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhatWeDo;
