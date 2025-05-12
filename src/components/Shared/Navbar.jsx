/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "home",
    "about",
    "services",
    "our team",
    "what we do",
    "our causes",
    "contact",
  ];

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const scrollEffect = () => setIsScroll(window.scrollY > 50);

    window.addEventListener("scroll", scrollEffect);

    return () => window.removeEventListener("scroll", scrollEffect);
  }, []);

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
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 w-full z-50 duration-200 ${
          isScroll ? "bg-[#0000005e]" : "bg-transparent"
        } `}
      >
        <nav className="flex justify-between items-center px-4 lg:px-[18rem] mx-auto py-5">
          {/* div for logo */}
          <div className="pl-2 md:pl-4 lg:pl-10 cursor-pointer">
            <ScrollLink to="home" smooth={true} offset={-70} duration={500}>
              <img src={logo} alg="logo" className="w-28 lg:w-32" />
            </ScrollLink>
          </div>

          {/* nav links for desktop */}
          <ul className="hidden lg:flex justify-end items-center gap-5 text-white">
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-lg hover:text-orange-500 duration-300 cursor-pointer capitalize"
                >
                  {link}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <ScrollLink
            to={"donate"}
            smooth={true}
            offset={-100}
            duration={500}
            className="hidden lg:block text-white text-lg hover:text-orange-500 duration-200"
          >
            <button>Donate Us</button>
          </ScrollLink>

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
                      className="cursor-pointer"
                    >
                      <ScrollLink
                        to={link.toLowerCase()}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setIsOpen(false)}
                        className="text-lg lg:hover:text-orange-500 duration-300 cursor-pointer uppercase"
                      >
                        {link}
                      </ScrollLink>
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
