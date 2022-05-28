import React from "react";

const Details = () => {
  return (
    <>
      <div id="blur-container" className="p-16 flex justify-around flex-wrap gap-4">
        <div>
          <div className="w-56 h-16 border-2 rounded-lg border-white shadow-xl"></div>
          <h3
            className="text-white text-md mt-3"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Validators Count
          </h3>
        </div>
        <div>
          <div className="w-56 h-16 border-2 rounded-lg border-white shadow-xl"></div>
          <h3
            className="text-white text-md mt-3"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            No. of Blocks
          </h3>
        </div>
        <div>
          <div className="w-56 h-16 border-2 rounded-lg border-white shadow-xl"></div>
          <h3
            className="text-white text-md mt-3"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Market Cap
          </h3>
        </div>
        <div>
          <div className="w-56 h-16 border-2 rounded-lg border-white shadow-xl"></div>
          <h3
            className="text-white text-md mt-3"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Identer Explorer
          </h3>
        </div>
      </div>
    </>
  );
};

export default Details;
