import { useRef, useState } from "react";
import { BsPlayFill, BsTriangleHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import donateIcon from "../../../assets/DonateNow/donateIcon.svg";
import educationIcon from "../../../assets/DonateNow/educationIcon.svg";
import foodsIcon from "../../../assets/DonateNow/foodsIcon.svg";
import healthIcon from "../../../assets/DonateNow/healthIcon.svg";
import { SectionTitleDiv } from "../../../components/Shared/SectionTitleDiv";
const DonateNow = () => {
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const modalRef = useRef(null);

  // handle click outside
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpenVideo(false);
    }
  };

  const [amount, setAmount] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAmountClick = (value) => setAmount(value);

  const handleInputChange = (e) => setAmount(e.target.value);

  const handleDonate = () => {
    if (amount && parseFloat(amount) > 0) {
      setShowModal(true);
    } else {
      alert("Please select or enter a valid amount.");
    }
  };

  return (
    <>
      <section
        className="mt-8 px-8 lg:px-40 pb-16 min-h-[400px] bg-[url(/src/assets/DonateNow/donateNowBg.jpg)] bg-cover bg-center bg-no-repeat"
        id="donate"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* ========== left side ============== */}
          <div className="pt-12 lg:pt-0 flex flex-col justify-center items-center space-y-20">
            {/* ======= play video ====== */}
            <Link
              to={"/"}
              className="bg-orange-500 border-transparent rounded-full p-2"
            >
              <BsPlayFill
                className="w-8 h-8"
                fill="white"
                onClick={() => setIsOpenVideo(true)}
              />
            </Link>

            {/* 🎬 Video Modal */}
            {isOpenVideo && (
              <div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                onClick={handleClickOutside}
              >
                <div className="relative bg-white rounded-lg max-w-2xl w-full shadow-lg">
                  {/* ❌ Close Button */}
                  <button
                    onClick={() => setIsOpenVideo(false)}
                    className="absolute -top-6 right-2 text-white text-xl"
                  >
                    &times;
                  </button>

                  {/* 📹 Video */}
                  <div className="w-full aspect-video">
                    <iframe
                      ref={modalRef}
                      src="https://www.youtube.com/embed/b8E7ky0dpQQ?ren=0"
                      title="YouTube video"
                      allowFullScreen
                      className="w-full h-full rounded"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* our service and text */}
            <div className="text-white grid grid-cols-4 gap-8 md:gap-4">
              <h3 className="flex justify-center items-center gap-1 md:gap-3 text-white text-base md:text-xl md:font-bold">
                <img
                  src={donateIcon}
                  alt="Donate"
                  className="w-8 h-8 text-white invert"
                />
                <span>Donate</span>
              </h3>
              <h3 className="flex justify-center items-center gap-1 md:gap-3 text-white text-base md:text-xl md:font-bold">
                <img
                  src={foodsIcon}
                  alt="food"
                  className="w-8 h-8 text-white invert"
                />
                <span>Foods</span>
              </h3>
              <h3 className="flex justify-center items-center gap-1 md:gap-3 text-white text-base md:text-xl md:font-bold">
                <img
                  src={educationIcon}
                  alt="education"
                  className="w-8 h-8 text-white invert"
                />
                <span>Education</span>
              </h3>
              <h3 className="flex justify-center items-center gap-1 md:gap-3 text-white text-base md:text-xl md:font-bold">
                <img
                  src={healthIcon}
                  alt="health"
                  className="w-8 h-8 text-white invert"
                />
                <span>Health</span>
              </h3>
            </div>
          </div>

          {/* ========== right side of form ============ */}
          <div className="max-w-[30rem] mt-28">
            <form action="#" className="bg-white pt-8 rounded-3xl">
              {/* shared title div */}
              <div>
                <SectionTitleDiv
                  title={"Donate Us"}
                  subTitle={"Donate now"}
                  text={
                    "Your generous support enables to continue its mission of spreading God’s love and serving our community."
                  }
                />
              </div>
              {/* =========== notice text ========== */}
              <div className="flex justify-items-start items-center mb-4 gap-3 pl-2 bg-green-100">
                <div className="border-[1px] border-green-500 w-10 h-12 flex justify-center items-center">
                  <BsTriangleHalf className="text-green-500 h-5 w-auto " />
                </div>
                <p className="text-gray-500">
                  Your donation will use for children rights, health, foods and
                  education for all poor both man and women.
                </p>
              </div>

              {/* ============ amount button =========== */}
              <div className="mt-6">
                {/* 3 buttons with amount */}
                <div className="flex justify-between items-center px-7">
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="$"
                    className="text-lg bg-gray-100 text-gray-700 w-full h-10 pl-4 rounded-md focus:outline-none"
                    value={amount}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex justify-center items-center gap-14 py-4">
                  {[200, 500].map((val) => (
                    <button
                      type="button"
                      key={val}
                      onClick={() => handleAmountClick(val)}
                      className={`text-lg font-bold ${
                        amount == val
                          ? "text-white bg-orange-500 border-white"
                          : "text-orange-500 bg-white"
                      } border-2 border-orange-500 rounded-lg px-5 py-3 transition-all duration-300 hover:text-white hover:bg-orange-500 hover:border-white`}
                    >
                      ${val}
                    </button>
                  ))}
                </div>

                {/* 💵 3 More Buttons */}
                <div className="flex justify-center items-center gap-6 py-4">
                  {[1000, 2000, 5000].map((val) => (
                    <button
                      type="button"
                      key={val}
                      onClick={() => handleAmountClick(val)}
                      className={`text-lg font-bold ${
                        amount == val
                          ? "text-white bg-orange-500 border-white"
                          : "text-orange-500 bg-white"
                      } border-2 border-orange-500 rounded-lg px-5 py-3 transition-all duration-300 hover:text-white hover:bg-orange-500 hover:border-white`}
                    >
                      ${val}
                    </button>
                  ))}
                </div>
              </div>

              {/* ================ donate now =============== */}

              <div className="flex justify-center mt-4 w-full pb-2">
                <button
                  type="button"
                  onClick={handleDonate}
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 font-bold"
                >
                  Donate
                </button>
              </div>

              {/* 🎉 Modal */}
              {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm w-full">
                    <h2 className="text-2xl font-bold text-green-600 mb-4">
                      🎉 Thank You!
                    </h2>
                    <p className="text-lg">
                      You have donated{" "}
                      <span className="font-semibold">${amount}</span>
                    </p>
                    <button
                      onClick={() => setShowModal(false)}
                      className="mt-5 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default DonateNow;
