import React from "react";
import { BsStarFill } from "react-icons/bs";

const Comments = ({ title, about, text, image }) => {
  return (
    <div className="p-4 rounded-2xl bg-white">

      {/* title and rating */}
      <div className="flex justify-between items-center">
        {/* image and title */}
        <div className="flex justify-start items-center gap-3">
          <img src={image} alt="author" className="w-8 h-8 rounded-full" />
          {/* text */}
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-500">{about}</p>
          </div>
        </div>

        {/* ratting */}
        <div className="flex justify-end items-center gap-2">
          <BsStarFill className="text-orange-500 w-3 h-auto" />
          <BsStarFill className="text-orange-500 w-3 h-auto" />
          <BsStarFill className="text-orange-500 w-3 h-auto" />
          <BsStarFill className="text-orange-500 w-3 h-auto" />
          <BsStarFill className="text-orange-500 w-3 h-auto" />
        </div>
      </div>

      <div className="mt-16 mb-4">
        <p className="text-gray-500 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Comments;
