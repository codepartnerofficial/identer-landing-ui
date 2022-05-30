import React from "react";

const DigitalEconomy = () => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(108.11deg, rgba(35, 35, 35, 0.53) 0%, #141F22 113.66%)",
        }}
        className="flex flex-col-reverse md:flex-row justify-between items-center px-12 py-24 "
      >
        <div>
          <h3 className="text-4xl font-semibold mt-8 text-white">
            Realigning-the-Digital-Economy
          </h3>
          <div className="roboto-font">
            <p className="text-gray-300 max-w-2xl text-sm mt-12 mb-4 leading-6">
              A fairer financial system can be enhance by adding a value.
              Identer develop a new economic model that appreciates the users
              through incentivizing rewards based on their
              Proof-of-Weighted-Skills. Therefore, through this model,
              self-actualization and fullfill of someone in terms with therie
              emotion is considered not just being recognized but rewarded.
            </p>
            <h5 className="text-blue-300 max-w-lg text-base mt-8 mb-12 leading-6 font-bold">
              IDENTITY {"  "} = Blockchain Technology + Weight of Value
            </h5>
          </div>
          <div>
            <button className="w-64 my-2 bg-white rounded-lg p-2 font-semibold px-4 hover:bg-black hover:text-white border  transition-all duration-500 ease-out">
              More about Enterprise
            </button>
          </div>
        </div>
        <div>
          <img
            src="/images/digital_economy.png"
            alt="lock"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </>
  );
};

export default DigitalEconomy;
