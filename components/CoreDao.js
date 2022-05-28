import React from "react";
import DaoPerson from "./DaoPerson";

const CoreDao = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center text-center  card-shadow-blur p-6 sm:p-12">
          <h1 className="text-white text-2xl my-2 w-full font-medium text-left">
            The Core DAO
          </h1>
          <div className="w-full my-12">
            <div className="flex justify-center items-center lg:my-8 lg:mb-12 ">
              <DaoPerson name="OxShadiAyuob" pic="/images/shadi.png" />
            </div>
            <div className="flex flex-col lg:flex-row justify-around items-center mt-2">
              <DaoPerson name="OxSouvikMukherjee" pic="/images/souvik.png" />
              <DaoPerson name="OxPralayMandal" pic="/images/pralay.png" />
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <img src="/images/glowLogo.png" alt="logo" className="" />
            </div>
            <div className="flex flex-col lg:flex-row sm:justify-around items-center mb-2">
              <DaoPerson name="OxRajivBordoloi" pic="/images/rajiv.png" />
              <DaoPerson name="OxMaryIgnacio" pic="/images/mary.png" />
            </div>
          </div>
          <h2 className="text-gray-400 text-sm my-12 max-w-3xl ">
            Identer was conceptualize to solve the problems in digital
            ecosystem, specifically addressing the need of technology that can
            protect users in virtual environment. Self-Soverignty is the outmust
            preach.
          </h2>

          <div className="max-w-xl flex flex-col  items-center gap-8">
            <button className=" my-2 bg-blue-200 rounded p-2 font-semibold px-8">
              Become a DAO
            </button>

            <button className=" my-2 bg-white rounded p-2 font-semibold px-8 ">
              Affiliate with us!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreDao;
