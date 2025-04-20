import donateIcon from "../../assets/chiarity.svg";

export const SectionTitleDiv = ({ subTitle, title, text }) => {
  return (
    <div>
      {/* subtitle of heading */}
      <h3 className="flex justify-center items-center gap-2">
        <img src={donateIcon} alt="chiarityImage" />
        <span className="uppercase text-gray-500 [word-spacing:2px]">
          {subTitle}
        </span>
      </h3>

      {/* title of heading */}
      <h2 className="text-center text-3xl lg:text-5xl font-bold my-4">{title}</h2>

      {/* text of heading */}
      <p className="text-center text-base text-gray-500 font-medium lg:text-lg  mx-auto leading-8 mb-10 max-w-full lg:max-w-[65%]">
        {text}
      </p>
    </div>
  );
};
