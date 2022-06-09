import React from "react";
import DaoPersonTwo from "./DaoPersonTwo";

const FoundingMembers = () => {
  const members = {
    shadi: {
      name: "OxShadiAyuob",
      pic: "/images/shadi.png",
      skills: ["Blockchain Developer", "Financial Advisor"],
    },
    sou: {
      name: "OxSouvikMukherjee",
      pic: "/images/souvik.png",
      skills: ["Blockchain Developer", "Blockchain Auditor", "MBA"],
    },
    pra: {
      name: "OxPralayMandal",
      pic: "/images/pralay.png",
      skills: ["Blockchain Developer", "High Language Programming"],
    },
    raj: {
      name: "OxRajivBordoloi",
      pic: "/images/rajiv.png",
      skills: ["Project Manager", "Business Development", "MBA"],
    },
    mary: {
      name: "OxMaryIgnacio",
      pic: "/images/mary.png",
      skills: ["Blockchain Law", "Research and Development"],
    },
  };

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center text-center  card-shadow-blur p-6 sm:p-12">
          <h1 className="text-white text-2xl my-2 w-full font-medium text-left">
            The Founding Members
          </h1>
          <div className="w-full mb-12">
            <div
              data-aos="zoom-in"
              className="flex justify-center items-center  "
            >
              <DaoPersonTwo person={members.shadi} />
            </div>
            <div
              data-aos="zoom-in"
              className="flex flex-col lg:flex-row justify-around items-center "
            >
              <DaoPersonTwo person={members.sou} />
              <DaoPersonTwo person={members.pra} />
            </div>
            {/* <div
              data-aos="zoom-in"
              className="hidden lg:flex justify-center items-center"
            >
              <img src="/images/glowLogo.png" alt="logo" className="" />
            </div> */}
            <div
              data-aos="zoom-in"
              className="flex flex-col lg:flex-row sm:justify-around items-center "
            >
              <DaoPersonTwo person={members.raj} />
              <DaoPersonTwo person={members.mary} />
            </div>
          </div>
          <h2 className="text-white text-sm  max-w-3xl ">
            Identer was conceptualize to solve the problems in digital
            ecosystem, specifically addressing the need of technology that can
            protect users in virtual environment. Self-Soverignty is the outmust
            preach.
          </h2>
        </div>
      </div>
    </>
  );
};

export default FoundingMembers;
