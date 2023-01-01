import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import "./CovidTerms.css";

const CovidTerms = () => {
  return (
    <div className="fixed bg-[#f39422] text-white top-0 left-[30vw] z-[2000] px-10">
      <p className="flex items-center ">
        <AiFillInfoCircle />
        &nbsp; Your safety is our top priority &nbsp;
        <span className="hover:underline cursor-pointer">
          See our guidance on COVID-19
        </span>
      </p>
    </div>
  );
};

export default CovidTerms;
