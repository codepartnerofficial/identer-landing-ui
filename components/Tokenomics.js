import React from "react";

const Tokenomics = () => {
  const Allocations = [
    "Developer     = 5%",
    "Marketing     = 3%",
    "Admin         = 2%",
    "Community     = 3%",
    "-Insurance    = 2%",
    "-Charity      = 1%",
  ];

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

          <div className="relative py-8  mt-12  flex flex-col items-center gap-8 md:gap-0 md:flex-row  justify-around ">
            <div data-aos="fade-right" className="md:w-5/12">
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
              <div className="mt-16">
                <h1 className="font-extrabold">Project Allocations: </h1>
                <div className="p-8">
                  <h1 className="font-extrabold">
                    (Development = 10% = 1 000 000 000 IDT){" "}
                  </h1>
                  <ul className="list-disc p-6 py-2">
                    {Allocations.map((allo, i) => (
                      <li className="my-2 text-blue-500 font-semibold" key={i}>
                        {allo}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <div>
                    <button className="my-4 w-72 font-semibold  rounded-lg p-2 shadow-lg px-8 hover:bg-black hover:text-white   transition-all duration-500 ease-out">
                      Soft Cap: $5,000,000
                    </button>
                  </div>
                  <div>
                    <button className="my-4 w-72 font-semibold bg-blue-300 rounded-lg p-2 shadow-lg px-8 hover:bg-black hover:text-white   transition-all duration-500 ease-out">
                      Hard Cap: $10,000,000
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex  absolute top-0 left-1/2 transform -translate-x-1/2 z-10 border-r border-black h-full"></div>
            {/* <div className=" hidden lg:flex flex-col items-center justify-center -mt-14">
              <div className="border-r border-gray-600 h-96 w-1"></div>
            </div> */}
            <div data-aos="fade-left" className="md:w-5/12 ">
              <h1 className="font-extrabold">Percent Distributions</h1>
              <div className="mt-16">
                <img src="/images/distribution.png" alt="distribution" />
              </div>
              <div className="mt-12">
                <button className="my-2 bg-blue-500 rounded-lg p-2 shadow-lg px-8 hover:bg-black text-white   transition-all duration-500 ease-out">
                  Everything is Written on Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
