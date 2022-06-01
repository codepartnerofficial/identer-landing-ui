import React from "react";
import Link from "next/link";

const Connect = () => {
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
        <div className="flex flex-col items-center justify-center text-center  card-shadow-blur p-6 py-12">
          <h1 className="text-white text-2xl my-2 max-w-2xl font-medium ">
            Be the Change! Everything is Possible!
          </h1>
          <p className="text-gray-400 text-base my-2 max-w-2xl ">
            Connect with us for more Updates and Latest News.
          </p>
          <div
            data-aos="zoom-in"
            className=" mt-8 w-full max-w-2xl flex items-center justify-between gap-2 "
          >
            {socials.map((social, i) => (
              <div key={i}>
                <Link href={`${social.route}`}>
                  <a target="_blank">
                    <img src={`${social.media}`} alt="" className="" />
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

export default Connect;
