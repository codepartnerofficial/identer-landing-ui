import React from "react";

const PartOfSolution = () => {
  return (
    <>
      <div>
        <div
          id="blur-container"
          className="text-center p-4 sm:p-16  font-semibold flex flex-col justify-center items-center"
        >
          <h1 className="solution-text  text-2xl sm:text-6xl">#Be-Part-of-the-Solution!</h1>
          <h2 className="text-md font-medium mt-8 leading-6 max-w-4xl ibm-font text-white">
            Identer is a project that supports Identity Protection of Digital
            Users. Using the IDT Token a user can save his or her data with
            immutability.
          </h2>
        </div>
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center my-16"
        >
          <img
            src="/images/identity_safe.png"
            alt="service"
            className="w-full max-w-6xl"
          />
        </div>
      </div>
    </>
  );
};

export default PartOfSolution;
