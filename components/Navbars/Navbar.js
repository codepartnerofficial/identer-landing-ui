import Link from "next/link";
import React from "react";
import { navLinks } from "../../allLinks";

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:flex">
        <div
        id="nav-bg" className=" w-full p-6 px-12 flex items-center justify-between"
        >
          <Link href={`/`}>
            <a>
              <div className="flex justify-center items-center gap-4 ">
                <div className="flex justify-center items-center w-fit ">
                  <img
                    src="/images/identerLogo.png"
                    alt="logo"
                    className="w-16"
                  />
                </div>
                <h1 className="font-extrabold text-white text-lg">
                  IDENTER
                </h1>
              </div>
            </a>
          </Link>
          <div className="flex text-white items-center">
            <div className="flex items-center gap-8 mr-16">
              {navLinks.map((nlink, i) => (
                <div key={i}>
                  <Link href={`${nlink.route}`}>
                    <a className="font-semibold">{nlink.name}</a>
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <button
                className="p-2 px-4 shadow-md font-semibold bg-white text-black rounded"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
