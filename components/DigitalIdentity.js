import React from "react";

const DigitalIdentity = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center m-4 sm:m-12 border border-gray-400 rounded-lg card-shadow-blur p-12 py-24">
          <div>
            <img
              src="/images/digital_identity.png"
              alt="service"
              className="w-full max-w-lg"
            />
          </div>
          <div>
            <h3 className="text-4xl font-semibold mt-8 text-white">
              Secure Your Digital Identity
            </h3>
            <div>
              <p className="text-gray-300 max-w-xl text-sm my-12 leading-6">
                <b className="text-blue-300">Identer.org</b> is your gateway to
                the world of Identer and{" "}
                <b className="text-orange-400"> UBS Records</b> where you can
                save your credential certificates (Proof-of-Idenity) and have a
                self- sovereign ownership rights over your own digital data.
                Below are the lists of datas you can save on Identer through UBS
                Records:
              </p>
            </div>
            <div>
              <ul className="list-disc text-blue-300 text-xs px-10">
                <li>
                  <p>
                    <span className="text-orange-400 text-lg">Education</span>{" "}
                    (academic records; anything related to education)
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-orange-400 text-lg">Health Care</span>{" "}
                    (medical certificate; any health records)
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-orange-400 text-lg">Enterprise </span>{" "}
                    (employee records; any business papers that are importants)
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-orange-400 text-lg">Finance </span>{" "}
                    (back certificate, taxations; any records with regards to
                    finance)
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-orange-400 text-lg">Government </span>{" "}
                    (Identity Records, License; any government entity)
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-orange-400 text-lg">Travels </span>{" "}
                    (passport, visa, flight ticket; any travel records)
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-orange-400 text-lg">Socials </span>{" "}
                    (sports tickets; any social events that is needing digital
                    records)
                  </p>
                </li>
              </ul>
            </div>
            <div>
                <p className="my-12 text-gray-400 text-xs max-w-lg leading-5" >Know How:  Recording of Digital Identity is handle by UBS Records (Decentralized Application of Identer Blockchain. To save your digital identification, kindly visit UBS Records website. </p>
            </div>
            <div>
              <button className="w-64 my-2 bg-white rounded p-2 font-semibold px-4 sm:mr-16">
                More about UBS Records
              </button>
              <button className="w-64 my-2 bg-blue-200 rounded p-2 font-semibold px-4">
                Get UBS Token
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalIdentity;
