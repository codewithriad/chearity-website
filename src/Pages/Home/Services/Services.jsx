/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import chiarityImage from "../../../assets/chiarity.svg";
import servicesBg from "../../../assets/our-service-bg.png";
import serviceImage1 from "../../../assets/services1.jpg";
import serviceImage2 from "../../../assets/services2.jpg";
import serviceImage3 from "../../../assets/services3.jpg";
import { Card } from "../../../components/Servicescomponet/Card";
import { Phone } from "../../../components/Servicescomponet/Phone/Phone";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

export const Services = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mt-[25rem] md:mt-[20rem] lg:mt-[8rem] bg-[#f8f8f8] bg-center bg-no-repeat bg-auto"
        style={{
          backgroundImage: `url(${servicesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 py-16">
          {/* section title */}
          <motion.div variants={itemVariants} className="text-center max-w-[600px] mx-auto">
            <motion.h3 
              variants={itemVariants}
              className="text-base uppercase tracking-[.2em] mb-8 flex justify-center items-center gap-2"
            >
              <img src={chiarityImage} alt="chiarity" width={20} height={20} />
              <span className="text-gray-500">Services</span>
            </motion.h3>
            <motion.h2 
              variants={itemVariants}
              className="text-center text-4xl font-bold mb-8"
            >
              Our comprehensive services
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-center text-sm text-gray-500 mb-8"
            >
              Our services are focused on creating lasting change through
              community development, healthcare access, educational support, and
              emergency relief.
            </motion.p>
          </motion.div>

          {/* services cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <Card title="Food Security Initiatives" text="Addressing hunger and malnutrition by providing nutritious meals" 
            image={serviceImage1} index={0} />
            <Card title="Healthcare Access" text="Addressing hunger and malnutrition by providing nutritious meals" 
            image={serviceImage2} index={1} />
            <Card title="Educational Support" text="Addressing hunger and malnutrition by providing nutritious meals" 
            image={serviceImage3} index={2} />
          </motion.div>

          {/* contact number */}
          <motion.div variants={itemVariants} className="mt-12">
            <Phone />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
