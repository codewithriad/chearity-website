/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Our Team", "Contact"];

  const menuVariants = {
    hidden: {
      width: 0,
      height: 0,
      opacity: 0,
      borderRadius: "50%",
      top: "1.5rem",
      right: "1.5rem",
    },
    visible: {
      width: "200vmax", // huge enough to cover full screen
      height: "200vmax",
      opacity: 1,
      borderRadius: "50%",
      top: "-50vmax", // pull up so center covers screen
      right: "-50vmax",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      width: 0,
      height: 0,
      opacity: 0,
      top: "1.5rem",
      right: "1.5rem",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-[#0000003b]">
        <nav className="flex justify-between items-center px-4 lg:px-[18rem] mx-auto py-5">
          {/* div for logo */}
          <div className="pl-2 md:pl-4 lg:pl-10">
            <Link to="/">
              <img src={logo} alg="logo" className="w-28 lg:w-32" />
            </Link>
          </div>

          {/* nav links for desktop */}
          <ul className="hidden lg:flex gap-5 text-white">
            {navLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>

          <button className="text-white hidden lg:block">SignUp</button>

          {/* mobile menu toggle button */}

          <div className="lg:hidden relative z-50">
            <button
              className="text-white text-2xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* mobile menu with framer motion */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed z-40 bg-orange-500"
              style={{ position: "fixed", overflow: "visible" }}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <div className="fixed inset-0 flex flex-col justify-center items-center text-white z-50">
                <ul className="flex flex-col gap-10 text-2xl">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={i}
                      variants={linkVariants}
                      onClick={() => setIsOpen(false)}
                      className="cursor-pointer"
                    >
                      {link}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
