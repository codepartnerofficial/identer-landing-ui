import React from "react";

const DaoPerson = ({ pic, name }) => {
  return (
    <>
      <div className="relative text-gray-300 h-36 w-64 sm:w-96">
        <div className="absolute w-24 sm:w-44 z-20">
          <img src={pic} alt="dao" className="-mt-6 -ml-6" />
        </div>
        <div className="border-2 rounded-xl sm:rounded-2xl h-fit border-white p-2 text-xs sm:text-base sm:p-3 w-52 sm:w-72 absolute top-1 left-10 sm:top-10 sm:left-24 z-10">
          <h2>{name}</h2>
        </div>
      </div>
    </>
  );
};

export default DaoPerson;
