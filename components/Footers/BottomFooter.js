import React from "react";

const BottomFooter = () => {
  return (
    <>
      <div>
        <div
          id="blur-container"
          className=" p-4 sm:p-16 roboto-font flex flex-col md:flex-row justify-between items-center gap-4 text-white"
        >
          <h1>POWERED BY:IDENTER.ORG</h1>
          <p className="text-xs text-gray-300 max-w-xs text-center">
            © Identer Blockchain Technology: 2022 Legal Disclaimer- Privacy
            Statement
          </p>
          <button className=" my-2 bg-white text-black rounded-lg p-2 font-semibold px-8 hover:bg-black hover:text-white border  transition-all duration-500 ease-out">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomFooter;
