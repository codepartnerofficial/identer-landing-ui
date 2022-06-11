import React from "react";
import Link from "next/link";

const DaoPersonTwo = ({ person }) => {
  const { pic, name, skills, link } = person;
  return (
    <>
      <div className="relative text-white  my-8">
        {/* <div className="flex "> */}
        <div className="absolute top-1/2 -left-14 sm:-left-16 transform  -translate-y-1/2 w-32 sm:w-44 z-20">
          {/* <img src={pic} alt="dao" className="-mt-6 -ml-6" /> */}
          <img src={pic} alt="dao" />
        </div>
        <div className="border-2 w-64 sm:w-96 relative flex flex-col text-left justify-center rounded-xl sm:rounded-2xl h-32 sm:h-40 border-white p-2 text-xs sm:text-base  z-10">
          <div className=" ml-12 sm:ml-24 ">
            <h2 className="my-1">{name}</h2>
            {skills.map((skill, i) => (
              <h2 className="my-1" key={i}>
                {skill}
              </h2>
            ))}
          </div>
          <div>
            <Link href={link}>
              <a target="_blank">
                <img
                  src="/images/lin.png"
                  alt="in"
                  className="w-10 h-10 absolute right-2 top-2"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaoPersonTwo;
