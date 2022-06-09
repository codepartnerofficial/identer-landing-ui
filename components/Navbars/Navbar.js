// import Link from "next/link";
import React from "react";
import { navLinks } from "../../allLinks";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:flex">
        <div
          id="nav-bg"
          className=" w-full p-6 px-12 flex items-center justify-between"
        >
          <div className="flex justify-center items-center gap-4 ">
            <div className="flex justify-center items-center w-fit ">
              <img src="/images/identerLogo.png" alt="logo" className="w-16" />
            </div>
            <h1 className="font-extrabold text-white text-lg">IDENTER</h1>
          </div>

          <div className="flex text-white items-center">
            <div className="flex items-center gap-8 mr-16">
              {navLinks.map((nlink, i) => (
                <div
                  className="font-semibold capitalize cursor-pointer"
                  key={i}
                >
                  <Link
                    to={`${nlink.route}`}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    // offset={30}
                    duration={2000}
                    isDynamic={true}
                  >
                    {nlink.name}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <button className=" p-2 px-4 shadow-md font-semibold bg-white text-black rounded-lg hover:bg-black hover:text-white border  transition-all duration-500 ease-out">
                <Link
                  to={`join`}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  // offset={30}
                  duration={1000}
                  isDynamic={true}
                >
                  Join our Community
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
