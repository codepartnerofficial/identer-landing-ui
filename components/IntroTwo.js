import React from "react";

const IntroTwo = () => {
  return (
    <>
      <div
        data-aos="zoom-in"
        className="flex flex-col-reverse md:flex-row justify-between items-center m-12"
      >
        <div>
          <h3 id="text-gradient" className="text-4xl font-medium mt-8">
            The Future is
          </h3>
          <h1 id="text-gradient" className="text-7xl font-semibold mt-2">
            IDENTER
          </h1>
          <p className="text-white max-w-xs text-sm my-12 leading-8">
            Blockchain Bureau of Innovation (BIB) Interoperable Anonymity,
            Scalable Transparency Patent Ideas and Protecting Digital Identity.
          </p>
          <div>
            <button className="w-56 my-2 bg-white rounded-lg p-2 font-semibold px-4 mr-16 hover:bg-black hover:text-white border  transition-all duration-500 ease-out">
              Participate on ICO
            </button>
            <button className="w-56 my-2 bg-white rounded-lg p-2 font-semibold px-4 hover:bg-black hover:text-white border  transition-all duration-500 ease-out">
              Join our Community
            </button>
            <div className="mt-8">
              <button className=" w-56 lg:w-full my-2 bg-blue-200 rounded-lg p-2 font-semibold px-4 hover:bg-black hover:text-white border  transition-all duration-500 ease-out">
                Contract Address
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/lock2.webp"
            alt="lock"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </>
  );
};

export default IntroTwo;
