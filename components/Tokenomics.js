import React from "react";

const Tokenomics = () => {
  return (
    <>
      <div className="bg-white p-8 lg:p-24 ibm-font">
        <div>
          <div className="flex flex-col justify-center items-center text-center px-4 sm:px-12">
            <h1 className="text-3xl font-semibold">
              Tokenomics-Allocations-Project Costing
            </h1>
            <p className="text-xs mt-4 leading-5 max-w-4xl">
              For transparency and direction to where the ICO Fund will go,
              below are the details excerpt from Identer whitepaper. For the
              community information purposes only. Everything is written in
              whitepaper.
            </p>
          </div>

          <div className=" mt-12 md:mt-24 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:items-start justify-between ">
            <div data-aos="fade-right">
              <div>
                <h2 className="font-medium my-1">
                  Token Name: <b>Identer</b>
                </h2>
                <h2 className="font-medium my-1">
                  Token Symbol: <b>IDT </b>
                </h2>
                <h2 className="font-medium my-1">
                  Total Supply: <b>10 billion </b>
                </h2>
                <h2 className="font-medium my-1">
                  ICO Supply: <b> 13% of the Total Supply</b>
                </h2>
              </div>
              
            </div>
            <div className=" hidden lg:flex flex-col items-center justify-center -mt-14">
              <div className="border-r border-gray-600 h-64 w-1"></div>
            </div>
            <div data-aos="fade-left">
              <h1 className="font-semibold">Percent Distributions</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
