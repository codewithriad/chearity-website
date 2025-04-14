/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import aboutImage from "../../assets/about1.jpg";
import CharityLogo from "../../assets/chiarity.svg";
const About = () => {
  return (
    <>
      <section className="px-4 sm:px-10 md:px-16 about-section">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 text-black py-[4rem] lg:py-[10rem]">
          {/* left image div */}
          <div className="overflow-hidden">
            <figure className="w-full h-full">
              <img
                src={aboutImage}
                alt="about"
                className="object-cover rounded-3xl"
              />
            </figure>
          </div>

          {/* right text div */}

          <div className="mt-8 lg:mt-0 w-full lg:w-1/2">
            {/* typography start for hero section */}
            <motion.h5
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex gap-3 text-base"
            >
              <img src={CharityLogo} alt="Charity" /> <span>About Us</span>
            </motion.h5>

            <div className="pt-4 lg:pt-8 desktop:pt-[4rem]">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-2xl md:text-4xl lg:text-6xl font-bold text-left md:leading-[3rem] lg:leading-[4.5rem]"
              >
                United in compassion, changing lives
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
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
