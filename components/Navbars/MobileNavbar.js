import Link from "next/link";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { navLinks } from "../../allLinks";

const MobileNavbar = ({ navcolor }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className=" transition-all duration-500 ease-out lg:hidden">
        <div id="nav-bg" className="  flex justify-between p-4 px-6">
          <Link href={`/`}>
            <a>
              <div className="flex justify-center items-center gap-2 ">
                <div className="flex justify-center items-center  w-fit ">
                  <img src="/images/identerLogo.png" className="w-12" />
                </div>
                <h1 className="font-extrabold text-white text-sm">IDENTER</h1>
              </div>
            </a>
          </Link>

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
            <Link href={`/`}>
              <a>
                <div className="flex justify-center items-center gap-2 ">
                  <div className="flex justify-center items-center w-fit ">
                    <img src="/images/identerLogo.png" className="w-12" />
                  </div>
                  <h1 className="font-extrabold text-white text-sm">IDENTER</h1>
                </div>
              </a>
            </Link>

            <XIcon
              onClick={() => setOpenMenu(false)}
              className=" text-white w-8"
            />
          </div>
          <div className="flex flex-col items-left my-4 font-bold text-xl text-white">
            {navLinks.map((nlink, i) => (
              <div key={i}>
                <Link href={`${nlink.route}`}>
                  <a className="font-semibold text-sm">{nlink.name}</a>
                </Link>
              </div>
            ))}
          </div>
          <div className=" flex-1"></div>
          <div className=" flex justify-center ">
            <button className=" w-64 rounded-md text-black text-sm bg-white px-8 py-2 ">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
