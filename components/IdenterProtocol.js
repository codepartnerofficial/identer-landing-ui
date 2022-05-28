import React from "react";

const IdenterProtocol = () => {
  const Architechtures = [
    "High Throughput",
    "Zero Trnasaction Finality",
    "Bonsai Tries Data Storage",
    "Use case of Ethereum and Hyperledger",
    "In-Built IPFS",
    "Deep Web Tracker",
    "Tessera Protocol",
    "Digital Identity DAPP (UBS Records)",
  ];

  const Automations = [
    "Digital Identifiers (DIDs)",
    "Interoperability",
    "Anonymity: Privacy Management",
    "Scalability (0.2-0.8 TPS)",
    "Financial Distribution (Proof Rewards)",
    "Automatic Token Creation",
    "Explorer to Every Token Deployed",
    "DAO Governance",
  ];

  return (
    <>
      <div className="bg-white p-8 lg:p-24 ibm-font">
        <div>
          <div className="flex flex-col justify-center items-center text-center px-4 sm:px-12">
            <h1 className="text-3xl font-semibold">
              Hyperetherium Identer Protocol
            </h1>
            <p className="text-xs mt-8 leading-5 max-w-4xl">
              Identer is a technology codified in blockchain hashing algorithm.
              It is a specilized blockchain focus on digital identity protection
              in any form and usage. The technology can be activated using
              internet and cryptographic currency; IDEN.{" "}
            </p>
          </div>

          <div className=" mt-12 md:mt-24 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:items-start justify-between ">
            <div>
              <h1 className="font-semibold">Architechture</h1>
              <ul className="list-disc  text-xs p-6">
                {Architechtures.map((Architechture, i) => (
                  <li className="my-2 text-gray-600" key={i}>
                    {Architechture}
                  </li>
                ))}
              </ul>
              <button className="w-64 my-2 bg-white rounded shadow-lg border p-2 font-semibold px-4 ">
                Start Building
              </button>
            </div>
            <div className=" hidden lg:flex flex-col items-center justify-center -mt-14">
              <div>
                <img src="/images/laptop.png" alt="laptop" className="" />
              </div>
              <div className="border-r border-gray-600 h-64 w-1"></div>
              <div>
                <img src="/images/projector.png" alt="projector" className="" />
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Blockchain Automation</h1>
              <ul className="list-disc  text-xs p-6">
                {Automations.map((Automation, i) => (
                  <li className="my-2 text-gray-600" key={i}>
                    {Automation}
                  </li>
                ))}
              </ul>
              <button className="w-64 my-2 bg-white rounded shadow-lg border p-2 font-semibold px-4 ">
                Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdenterProtocol;
