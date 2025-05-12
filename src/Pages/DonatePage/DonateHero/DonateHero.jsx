import { Link } from "react-router-dom";
import DonateHeroBg from "../../../assets/DonatePage/donate-page-bg.jpg";
const DonateHero = () => {
  return (
    <section
      className="min-h-[80vh] bg-donate-gradient w-full bg-center  bg-no-repeat -mt-20"
      style={{
        backgroundImage: `url(${DonateHeroBg})`,
        backgroundSize: "cover",
        
      }}
    >
      <div className="pt-48 mx-8">
        <h1 className="text-white text-7xl font-bold">Donate</h1>
        <p className="text-white text-lg font-bold flex gap-2">
            <Link to={'/'} > * Home</Link>
            <Link className="text-orange-500" to={'/donate'}> * Donation</Link>
        </p>
      </div>
    </section>
  );
};

export default DonateHero;
