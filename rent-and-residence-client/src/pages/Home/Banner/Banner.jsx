import { useState } from "react";

const Banner = () => {
  const [selectDivision, setSelectDivision] = useState("");

  console.log(selectDivision);
  const divisions = [
    { value: "dhaka", label: "Dhaka" },
    { value: "chittagong", label: "Chittagong" },
    { value: "rajshahi", label: "Rajshahi" },
    { value: "khulna", label: "Khulna" },
    { value: "barisal", label: "Barisal" },
    { value: "sylhet", label: "Sylhet" },
    { value: "rangpur", label: "Rangpur" },
    { value: "mymensingh", label: "Mymensingh" },
  ];

  return (
    <div className="min-h-[80vh] grid grid-cols-12 justify-between items-center ">
      <div className="bg- col-span-7 h-full w-8/12 mx-auto flex flex-col justify-center items-center content-center">
        <h1 className="text-C_gray text-6xl font-semibold">
          Find your next <br />
          Perfect home in Madrid
        </h1>
        <p className="py-6 font-normal text-xl text-[#9b9b9b]">
          Through our proprietary platform, WpResidence is changing how agents
          and clients navigate the process of finding or selling a home.
        </p>

        {/* Search Field  */}
        <div className="join mt-5">
          {/* <div>
            <div>
              <input className="input join-item" placeholder="Search" />
            </div>
          </div> */}
          <select
            onChange={(e) => setSelectDivision(e.target.value)}
            className="select join-item block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option disabled selected>
              Choose a division
            </option>
            {divisions.map((division) => (
              <option key={division.value} value={division.value}>
                {division.label}
              </option>
            ))}
          </select>
          <div className="indicator">
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </div>

      {/* Hero Image  */}
      <div className="bg-white col-span-5  h-screen w-full bg-[url('https://i.ibb.co/ZzSgjqsT/Home-hero.webp')] bg-cover bg-center')]">
        {/* <img
          className="h-screen "
          src="https://i.ibb.co/ZzSgjqsT/Home-hero.webp"
        /> */}
      </div>
    </div>
  );
};

export default Banner;
