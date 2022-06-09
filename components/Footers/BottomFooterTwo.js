import React from "react";

const BottomFooterTwo = () => {
  return (
    <>
      <div>
        <div
          id="blur-container"
          className=" p-4 sm:p-16 roboto-font flex flex-col md:flex-row justify-between items-center gap-4 text-white"
        >
          <h1>Powered by: Identer .org</h1>
          <p className="text-xs text-gray-300 max-w-xs text-center">
            © Identer Blockchain Technology: 2022 Legal Disclaimer- Privacy
            Statement
          </p>
          <h1>Email: info@identer.org</h1>
        </div>
      </div>
    </>
  );
};

export default BottomFooterTwo;
