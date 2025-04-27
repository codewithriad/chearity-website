/* eslint-disable no-unused-vars */
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import starIcon from "../../../assets/Marquee/marquee-star.png";

const MarqueeScroll = () => {
  const items = ["Our Services", "Our Team", "Our Causes", "Our Target"];

  return (
    <section className="pt-16 mb-32">
        <Marquee speed={100}>
          {items.map((text, i) => (
            <Link
              key={i}
              to="/"
              className="flex justify-center items-center gap-3 min-w-max min-h-max overflow-hidden"
            >
              <span className="text-transparent text-5xl lg:text-8xl font-bold [-webkit-text-stroke:2px_#f97316]">
                {text}
              </span>
              <img src={starIcon} alt="" className="w-10 h-10 mr-2" />
            </Link>
          ))}
        </Marquee>
      
    </section>
  );
};

export default MarqueeScroll;
