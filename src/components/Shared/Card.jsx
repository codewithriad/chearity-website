import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ image, title }) => {
  return (
    <>
      <div className="px-3 py-4 rounded-2xl shadow-2xl bg-white w-full max-w-sm mx-auto">
        <figure className="rounded-3xl transform group group-hover:scale-105 overflow-hidden">
          <img
            src={image}
            alt="card-image"
            className="w-full h-full duration-500 transform group-hover:scale-110"
          />
        </figure>
        <h3 className="text-xl font-bold text-center my-3">{title}</h3>
        <p className="text-gray-500 text-center text-base px-1 lg:px-4 mb-4">
          Ensuring quality education and resources for underserved communities.
        </p>
        <Link
          to={"/"}
          className="bg-orange-500 w-full rounded-3xl block mx-auto mb-4 text-center"
        >
          <button className="text-white text-center text-lg lg:font-bold py-2">
            Donate Now
          </button>
        </Link>
      </div>
    </>
  );
};
