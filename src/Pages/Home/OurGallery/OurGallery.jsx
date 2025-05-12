/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { SectionTitleDiv } from "../../../components/Shared/SectionTitleDiv";
import AllImages from "./AllImages";
import EducationImages from "./EducationImages";
import HealthImages from "./HealthImages";

const OurGallery = () => {
  const [activeTab, setActiveTab] = useState("All");
  const slideUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.8 }
  };
  return (
    <section className="lg:my-12">
      <div>
        <SectionTitleDiv subTitle={"Gallery"} title={"Our Image Gallery"} />

        {/* Tab selection */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <button
            className={`text-gray text-base ${
              activeTab === "All" ? "text-orange-500 font-bold" : ""
            }`}
            onClick={() => setActiveTab("All")}
          >
            All
          </button>
          <button
            className={`text-gray text-base ${
              activeTab === "Education" ? "text-orange-500 font-bold" : ""
            }`}
            onClick={() => setActiveTab("Education")}
          >
            Education
          </button>
          <button
            className={`text-gray text-base cursor-pointer ${
              activeTab === "Health" ? "text-orange-500 font-bold" : ""
            }`}
            onClick={() => setActiveTab("Health")}
          >
            Health
          </button>
        </div>

        {/* Selected Tab's Content */}
        <AnimatePresence mode="wait" className="my-20">
          {activeTab === "All" && (
            <motion.div key={"All"} {...slideUp} >
              <AllImages/>
            </motion.div>
          )}
          {activeTab === "Health" && (
            <motion.div key={"Health"} {...slideUp}>
              <HealthImages/>
            </motion.div>
          )}
          {activeTab === "Education" && (
            <motion.div key={"Education"} {...slideUp}>
              <EducationImages/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurGallery;
