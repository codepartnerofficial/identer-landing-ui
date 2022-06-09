import React from "react";
import Link from "next/link";

const CommunityTwo = () => {
  const socials = [
    {
      media: "/images/tiktok.png",
      route: "https://vt.tiktok.com/ZSdPcomKp/",
    },
    {
      media: "/images/facebook.png",
      route: "https://www.facebook.com/Identerchain/",
    },
    {
      media: "/images/telegram.png",
      route: "https://t.me/IDENTEROfficial",
    },
    {
      media: "/images/twitter.png",
      route: "https://twitter.com/Identer_blc?t=ppvouw0dgl1Z0DiKvG63jQ&s=09",
    },

    {
      media: "/images/youtube.png",
      route: "https://www.youtube.com/channel/UCGT7VNHMrerrXaJ_abfhwVQ",
    },
    {
      media: "/images/in.png",
      route: "https://www.linkedin.com/company/identer-blockchain-technology",
    },
  ];
  return (
    <>
      <div>
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center text-center m-4 sm:m-12 border border-gray-400 rounded-lg  card-shadow-blur p-6 py-12"
        >
          <h1 className="text-white text-3xl my-4 max-w-2xl font-medium underline">
            Join our Community!
          </h1>
          <p className="text-white text-sm my-4 max-w-2xl ">
            Identer is all about community. It can also be considered a society
            and a movement that oversees the need of humanity. specially the
            young generations.
          </p>
          <p className="text-white text-sm my-4 max-w-2xl ">
            It is made of different people with different backgrounds. See how
            you can join and participate
          </p>
          <div
            data-aos="zoom-in"
            className=" mt-8 w-full max-w-sm flex items-center justify-between gap-2 "
          >
            {socials.map((social, i) => (
              <div key={i}>
                <Link href={`${social.route}`}>
                  <a target="_blank">
                    <img src={`${social.media}`} alt="" className="w-12" />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityTwo;
