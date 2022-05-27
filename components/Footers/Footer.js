import React from "react";
import {
  communityLinks,
  daosLinks,
  devloperLinks,
  enterpriceLinks,
  learnLinks,
  recordLinks,
} from "../../allLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="p-8 text-white roboto-font">
        <div className="flex justify-start xl:justify-between flex-wrap gap-4 sm:gap-16">
          {/* learn */}
          <div className="my-8">
            <h1 className=" font-bold mb-8">LEARN</h1>
            <div>
              {learnLinks.map((learn, i) => (
                <div key={i}>
                  <Link href={`${learn.route}`}>
                    <a className="text-sm">{learn.name}</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* record */}
          <div className="my-8">
            <h1 className=" font-bold mb-8">RECORD</h1>
            <div>
              {recordLinks.map((record, i) => (
                <div key={i}>
                  <Link href={`${record.route}`}>
                    <a className="text-sm">{record.name}</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* enterprice */}
          <div className="my-8">
            <h1 className=" font-bold mb-8 uppercase">enterprice</h1>
            <div>
              {enterpriceLinks.map((enterprice, i) => (
                <div key={i}>
                  <Link href={`${enterprice.route}`}>
                    <a className="text-sm">{enterprice.name}</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* dev & com */}
          <div>
            {/* devloper */}
            <div className="my-8">
              <h1 className=" font-bold mb-8 uppercase">devloper</h1>
              <div>
                {devloperLinks.map((devloper, i) => (
                  <div key={i}>
                    <Link href={`${devloper.route}`}>
                      <a className="text-sm">{devloper.name}</a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* community */}
            <div className="my-8">
              <h1 className=" font-bold mb-8 uppercase">community</h1>
              <div>
                {communityLinks.map((community, i) => (
                  <div key={i}>
                    <Link href={`${community.route}`}>
                      <a className="text-sm">{community.name}</a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* daos & contacts */}
          <div>
            {/* daos */}
            <div className="my-8">
              <h1 className=" font-bold mb-8 uppercase">daos</h1>
              <div>
                {daosLinks.map((daos, i) => (
                  <div key={i}>
                    <Link href={`${daos.route}`}>
                      <a className="text-sm">{daos.name}</a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-8">
              <h1 className=" font-bold mb-8 uppercase">contacts</h1>
              <div>
                <div className="flex gap-2 font-semibold">
                  <h1>Email:</h1>
                  <div>
                    <p>info@identer.net</p>
                    <p>support@identer.net</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-blue-200 text-center">Identer Technology is a community build  blockchain for the people and by the people.</p>
      </div>
    </>
  );
};

export default Footer;
