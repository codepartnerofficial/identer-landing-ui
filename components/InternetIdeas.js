import React from "react";

const InternetIdeas = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center m-4 sm:m-12 border border-gray-400 rounded-lg  card-shadow-blur p-12 py-24">
          <div>
            <img
              src="/images/hacker.png"
              alt="hacker"
              className="w-full max-w-lg"
            />
          </div>
          <div data-aos="fade-left" >
            <h3 className="text-4xl font-semibold mt-8 text-white">
              The Internet of Ideas
            </h3>
            <div>
              <p className="text-gray-300 max-w-lg text-sm mt-12 mb-4 leading-6">
                Before you turn your dreams into reality, you first need to draw
                it on your mind next is find a tool or ways which can convert
                your ideas into liquid component. We have two tools in
                converting ideas, 1.) Traditional : ways at which you do hard
                work, 2.) Digital: ways at which you do smart work.
              </p>
              <p className="text-gray-300 max-w-lg text-sm mt-8 mb-12 leading-6">
                In Identer, the tool of Ideas is smart work, hence to make it
                happen, 90% of the blockchain shares is alloted to support the
                community in building its dreams. Most importantly, Identer is
                designed for security and earning. It is a blockchain inside a
                blockchain termed as Hyperetherium Protocol.
              </p>
            </div>
            {/* <div className="max-w-xl flex justify-around items-center flex-wrap xl:gap-8"> */}
            <div className="shadow">
              {/* <button className="w-64 my-2 bg-blue-200 rounded-lg p-2 font-semibold px-4 hover:bg-black hover:text-white border  transition-all duration-500 ease-out">
                Patent Your Idea
              </button>
              <button className="w-64 my-2 bg-blue-200 rounded-lg p-2 font-semibold px-4 hover:bg-black hover:text-white border  transition-all duration-500 ease-out">
                Start Building
              </button>
              <button className="w-64 my-2 bg-white rounded-lg p-2 font-semibold px-4 hover:bg-black hover:text-white border  transition-all duration-500 ease-out ">
                Developer Portal
              </button> */}
              <button className="w-64 my-2 bg-white rounded-lg p-2 font-semibold px-4 hover:bg-black hover:text-white border  transition-all duration-500 ease-out ">
              Connect with us!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternetIdeas;
