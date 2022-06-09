// import Link from "next/link";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { navLinks } from "../../allLinks";
import { Link } from "react-scroll";

const MobileNavbar = ({ navcolor }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className=" transition-all duration-500 ease-out lg:hidden">
        <div id="nav-bg" className="  flex justify-between p-4 px-6">
          <div className="flex justify-center items-center gap-2 ">
            <div className="flex justify-center items-center  w-fit ">
              <img src="/images/identerLogo.png" className="w-12" />
            </div>
            <h1 className="font-extrabold text-white text-sm">IDENTER</h1>
          </div>

          <MenuIcon
            onClick={() => setOpenMenu(true)}
            className=" text-white w-8"
          />
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-out  min-h-full fixed top-0 right-0 overflow-hidden flex items-left backdrop-blur-xl bg-black/30 z-50 lg:hidden ${
          openMenu ? "w-80 opacity-100" : "w-0 opacity-0"
        } `}
      >
        <div className=" flex flex-col justify-between px-8 py-6">
          <div className=" flex justify-between ">
            <div className="flex justify-center items-center gap-2 ">
              <div className="flex justify-center items-center w-fit ">
                <img src="/images/identerLogo.png" className="w-12" />
              </div>
              <h1 className="font-extrabold text-white text-sm">IDENTER</h1>
            </div>

            <XIcon
              onClick={() => setOpenMenu(false)}
              className=" text-white w-8"
            />
          </div>
          <div className="flex flex-col items-left my-4 font-bold text-xl text-white">
            {navLinks.map((nlink, i) => (
              <div className="font-semibold text-sm" key={i}>
                <Link
                  to={`${nlink.route}`}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  // offset={30}
                  duration={1000}
                  isDynamic={true}
                >
                  {nlink.name}
                </Link>
              </div>
            ))}
          </div>
          <div className=" flex-1"></div>
          <div className=" flex justify-center ">
            <Link
              to={`join`}
              spy={true}
              smooth={true}
              hashSpy={true}
              // offset={30}
              duration={1000}
              isDynamic={true}
            >
              <button className=" w-64 rounded-md text-black text-sm bg-white px-8 py-2 ">
                Join our Community
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
