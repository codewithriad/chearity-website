/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import CharityLogo from "../../assets/chiarity.svg";
import heroImage from "../../assets/hero.jpeg"; // Make sure to replace with your actual image path
const Hero = () => {
  return (
    <> 
      <section
        className="h-screen bg-cover bg-center relative bg-no-repeat px-4 sm:px-10 pl-4 sm:pl-8 md:pl-16 hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* <TopLeftOverlay /> */}
        <div className="relative pt-40 md:pt-60 text-content flex flex-col justify-center items-start sm:px-0 text-white w-full z-10">
          {/* typography start for hero section */}
          <motion.h5
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex gap-3 text-base"
          >
            <img src={CharityLogo} alt="Charity" />{" "}
            <span>WELCOME OUR CHARITY</span>
          </motion.h5>

          <div className="pt-4 lg:pt-8 desktop:pt-[4rem]">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-2xl md:text-4xl lg:text-6xl font-bold text-white text-left md:leading-[3rem] lg:leading-[4.5rem]"
            >
              <span className="text-orange-500">Empower change</span>, one act
              of kindness at a time
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mt-4 text-sm md:text-base lg:text-lg leading-6 md:leading-8"
          >
            Join us in creating brighter futures by providing hope, delivering
            help, and fostering lasting change for communities in need around
            the world.
          </motion.p>

          {/* button div */}
          <div className="flex gap-6 mt-16 font-bold text-base">
            <motion.button 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="bg-orange-500 text-white px-6 py-4 rounded-full flex items-center gap-2 cursor-pointer">
              <span>Donate Now</span>
              <span>
                <FaArrowRight />
              </span>
            </motion.button>
            <motion.button 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex items-center gap-2 cursor-pointer">
              <span>Play Video</span>
              <span className="bg-orange-500 text-xl text-white rounded-full p-4">
                <FaPlay />
              </span>
            </motion.button>
          </div>

          {/* div for target */}
          <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
           className="flex items-center gap-4 mt-16">
            {/* left div */}
            <div className="border-r-[#ffffff1a] border-r pr-5 space-y-3">
              <p className="flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                    fill="none"
                  >
                    <path
                      d="M11.03 23.8257C16.6544 23.8257 21.2139 19.2662 21.2139 13.6419C21.2139 8.01747 16.6544 3.45801 11.03 3.45801C5.40565 3.45801 0.846191 8.01747 0.846191 13.6419C0.846191 19.2662 5.40565 23.8257 11.03 23.8257Z"
                      fill="#FF6D00"
                    ></path>
                    <path
                      d="M11.1452 21.5131L11.016 21.293C9.04293 17.9312 3.79974 10.7971 3.74678 10.7255L3.67114 10.6227L5.45747 8.85732L11.112 12.8057C14.6723 8.18578 17.9937 5.01259 20.1603 3.15957C22.5304 1.13255 24.0731 0.199376 24.0887 0.190434L24.1238 0.169434H27.1539L26.8644 0.427203C19.4205 7.05755 11.352 21.1497 11.2716 21.2913L11.1452 21.5131Z"
                      fill="white"
                    ></path>
                  </svg>{" "}
                </span>
                <span className="text-base">
                  Education and Skill Development
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                    fill="none"
                  >
                    <path
                      d="M11.03 23.8257C16.6544 23.8257 21.2139 19.2662 21.2139 13.6419C21.2139 8.01747 16.6544 3.45801 11.03 3.45801C5.40565 3.45801 0.846191 8.01747 0.846191 13.6419C0.846191 19.2662 5.40565 23.8257 11.03 23.8257Z"
                      fill="#FF6D00"
                    ></path>
                    <path
                      d="M11.1452 21.5131L11.016 21.293C9.04293 17.9312 3.79974 10.7971 3.74678 10.7255L3.67114 10.6227L5.45747 8.85732L11.112 12.8057C14.6723 8.18578 17.9937 5.01259 20.1603 3.15957C22.5304 1.13255 24.0731 0.199376 24.0887 0.190434L24.1238 0.169434H27.1539L26.8644 0.427203C19.4205 7.05755 11.352 21.1497 11.2716 21.2913L11.1452 21.5131Z"
                      fill="white"
                    ></path>
                  </svg>{" "}
                </span>
                <span className="text-base">
                  Education and Youth Development
                </span>
              </p>
            </div>
            {/* right div */}
            <div>
              <h3 className="text-xl font-bold">Help Lorem Families</h3>
              <p className="text-base mt-3">
                You gift of $235 can feed 40 <br />
                children
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
