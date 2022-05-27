import React from "react";

const Intro = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mx-12 my-24 lg:mx-24 lg:my-52">
        <div>
          <h3 id="text-gradient" className="text-4xl font-light mt-8">
            The Future is
          </h3>
          <h1 id="text-gradient" className="text-7xl font-semibold mt-2">
            IDENTER
          </h1>
          <p className="text-gray-400 max-w-xs text-sm my-12 leading-6"  >
            Buruea of Blockchain Innovation (BIB) Interoperable Anonymity,
            Scalable Transparency Protecting Digital Identity.
          </p>
          <div>
              <button className="w-56 my-2 bg-white rounded p-2 font-semibold px-4 mr-16" >Participate on ICO</button>
              <button className="w-56 my-2 bg-blue-200 rounded p-2 font-semibold px-4" >Save Your Idenity</button>
          </div>
        </div>
        <div>
          <img src="/images/lock.png" alt="lock" className="w-full max-w-md" />
        </div>
      </div>
    </>
  );
};

export default Intro;
