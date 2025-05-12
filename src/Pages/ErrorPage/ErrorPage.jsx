import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center h-screen overflow-hidden relative">
        <div className="absolute bg-black/50 top-0 left-0 w-full h-full -z-10"></div>
        <div className="z-10">
          <h2 className="text-green-500 text-6xl flex gap-3 font-bold">
            <span className="text-orange-500">404</span>
            Not Found
          </h2>

          <div className="flex justify-center items-center gap-4 mt-4">
            <Link onClick={()=> navigate(-1)}>
              <button className="text-white bg-orange-500 px-6 py-3 rounded-2xl">
                Go Back
              </button>
            </Link>
            <Link to="/">
              <button className="text-white bg-orange-500 px-6 py-3 rounded-2xl">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
