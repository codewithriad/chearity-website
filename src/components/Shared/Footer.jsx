import { BsFacebook, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/footer-logo.svg";
import footerBg from "../../assets/footerBg.png";

const Footer = () => {
  return (
    <footer id="contact" className={`bg-[#020d19] mt-4 lg:mt-20 bg-[url(${footerBg})] bg-auto bg-[position:bottom_center] bg-no-repeat`}>
      <div className={`px-8 lg:px-96 py-8 md:py-12`}>
        <div className="flex flex-col md:flex-row justify-between items-center mx-auto">

          {/* left side */}
          <div className="flex flex-col lg:flex-row justify-start lg:justify-around lg:items-center gap-8 lg:border-r border-dotted border-zinc-600 w-full md:w-1/3 lg:w-1/2">
            {/* contact part number, social media and email */}

            <div>
              <img
                src={footerLogo}
                alt="footer logo"
                className="w-auto h-10 mb-6"
              />

              <div className="my-4 space-y-2">
                <p className="text-white text-sm">Free to contact us.</p>
                <p className="text-white text-sm font-bold">
                  +123 456 789
                </p>
              </div>

              {/* email link */}

              <div>
                <p className="text-white text-sm mt-4 mb-2">Follow On</p>
                <div className="flex justify-start items-center gap-2 text-white">
                  <Link to={"/"}>
                    <BsFacebook className="w-7 h-7 rounded-full bg-orange-500 p-1" />
                  </Link>
                  <Link to={"/"}>
                    <BsTwitterX className="w-7 h-7 rounded-full bg-orange-500 p-1" />
                  </Link>
                  <Link to={"/"}>
                    <BsWhatsapp className="w-7 h-7 rounded-full bg-orange-500 p-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* email for live support */}
            <div className="text-white space-y-2">
              <p className="text-gray-300 text-sm">Need live support</p>
              <p className="text-base font-bold">info@domainname.com</p>
            </div>
          </div>

          {/* right side */}
          <div className="text-white w-full md:w-2/3 lg:w-1/2 mt-8 lg:mt-0">
            {/* quick links */}
            <div className="flex flex-col md:flex-row justify-around md:items-center space-x-0 lg:space-x-0 space-y-8 md:space-y-0">
              <div>
                <h3 className="text-lg font-bold mb-2">Quick Link</h3>
                <div className="text-left space-y-2 flex flex-col justify-start">
                  <a href="/" className="decoration-0 text-white text-base">
                    Home
                  </a>
                  <a href="/" className="decoration-0 text-white text-base">
                    About
                  </a>
                  <a href="/" className="decoration-0 text-white text-base">
                    Services
                  </a>
                  <a href="/" className="decoration-0 text-white text-base">
                    Our Team
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Services</h3>
                <div className="text-left space-y-2 flex flex-col justify-start">
                  <a href="/" className="decoration-0 text-white text-base">
                    Education
                  </a>
                  <a href="/" className="decoration-0 text-white text-base">
                    Skill Development
                  </a>
                  <a href="/" className="decoration-0 text-white text-base">
                    Foods
                  </a>
                  <a href="/" className="decoration-0 text-white text-base">
                    Health Care
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Support</h3>
                <div className="text-left space-y-2 flex flex-col justify-start">
                  <a href="/" className="decoration-0 text-white text-base">
                    Help
                  </a>
                  <a href="/" className="decoration-0 text-white text-base">
                    Privacy Policy
                  </a>
                  <a href="/" className="decoration-0 text-white text-base">
                    Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  copy wright reserve  */}
      <div className="bg-[#fbfbfb0f] py-4">
        <p className="text-white text-base text-center">
          Copy Wrights @ 2025 All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
