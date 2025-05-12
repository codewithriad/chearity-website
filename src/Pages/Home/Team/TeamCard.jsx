/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import img10 from "../../../assets/OurTeam/alamin-fokir.jpg";
import img2 from "../../../assets/OurTeam/Helal Khan.jpg";
import img11 from "../../../assets/OurTeam/ibrahim-kahn.jpg";
import img12 from "../../../assets/OurTeam/idris-fokir.jpg";
import img13 from "../../../assets/OurTeam/joshim-fokir.jpg";
import img14 from "../../../assets/OurTeam/Juel-khan.jpg";
import img15 from "../../../assets/OurTeam/Liton Khan.jpg";
import img16 from "../../../assets/OurTeam/mamun-vai.jpg";
import img4 from "../../../assets/OurTeam/Masum Fokir.jpg";
import img17 from "../../../assets/OurTeam/mithu-howlader.jpg";
import img6 from "../../../assets/OurTeam/momen.jpg";
import img18 from "../../../assets/OurTeam/rabbi-fokir.jpg";
import img19 from "../../../assets/OurTeam/sabbir-fokir.jpg";
import img20 from "../../../assets/OurTeam/shahadat-molla.jpg";
import img21 from "../../../assets/OurTeam/shohel-khan.jpg";
import img9 from "../../../assets/OurTeam/showkot.png";
import img22 from "../../../assets/OurTeam/shujon-fokir.jpg";
import img8 from "../../../assets/OurTeam/taimun-fokir.jpg";
import img1 from "../../../assets/OurTeam/team-img-1.jpeg";
import img3 from "../../../assets/OurTeam/team-img-3.jpg";
import img5 from "../../../assets/OurTeam/team-img-5.jpg";
import img7 from "../../../assets/OurTeam/team-img-7.jpeg";

const TeamCard = () => {
  const teamMembers = [
    {
      img: img9,
      name: "Showkot Khan",
      title: "President",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img2,
      name: "Helal Khan",
      title: "Senior Vice President",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img3,
      name: "Zahir Kazi",
      title: "Cashier",
      facebook: "https://www.facebook.com/",
    },
    // liton khan
    {
      img: img15,
      name: "Liton Khan",
      title: "Vice President",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img7,
      name: "Monjil Howlader",
      title: "Join Secretary",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img1,
      name: "Riyad Khan",
      title: "Official Secretary",
      facebook: "https://www.facebook.com/",
    },

    {
      img: img4,
      name: "Masum Fokir",
      title: "Publicity Secretary",
      facebook: "https://www.facebook.com/profile.php?id=100024312994073",
    },
    {
      img: img5,
      name: "Foysal Howlader",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img6,
      name: "Momen Howlader",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },

    {
      img: img8,
      name: "Taimun Fokir",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },

    {
      img: img10,
      name: "Al-Amin Fokir",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img11,
      name: "Ibrahim Khan",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img12,
      name: "Idris Fokir",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img13,
      name: "Joshim Fokir",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img14,
      name: "Juel Khan",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },

    {
      img: img16,
      name: "Mamun Fokir",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img17,
      name: "Mithu Howlader",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img18,
      name: "Rabbi Fokir",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img19,
      name: "Sabbir Fokir",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img20,
      name: "Shahadat Molla",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img21,
      name: "Shohel Khan",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },
    {
      img: img22,
      name: "Shujon Fokir",
      title: "Team Member",
      facebook: "https://www.facebook.com/",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map((member, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden text-center p-5 border group"
        >
          <div className="flex flex-col justify-center items-center">
            <figure className="w-[270px] h-[240px] overflow-hidden rounded-xl">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover duration-300 group-hover:scale-110"
              />
            </figure>

            <h3 className="mt-4 text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-orange-500 font-bold">{member.title}</p>
          </div>
          {/* social media contact */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <Link
              to={"https://www.facebook.com/"}
              className="h-9 w-9 p-2 rounded-full flex justify-center items-center bg-orange-500 hover:bg-slate-950 duration-200"
            >
              <BsFacebook className="text-white w-full h-full" />
            </Link>
            <Link
              to={``}
              className="h-9 w-9 p-2 rounded-full flex justify-center items-center bg-orange-500 hover:bg-slate-950 duration-200"
            >
              <BsTwitterX className="text-white w-full h-full" />
            </Link>
            <Link
              to={"https://www.instagram.com/"}
              className="h-9 w-9 p-2 rounded-full flex justify-center items-center bg-orange-500 hover:bg-slate-950 duration-200"
            >
              <BsInstagram className="text-white w-full h-full" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamCard;
