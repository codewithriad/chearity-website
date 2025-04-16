import React from "react";
import { BsTelephone } from "react-icons/bs";
export const Phone = () => {
  return (
    <>
      <p className="text-gray-500 text-sm text-center flex items-center justify-center gap-1 flex-wrap">
        You will be satisfied with our work. Contact us today&nbsp;
        <a
          href="tel:+8801834521014"
          className="text-orange-500 font-bold underline inline-flex items-center gap-1 hover:text-zinc-950 transition-colors duration-300"
        >
          <BsTelephone className="w-4 h-4" />
          (+880) 18 345 21 014
        </a>
      </p>
    </>
  );
};
