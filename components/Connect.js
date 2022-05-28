import React from "react";
import Link from 'next/link'

const Connect = () => {
  const socials = [
    {
      media: "/images/tiktok.png",
      link: "/",
    },
    {
      media: "/images/facebook.png",
      link: "/",
    },
    {
      media: "/images/telegram.png",
      link: "/",
    },
    {
      media: "/images/twitter.png",
      link: "/",
    },

    {
      media: "/images/youtube.png",
      link: "/",
    },
    {
      media: "/images/in.png",
      link: "/",
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
          <div className=" mt-8 w-full max-w-2xl flex items-center justify-between gap-2 ">
            {socials.map((social, i) => (
              <div key={i}>
                <Link href={`${social.link}`}>
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
