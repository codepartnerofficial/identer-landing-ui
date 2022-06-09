import React from "react";

const DigitalIdentityTwo = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center m-4 sm:m-12 border border-gray-400 rounded-lg  card-shadow-blur p-12 py-24">
          <div>
            <img
              src="/images/digital_identity.png"
              alt="service"
              className="w-full max-w-lg"
            />
          </div>
          <div data-aos="fade-left">
            <h3 className="text-4xl font-semibold mt-8 text-white">
              Secure Your Digital Identity
            </h3>
            <div>
              <p className="text-gray-300 max-w-xl text-sm my-16 leading-6">
                <b className="text-blue-300">Identer.org</b> is your gateway to
                the world of Identer and Digital Identity Records where you can
                save your credential certificates (Proof-of-Idenity) and have a
                self- sovereign ownership rights over your own digital data.
                Below are the lists of datas you can save on Identer through its
                prototype DAPP.
              </p>
            </div>

            <div>
              <p className="my-20 text-gray-300 text-xs max-w-lg leading-5">
                Know How: Recording of Digital Identity is handle by UBS Records
                (Decentralized Application of Identer Blockchain. To save your
                digital identification, kindly visit UBS Records website.{" "}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className=" my-2 bg-blue-200 rounded-lg p-2 font-semibold px-4 hover:bg-black hover:text-white border  transition-all duration-500 ease-out underline">
                More about Digital Identity
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalIdentityTwo;
