import React from "react";

const Service = () => {
  return (
    <>
      <div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center m-4 sm:m-12 border border-gray-400 rounded-lg card-shadow-blur p-12 py-24">
          <div>
            <h3 className="text-4xl font-semibold mt-8 text-white">
              Identer-as-a-Service
            </h3>
            <div>
              <p className="text-gray-300 max-w-lg text-sm mt-12 mb-4 leading-6">
                Realigning the right concept of blockchain as a technology is
                the key principle of Identer. As we observe the market and
                survey the consumers, their understanding of blockchain is only
                “trading, pump and dump, and exchanges” which is only 1% of what
                a blockchain can do.
              </p>
              <p className="text-gray-300 max-w-lg text-sm mt-8 mb-12 leading-6">
                Identer is a multi-purpose blockchain it has public and private
                node logic at which an Enterprise has the protection it needs in
                terms of data privacy for it is ISO 20022 compliant; meaning,
                you can develop projects that caters financial concepts, health,
                education, supply chain, logistics and other economical business
                entity.
              </p>
            </div>
            <div>
              <button className="w-56 my-2 bg-white rounded p-2 font-semibold px-4 sm:mr-16">
                What is Identer?
              </button>
              <button className="w-56 my-2 bg-blue-200 rounded p-2 font-semibold px-4">
                Get IDT
              </button>
            </div>
          </div>
          <div>
            <img
              src="/images/service.png"
              alt="service"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
