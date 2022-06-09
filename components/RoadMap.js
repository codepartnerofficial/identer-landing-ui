import React from "react";

const RoadMap = () => {
  const roads = [
    {
      year: "Q1 2022 - Q2 2022",
      tasks: [
        "Project Formulation / Conceptualization",
        "Whitepaper and Webbsite / Social Media Set up",
      ],
    },
    {
      year: "Q3 2022 - Q4 2022",
      tasks: [
        "Webbsite Development, Seminars Trainings Market Engagement and Program Plannings ICO Starts",
      ],
    },
    {
      year: "Q1 2023 - Q2 2023",
      tasks: [
        "Massive Development Starts DEX Exchanges, CMC, CoinGecko listings Community Building  and Marketing",
      ],
    },
    {
      year: "Q3 2023 - Q4 2023 (Beyond)",
      tasks: [
        "Charity, Project Empowerment and Development.",
        "Additional Exchange Listings and Community Grows.",
      ],
    },
  ];

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(108.11deg, rgba(35, 35, 35, 0.53) 0%, #141F22 113.66%)",
        }}
        className="text-center p-4 sm:p-12 text-white"
      >
        <h1 className="text-3xl font-medium mb-16">Roadmap</h1>
        <div className="flex flex-col lg:flex-row justify-between items-center flex-wrap gap-8">
          {roads.map((road, i) => (
            <div key={i}>
              <div data-aos="zoom-in" className="flex items-start text-left  w-full max-w-lg">
                <div className=" m-2 my-1" >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15" cy="15" r="15" fill="#83FFFF" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-normal">{road.year}</h1>
                  <ul className="my-8">
                    {road.tasks.map((task, j) => {
                      return <li className="my-4" key={j}>{task}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoadMap;
