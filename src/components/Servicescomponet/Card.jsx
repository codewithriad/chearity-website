/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Card = ({ title, text, image, index }) => {
  return (
    <>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: index * 0.2 // Stagger delay based on card index
        }}
        variants={cardVariants}
        className="bg-white max-w-[24rem] mx-auto rounded-3xl shadow-md px-12 py-8 group"
      >
        {/* card title */}
        <motion.h3 
          variants={textVariants}
          transition={{ delay: 0.2 }}
          className="text-lg text-center font-bold mb-2"
        >
          {title}
        </motion.h3>

        {/* card text */}
        <motion.p 
          variants={textVariants}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-sm text-center"
        >
          {text}
        </motion.p>

        {/* card image */}
        <motion.figure 
          variants={textVariants}
          transition={{ delay: 0.4 }}
          className="w-40 h-40 rounded-full overflow-hidden flex justify-center items-center mt-6 mx-auto"
        >
          <img
            src={image}
            alt="services"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </motion.figure>

        {/* card button */}
        <Link to="/services">
          <motion.button 
            variants={textVariants}
            transition={{ delay: .8 }}
            className="mt-4 mx-auto px-4 py-2 flex items-center justify-center gap-2 text-orange-500 rounded-md hover:text-zinc-950 transition-all duration-300 group/btn"
          >
            Learn More
            <BsArrowRight className="w-5 h-5 text-white bg-orange-500 rounded-full p-1 transition-all duration-300 group-hover/btn:bg-zinc-950 transform group-hover/btn:translate-x-1" />
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
};
